import type {
  Achievement,
  ContactLink,
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
  {
    id: "steering-wheel",
    title: "DIY Cardboard Gaming Wheel",
    description:
      "Built a working gaming steering wheel out of cardboard and a phone in 7th grade by combining phone gyroscope inputs with custom PC integration.",
    tags: ["Hardware Hack", "DIY", "Python", "Creative Engineering"],
    status: "completed",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "C++", "C", "Arduino", "HTML/CSS"],
  },
  {
    category: "Tech & AI",
    skills: [
      "Computer Vision",
      "Data Science",
      "AI / ML",
      "Stockfish Engine",
      "Robotics",
    ],
  },
  {
    category: "Creative",
    skills: [
      "Video Editing",
      "Adobe Premiere Pro",
      "After Effects",
      "Illustrator",
      "Web Design",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Public Speaking",
      "Social Media Management",
      "Content Creation",
      "Leadership",
      "Writing",
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
    year: "2025 to Present",
    title: "CMO at MUNIFY",
    organization: "MUNIFY",
    description:
      "Appointed Chief Marketing Officer: building brand strategy, directing videos, and leading content for a growing MUN platform. Ongoing.",
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
