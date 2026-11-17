import type { StackFilterCategory } from "@/lib/schemas/profile-schema";

export interface FeaturedProject {
  id: "astro-2026" | "pemira-2025" | "ormik-2025";
  indexLabel: string;
  title: string;
  year: string;
  oneLineSummary: string;
  techStack: string[];
  liveUrl: string;
  liveDomain: string;
  previewType: "screenshot" | "iframe";
  previewScreenshotUrl?: string;
  previewSurfaceTone: string;
}

export interface CapabilityItem {
  id: string;
  name: string;
  category: StackFilterCategory;
  shortUsage: string;
}

export interface CandidateProfile {
  fullName: string;
  nickname: string;
  age: number;
  targetRole: string;
  batchLabel: string;
  university: string;
  major: string;
  semester: number;
  zodiac: {
    sign: string;
    trait: string;
  };
  heroTagline: string;
  shortBio: string;
  avatarPath: string;
  experience: {
    period: string;
    role: string;
    company: string;
    shortSummary: string;
  };
  education: {
    period: string;
    institution: string;
    detail: string;
  };
  projects: FeaturedProject[];
  capabilities: CapabilityItem[];
  links: {
    portfolio: string;
    projectsArchive: string;
    github: string;
    linkedin: string;
    email: string;
  };
}

/**
 * Verified English candidate dataset for Firtiansyah Okta Resama (Okta).
 * Sourced directly from user details and https://hi.oktaa.my.id/projects.
 */
export const candidateProfileData: CandidateProfile = {
  fullName: "Firtiansyah Okta Resama",
  nickname: "Okta",
  age: 21,
  targetRole: "Front-End Developer",
  batchLabel: "Front-End Developer · 2026",
  university: "STT Terpadu Nurul Fikri",
  major: "Informatics Engineering",
  semester: 5,
  zodiac: {
    sign: "Libra",
    trait: "Libra: balancing clean interface design with reliable system architecture.",
  },
  heroTagline: "Front-End Developer building fast web systems.",
  shortBio:
    "5th-semester Informatics Engineering student at STT Terpadu Nurul Fikri. I build web interfaces with Next.js and Laravel, and run deployments with Docker and CI/CD.",
  avatarPath: "/images/okta-avatar.png",
  experience: {
    period: "Jan - Apr 2024",
    role: "Full-Stack Developer Intern",
    company: "Indi Technology",
    shortSummary:
      "Built an e-commerce marketplace and digital invitation platform with Laravel and JavaScript during my internship at Indi Technology.",
  },
  education: {
    period: "2024 - Present",
    institution: "STT Terpadu Nurul Fikri",
    detail: "B.Sc. Informatics Engineering · Semester 5 (SMKN 1 Depok SE Alumni)",
  },
  projects: [
    {
      id: "astro-2026",
      indexLabel: "01 / 03",
      title: "ASTRO 2026",
      year: "2026",
      oneLineSummary:
        "Campus festival and competition platform with batch pricing, automated participant guidelines, and a real-time quota dashboard.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM"],
      liveUrl: "https://astro.nurulfikri.ac.id/",
      liveDomain: "astro.nurulfikri.ac.id",
      // ASTRO sets X-Frame-Options: DENY, so we render a live Microlink homepage snapshot automatically
      previewType: "screenshot",
      previewScreenshotUrl:
        "https://api.microlink.io/?url=https%3A%2F%2Fastro.nurulfikri.ac.id%2F&screenshot=true&meta=false&embed=screenshot.url",
      previewSurfaceTone: "bg-gradient-to-br from-[#2B2F18] via-[#1C1F12] to-[#121212]",
    },
    {
      id: "pemira-2025",
      indexLabel: "02 / 03",
      title: "PEMIRA E-Voting",
      year: "2026",
      oneLineSummary:
        "Student election portal for STT Terpadu Nurul Fikri with verified login, candidate profiles, and an online ballot flow.",
      techStack: ["Next.js", "Tailwind CSS", "Drizzle ORM", "PostgreSQL"],
      liveUrl: "https://pemira.nurulfikri.ac.id/",
      liveDomain: "pemira.nurulfikri.ac.id",
      previewType: "iframe",
      previewSurfaceTone: "bg-gradient-to-br from-[#1B2838] via-[#141B24] to-[#121212]",
    },
    {
      id: "ormik-2025",
      indexLabel: "03 / 03",
      title: "ORMIK Explore",
      year: "2025",
      oneLineSummary:
        "New-student orientation site with a live event countdown and centralized maintenance controls.",
      techStack: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://ormikexplore-app.vercel.app/",
      liveDomain: "ormikexplore-app.vercel.app",
      previewType: "iframe",
      previewSurfaceTone: "bg-gradient-to-br from-[#26231F] via-[#1A1816] to-[#121212]",
    },
  ],
  capabilities: [
    {
      id: "nextjs",
      name: "Next.js & TypeScript",
      category: "Next.js",
      shortUsage: "Core architecture powering ASTRO 2026, PEMIRA, and ORMIK Explore.",
    },
    {
      id: "tailwind-gsap",
      name: "Tailwind CSS & Motion",
      category: "Tailwind CSS",
      shortUsage: "Responsive design systems paired with scroll-driven GSAP and React Bits motion.",
    },
    {
      id: "laravel-db",
      name: "Laravel & PostgreSQL",
      category: "Laravel",
      shortUsage: "E-commerce marketplace back-end (Indi Tech) and Drizzle ORM schemas.",
    },
    {
      id: "docker-cicd",
      name: "Docker & CI/CD",
      category: "Docker & CI/CD",
      shortUsage: "Containerized web services and automated deployment pipelines.",
    },
  ],
  links: {
    portfolio: "https://hi.oktaa.my.id",
    projectsArchive: "https://hi.oktaa.my.id/projects",
    github: "https://github.com/Tayen15",
    linkedin: "https://www.linkedin.com/in/firtiansyahokta/",
    email: "hi@oktaa.my.id",
  },
};
