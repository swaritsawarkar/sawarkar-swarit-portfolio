# Design Brief: Swarit's Portfolio

**Purpose:** College-ready portfolio showcasing a 15-year-old's tech, robotics, and creative achievements. Must feel cutting-edge, ambitious, and unforgettable.

**Tone:** Professional yet energetic. Confident storyteller. Bold tech forward aesthetic without generic AI clichés.

## Palette (OKLCH)

| Role | Light Mode | Dark Mode | Usage |
|------|-----------|-----------|-------|
| **Background** | `0.99 0 0` (white) | `0.13 0 0` (deep charcoal) | Page background |
| **Foreground** | `0.15 0 0` (near black) | `0.93 0 0` (light grey) | Body text |
| **Primary/Accent** | `0.7 0.25 196` (electric cyan) | `0.7 0.25 196` (electric cyan) | Headlines, buttons, highlights |
| **Card** | `0.96 0 0` (light grey) | `0.17 0 0` (dark slate) | Card backgrounds |
| **Border** | `0.88 0 0` (light) | `0.25 0 0` (subtle dark) | Dividers, edges |
| **Muted** | `0.92 0 0` (off-white) | `0.21 0 0` (slate) | Secondary surfaces |

## Typography

| Layer | Font | Weight | Size | Usage |
|-------|------|--------|------|-------|
| **Display** | General Sans | 700 | 48px–72px | Hero name, section titles |
| **Body** | DM Sans | 400–600 | 16px–18px | Paragraphs, card content |
| **Mono** | JetBrains Mono | 500 | 13px–14px | Code snippets, technical details |

## Structural Zones

| Zone | Surface | Treatment |
|------|---------|-----------|
| **Header** | `bg-card border-b border-border` | Subtle elevation, no shadow. Fixed or sticky for nav. |
| **Hero** | `bg-background with accent gradient text` | Animated gradient text, geometric pattern accent, subtle glow. |
| **Section Backgrounds** | Alternate `bg-background` and `bg-muted/40` | Creates rhythm without overwhelming. |
| **Cards** | `bg-card border border-accent/20 rounded-lg` | Bordered cards with subtle cyan edge glow on hover. |
| **Footer** | `bg-muted/40 border-t border-border` | Low contrast, centered layout. |

## Component Patterns

- **Buttons:** Primary = `bg-primary text-primary-foreground` with hover lift. Secondary = `border border-border bg-transparent text-foreground`.
- **Cards:** Rounded corners, thin border, shadow on hover + Y-translate (card-hover utility).
- **Links:** Cyan underline (primary color), no decoration by default.
- **Tags/Badges:** Gradient background (primary to secondary), rounded-full, small padding.
- **Timeline:** Vertical connector line with achievement cards offset left/right, color-coded by type (achievement, project, education).

## Motion

- **Entrance:** Fade-in + slide-up on section scroll (0.5s ease-out).
- **Interaction:** Smooth transitions on hover (0.3s cubic-bezier).
- **Accent Elements:** Subtle floating animation on hero text and icon elements.
- **No bounce:** Keep easing smooth and purposeful. No elastic eases.

## Constraints

- **Anti-pattern avoidance:** No full-page gradients, no rainbow palettes, no generic blue CTAs.
- **Accessibility:** Maintain AA+ contrast (L difference ≥0.7 on text). Cyan accent is vibrant but readable on dark bg.
- **Dark mode default:** Launch in dark mode for tech aesthetic, light mode available as toggle.
- **Signature detail:** Animated gradient text in hero + cyan accent glow on interactive elements.

## Differentiation

This portfolio stands out through:
1. **Bold cyan accent** on dark base (tech, not corporate)
2. **Animated hero name** with gradient effect
3. **Card-based timeline** with visual connectors showing progression
4. **Skill badges** with gradient backgrounds
5. **Purposeful spacing rhythm** alternating dense and open zones

