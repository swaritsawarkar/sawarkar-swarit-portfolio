import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: [number, number, number];
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

// Strict monochrome palette: whites and greys only
const ORB_COLORS: [number, number, number][] = [
  [255, 255, 255], // #ffffff pure white
  [224, 224, 224], // #e0e0e0
  [204, 204, 204], // #cccccc
  [170, 170, 170], // #aaaaaa
  [136, 136, 136], // #888888
  [102, 102, 102], // #666666
  [245, 245, 245], // #f5f5f5
  [221, 221, 221], // #dddddd
];

const ORB_COUNT = 32;
const NEIGHBORS = 3;
const MOUSE_RADIUS = 100;
const MOUSE_FORCE = 0.12;
const MAX_SPEED = 6.0;
const MIN_ORB_DIST = 50;
const ORB_REPULSION_FORCE = 0.3;
const DAMPING = 0.985;

function createOrb(width: number, height: number): Orb {
  const color = ORB_COLORS[Math.floor(Math.random() * ORB_COLORS.length)];
  const baseRadius = 2.5 + Math.random() * 2.5; // 2.5–5px
  const padding = baseRadius + 5;
  return {
    x: padding + Math.random() * (width - padding * 2),
    y: padding + Math.random() * (height - padding * 2),
    vx: (Math.random() - 0.5) * 1.8,
    vy: (Math.random() - 0.5) * 1.8,
    radius: baseRadius,
    baseRadius,
    color,
    alpha: 0.55 + Math.random() * 0.4,
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.008 + Math.random() * 0.01,
  };
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number>(0);
  const orbsRef = useRef<Orb[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (orbsRef.current.length === 0) {
        orbsRef.current = Array.from({ length: ORB_COUNT }, () =>
          createOrb(canvas.width, canvas.height),
        );
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const orbs = orbsRef.current;
      const mouse = mouseRef.current;

      // Pure black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);

      // Very subtle white center glow — barely perceptible
      const bgGrad = ctx.createRadialGradient(
        W * 0.5,
        H * 0.4,
        0,
        W * 0.5,
        H * 0.4,
        W * 0.7,
      );
      bgGrad.addColorStop(0, "rgba(255,255,255,0.01)");
      bgGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // ── Physics update ─────────────────────────────────────────────────────

      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.pulsePhase += orb.pulseSpeed;
        orb.radius = orb.baseRadius * (1 + 0.15 * Math.sin(orb.pulsePhase));

        // Cursor magnetic repulsion
        const dx = mouse.x - orb.x;
        const dy = mouse.y - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 1) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_FORCE;
          orb.vx -= (dx / dist) * force;
          orb.vy -= (dy / dist) * force;
        }

        // Orb-to-orb repulsion — keep orbs spread out
        for (let j = i + 1; j < orbs.length; j++) {
          const other = orbs[j];
          const odx = orb.x - other.x;
          const ody = orb.y - other.y;
          const od = Math.sqrt(odx * odx + ody * ody);
          if (od < MIN_ORB_DIST && od > 0.5) {
            const repulse =
              ((MIN_ORB_DIST - od) / MIN_ORB_DIST) * ORB_REPULSION_FORCE;
            const nx = odx / od;
            const ny = ody / od;
            orb.vx += nx * repulse;
            orb.vy += ny * repulse;
            other.vx -= nx * repulse;
            other.vy -= ny * repulse;
          }
        }
      }

      // Apply damping, clamp speed, integrate position, bounce off edges
      for (const orb of orbs) {
        orb.vx *= DAMPING;
        orb.vy *= DAMPING;

        const speed = Math.sqrt(orb.vx * orb.vx + orb.vy * orb.vy);
        if (speed > MAX_SPEED) {
          orb.vx = (orb.vx / speed) * MAX_SPEED;
          orb.vy = (orb.vy / speed) * MAX_SPEED;
        }

        orb.x += orb.vx;
        orb.y += orb.vy;

        // Hard clamp + bounce — orbs never leave screen
        const pad = orb.radius + 5;
        if (orb.x < pad) {
          orb.x = pad;
          orb.vx = Math.abs(orb.vx) * 0.6;
        } else if (orb.x > W - pad) {
          orb.x = W - pad;
          orb.vx = -Math.abs(orb.vx) * 0.6;
        }
        if (orb.y < pad) {
          orb.y = pad;
          orb.vy = Math.abs(orb.vy) * 0.6;
        } else if (orb.y > H - pad) {
          orb.y = H - pad;
          orb.vy = -Math.abs(orb.vy) * 0.6;
        }
      }

      // ── Draw rods: always connect each orb to its NEIGHBORS nearest orbs ──
      const drawn = new Set<string>();

      for (let i = 0; i < orbs.length; i++) {
        const a = orbs[i];

        const dists: { j: number; d: number }[] = [];
        for (let j = 0; j < orbs.length; j++) {
          if (i === j) continue;
          const dx = orbs[j].x - a.x;
          const dy = orbs[j].y - a.y;
          dists.push({ j, d: Math.sqrt(dx * dx + dy * dy) });
        }
        dists.sort((x, y) => x.d - y.d);

        let drawn_count = 0;
        for (const { j, d } of dists) {
          if (drawn_count >= NEIGHBORS) break;

          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (drawn.has(key)) {
            drawn_count++;
            continue;
          }
          drawn.add(key);
          drawn_count++;

          const b = orbs[j];

          const maxDist = Math.sqrt(W * W + H * H);
          const proximityFade =
            0.25 + 0.3 * Math.max(0, 1 - d / (maxDist * 0.35));

          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const mdx = mouse.x - mx;
          const mdy = mouse.y - my;
          const mouseMidDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const mouseGlow = Math.max(0, 1 - mouseMidDist / 260);

          const alpha = Math.min(0.5, proximityFade + mouseGlow * 0.2);

          // White lines with transparent fade
          ctx.beginPath();
          const lineGrad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          lineGrad.addColorStop(0, `rgba(255,255,255,${alpha})`);
          lineGrad.addColorStop(0.5, `rgba(255,255,255,${alpha * 0.6})`);
          lineGrad.addColorStop(1, `rgba(255,255,255,${alpha * 0.15})`);
          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = mouseGlow > 0.3 ? 1.2 : 0.55;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          // Subtle white glow when mouse is near
          if (mouseGlow > 0.15) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${mouseGlow * 0.18})`;
            ctx.lineWidth = 3;
            ctx.filter = "blur(2px)";
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.filter = "none";
          }
        }
      }

      // ── Draw orbs ─────────────────────────────────────────────────────────
      for (const orb of orbs) {
        const mdx = mouse.x - orb.x;
        const mdy = mouse.y - orb.y;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
        const glowBoost = Math.max(0, 1 - mouseDist / MOUSE_RADIUS);

        // Outer white glow
        const glowR = orb.radius * (4 + glowBoost * 3);
        const glow = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          glowR,
        );
        glow.addColorStop(
          0,
          `rgba(255,255,255,${orb.alpha * (0.22 + glowBoost * 0.18)})`,
        );
        glow.addColorStop(
          0.4,
          `rgba(255,255,255,${orb.alpha * (0.07 + glowBoost * 0.06)})`,
        );
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core orb — white center, grey edge
        const core = ctx.createRadialGradient(
          orb.x - orb.radius * 0.3,
          orb.y - orb.radius * 0.3,
          0,
          orb.x,
          orb.y,
          orb.radius,
        );
        core.addColorStop(
          0,
          `rgba(255,255,255,${orb.alpha * (0.9 + glowBoost * 0.1)})`,
        );
        core.addColorStop(
          0.5,
          `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.alpha * (0.85 + glowBoost * 0.15)})`,
        );
        core.addColorStop(
          1,
          `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},0)`,
        );
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = core;
        ctx.fill();
      }

      // Subtle white cursor halo
      if (mouse.x > 0 && mouse.x < W) {
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          55,
        );
        cursorGlow.addColorStop(0, "rgba(255,255,255,0.07)");
        cursorGlow.addColorStop(0.5, "rgba(255,255,255,0.02)");
        cursorGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 55, 0, Math.PI * 2);
        ctx.fillStyle = cursorGlow;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ display: "block" }}
    />
  );
}
