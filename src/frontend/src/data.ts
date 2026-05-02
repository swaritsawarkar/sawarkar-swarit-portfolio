import type {
  Achievement,
  ContactLink,
  IdeaLabItem,
  Project,
  SkillGroup,
  TimelineEvent,
} from "./types";

export const achievements: Achievement[] = [
  {
    id: "wsro",
    icon: "🏆",
    title: "2nd Place",
    subtitle: "WSRO Nationals, Robo Race",
    description:
      "National-level robotics racing competition in Ahmedabad, competing against the best student robotics teams in India.",
    year: "2024",
    highlight: true,
  },
  {
    id: "spellbee",
    icon: "🥇",
    title: "Top 20 Nationally",
    subtitle: "National Spelling Bee",
    description:
      "Reached the national top 20 out of thousands of student participants across India.",
    year: "2023",
    highlight: true,
  },
  {
    id: "influenstar",
    icon: "⭐",
    title: "Influenstar Award",
    subtitle: "National Robotics League",
    description:
      "Recognized for outstanding influence and leadership within the National Robotics League ecosystem.",
    year: "2024",
    highlight: true,
  },
  {
    id: "debating",
    icon: "🎤",
    title: "National Qualifier",
    subtitle: "Indian Debating League",
    description:
      "Qualified for the national-level Indian Debating League, demonstrating strong oratory and argumentation skills.",
    year: "2024",
  },
  {
    id: "football",
    icon: "⚽",
    title: "State Level",
    subtitle: "SGFI Football",
    description:
      "Selected to represent at the State SGFI Football championship.",
    year: "2023",
  },
  {
    id: "technoxian",
    icon: "🤖",
    title: "International Participant",
    subtitle: "Technoxian Robo Race 2025",
    description:
      "Participated in the prestigious International Technoxian Robotics competition.",
    year: "2025",
  },
];

export const projects: Project[] = [
  {
    id: "ai-attention-analyzer",
    title: "AI Attention Analyzer",
    description:
      "A video analysis tool that detects attention drops in long-form content using motion, audio, pacing, and visual quality analysis. V1 is live and actively being iterated.",
    tags: ["Python", "OpenCV", "Audio Analysis", "Creator Tech"],
    githubUrl: "https://github.com/swaritsawarkar/attentiondropdetector",
    status: "in-progress",
  },
  {
    id: "shorts-channel-os",
    title: "Shorts Channel OS",
    description:
      "A local-first automation dashboard for generating, managing, tracking, and uploading YouTube Shorts. Built with Python, Streamlit, SQLite, FFmpeg, YouTube Data API, OAuth, analytics syncing, and a background autopilot system.",
    tags: [
      "Python",
      "Streamlit",
      "SQLite",
      "FFmpeg",
      "YouTube API",
      "OAuth",
      "Automation",
      "Analytics",
      "Background Workers",
      "AI Tools",
    ],
    status: "in-progress",
    channelId: "@Reddit.rush.stories1",
    features: [
      "Streamlit dashboard for video generation and upload control",
      "YouTube Data API upload flow with OAuth",
      "SQLite database for generated videos, metadata, and settings",
      "Autopilot mode that runs in the background",
      "Live progress tracking for generation, rendering, uploading, success, and errors",
      "Analytics sync for views, likes, comments, and performance insights",
      "Local-first design with no paid cloud hosting required",
      "Built for creator automation and short-form content workflows",
      "Fully automated end-to-end: no manual intervention required",
    ],
  },
  {
    id: "chess-tracker",
    title: "Chess Tracker AI",
    description:
      "A computer vision powered chess move tracker that detects moves from a physical chessboard and integrates with the Stockfish engine for AI analysis and gameplay.",
    tags: ["Python", "Computer Vision", "AI", "Stockfish"],
    githubUrl: "https://github.com/swaritsawarkar/chesstrackerpy",
    status: "completed",
  },
  {
    id: "munify",
    title: "MUNIFY",
    description:
      "A platform revolutionizing the MUN (Model United Nations) experience. Serving as CMO, creating content strategy, videos, and building the brand identity from scratch.",
    tags: ["CMO", "Video Editing", "Content Strategy", "Brand Building"],
    websiteUrl: "https://munifyx.com",
    status: "in-progress",
  },
  {
    id: "genz-book",
    title: "Gen Z Is Cooked",
    description:
      "A 15-year-old's take on attention, trends, comparison, and the quiet ways the internet is changing how we think, feel, and see ourselves. Currently writing.",
    tags: ["Writing", "Gen Z", "Social Commentary", "Self-Reflection"],
    status: "in-progress",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: [
      "Python",
      "JavaScript / React basics",
      "HTML / CSS",
      "C++",
      "C",
      "Arduino",
    ],
  },
  {
    category: "AI, Automation & Creator Tech",
    skills: [
      "AI workflow building",
      "Prompt engineering",
      "Codex",
      "Antigravity",
      "Caffeine.ai",
      "Google GenAI",
      "YouTube Data API",
      "OAuth",
      "Creator automation",
      "Analytics dashboards",
    ],
  },
  {
    category: "Backend / Tools",
    skills: [
      "SQLite",
      "Streamlit",
      "FFmpeg",
      "PyInstaller",
      "Background workers",
      "Local app packaging",
      "API integration",
    ],
  },
  {
    category: "Creative",
    skills: [
      "Video editing",
      "Short-form content systems",
      "Content strategy",
      "Creator tools",
      "Web design",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Public speaking",
      "Content creation",
      "Leadership",
      "Product thinking",
      "Writing",
      "Social media management",
    ],
  },
];

// Timeline ordered oldest to newest, Gen Z book last (in progress)
export const timeline: TimelineEvent[] = [
  {
    id: "t11",
    year: "2023",
    title: "NUS and NTU Data Science Workshop",
    organization: "National University of Singapore",
    description:
      "Spent 10 days at NUS and NTU attending a data science and AI workshop, a transformative exposure to cutting-edge research at 13.",
    type: "education",
  },
  {
    id: "t10",
    year: "2023",
    title: "Top 20, National Spelling Bee",
    organization: "National Spelling Bee",
    description:
      "Reached national top 20, demonstrating exceptional vocabulary and competitive performance under pressure.",
    type: "achievement",
  },
  {
    id: "t8",
    year: "2024",
    title: "Harvard Sustainability Summit",
    organization: "FLAME University",
    description:
      "Attended the International Harvard Sustainability Summit, engaging with global student leaders on climate and innovation.",
    type: "education",
  },
  {
    id: "t7",
    year: "2024",
    title: "WSRO Nationals, 2nd Place",
    organization: "WSRO, Ahmedabad",
    description:
      "Secured 2nd place in the national-level World Student Robotics Olympics Robo Race event.",
    type: "achievement",
  },
  {
    id: "t9",
    year: "2024",
    title: "Influenstar Award, NRL",
    organization: "National Robotics League",
    description:
      "Recognized with the Influenstar Award for leadership and social media impact within the NRL community.",
    type: "achievement",
  },
  {
    id: "t6",
    year: "2025",
    title: "Ex-CMO at MUNIFY",
    organization: "MUNIFY",
    description:
      "Previously served as CMO at MUNIFY, helping shape brand direction, content strategy, and video-led marketing for a Model United Nations platform.",
    type: "experience",
    websiteUrl: "https://munifyx.com",
  },
  {
    id: "t4",
    year: "2025",
    title: "Technoxian International Robo Race",
    organization: "Technoxian",
    description:
      "Represented at the international level in one of the world's largest robotics competitions.",
    type: "achievement",
  },
  {
    id: "t1",
    year: "2026",
    title: "AI Ignite Bootcamp",
    organization: "AI Ignite",
    description:
      "Immersive hands-on AI experience covering prompting, machine learning fundamentals, and real-world AI applications.",
    type: "education",
  },
  {
    id: "t2",
    year: "2026",
    title: "AI and Robotics Bootcamp",
    organization: "The Innovation Story",
    description:
      "Advanced bootcamp integrating AI systems with physical robotics, building the next frontier of intelligent machines.",
    type: "education",
  },
  {
    id: "t3",
    year: "2026",
    title: "IIT Madras, 8-Week Course",
    organization: "IIT Madras (In Progress)",
    description:
      "Enrolled in an intensive 8-week course from one of India's premier engineering institutes.",
    type: "education",
  },
  {
    id: "t5",
    year: "2026",
    title: "Writing: Gen Z Is Cooked",
    organization: "Independent, Book In Progress",
    description:
      "A 15-year-old's critical take on the internet generation: attention, identity, comparison, and what it really means to be online.",
    type: "project",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/swaritsawarkar",
    icon: "github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/swaritlol",
    icon: "instagram",
  },
  {
    label: "sawarkarswarit@gmail.com",
    href: "",
    icon: "mail",
  },
  {
    label: "+91 99608 79063",
    href: "",
    icon: "phone",
  },
];

export const ideaLabItems: IdeaLabItem[] = [
  {
    id: "idea1",
    title: "Minecraft Creator Timeline Tool",
    description:
      "An AI-assisted Minecraft creator tool that logs important gameplay moments like mining ores, fighting mobs, building, and exploring, then turns them into timeline markers for easier editing.",
    status: "Concept / MVP Planning",
    tags: ["Minecraft Modding", "Creator Tools", "Java", "Editing"],
  },
  {
    id: "idea3",
    title: "Gen Z Is Cooked",
    description:
      "A book concept exploring how online culture, trends, comparison, attention loss, and digital identity are shaping Gen Z in real time.",
    status: "Writing Soon",
    tags: ["Writing", "Gen Z", "Attention", "Culture"],
  },
  {
    id: "idea4",
    title: "Creator Intelligence System",
    description:
      "A broader idea around helping creators understand why parts of their content work or fail, using AI-generated insights instead of just raw analytics.",
    status: "Researching",
    tags: ["AI", "Content", "Data Science", "Product Thinking"],
  },
  {
    id: "creator-automation-lab",
    title: "Creator Automation Lab",
    description:
      "A collection of experiments around automating content workflows: generating videos, tracking uploads, analyzing performance, and building dashboards that help creators move faster.",
    status: "Exploring",
    tags: ["Python", "Automation", "Creator Tech", "Dashboards", "Workflows"],
  },
];
