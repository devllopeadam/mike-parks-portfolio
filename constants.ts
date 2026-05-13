import { Tag } from "./components/Project";

export interface ShowcaseItem {
  id: string | number;
  title: string;
  description: string;
  subDescription?: string[];
  href: string;
  logo?: string;
  image?: string;
  tags: Tag[];
}

export const myProjects: ShowcaseItem[] = [
  {
    id: 1,
    title: "AI Healthcare Consultation System",
    description:
      "Developed an AI-powered healthcare consultation platform that enables patients to submit symptoms, receive triage guidance, schedule appointments, and communicate securely with providers through web and mobile experiences.",
    subDescription: [
      "Built secure patient and provider workflows including symptom intake, scheduling, messaging, and consultation summaries",
      "Delivered doctor dashboards, analytics, notifications, and operational tooling for real clinical usage",
      "Applied modern SaaS architecture and AI-assisted automation to create a production-ready healthcare platform",
      "Focused on responsive UX, reliability, and secure medical data handling across user journeys",
    ],
    href: "https://virtualtriage.ai/",
    logo: "",
    image: "/assets/projects/ai-healthcare-consultation-system/image.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodeJs.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Real Estate Management Platform",
    description:
      "Developed a full-stack real estate management platform that streamlines listings, tenant management, lease tracking, maintenance requests, payments, document handling, and communication through a centralized dashboard.",
    subDescription: [
      "Built responsive workflows for property search, tenant onboarding, rent collection, service requests, and owner reporting",
      "Integrated scalable dashboard patterns for administration, communication, and portfolio management",
      "Supported payment flows, document management, and role-based operational experiences",
      "Delivered a production-ready SaaS platform with modern UI and secure data workflows",
    ],
    href: "https://residen.io/",
    logo: "",
    image: "/assets/projects/real-estate-management-platform/image.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodeJs.svg" },
    ],
  },
  {
    id: 3,
    title: "B2B Cross-Border Payments System",
    description:
      "Developed a secure B2B cross-border payments platform that enables businesses to send, receive, track, and reconcile international transactions through a centralized multi-currency dashboard.",
    subDescription: [
      "Built beneficiary management, compliance workflows, transaction history, and payment status monitoring features",
      "Supported enterprise-grade financial operations for global business payments with clear operational UX",
      "Leveraged scalable full-stack architecture for secure transaction handling and dashboard performance",
      "Delivered a polished fintech SaaS experience with reliable workflows and production-ready foundations",
    ],
    href: "https://www.transfi.com/",
    logo: "",
    image: "/assets/projects/b2b-cross-border-payments-system/image.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodeJs.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 4,
    title: "Seychelles Footwear",
    description:
      "Developed and optimized a modern ecommerce website for an independent Los Angeles footwear brand with a clean, feminine shopping experience and streamlined product browsing.",
    subDescription: [
      "Focused on intuitive navigation, responsive layouts, and lifestyle-driven merchandising across collections",
      "Improved collection organization and product discovery to support engagement and conversions",
      "Balanced visual design, usability, and performance for a premium commerce presentation",
    ],
    href: "https://seychellesfootwear.com/",
    logo: "",
    image: "/assets/projects/seychelles-footwear/image.png",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "WordPress", path: "/assets/logos/wordpress.svg" },
    ],
  },
  {
    id: 5,
    title: "L5 Capital Partners",
    description:
      "Developed and maintained a polished Webflow website for a private investment firm with portfolio showcases, investor-focused navigation, team profiles, and premium brand presentation.",
    subDescription: [
      "Built a modern, professional experience with clean layouts and strong visual hierarchy",
      "Structured company detail pages, news sections, and investor-focused navigation flows",
      "Optimized responsive performance and ongoing content management for a boutique institutional brand",
    ],
    href: "https://www.lfivecapital.com/",
    logo: "",
    image: "/assets/projects/l5-capital-partners/image.png",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "GitHub", path: "/assets/logos/github.svg" },
    ],
  },
  {
    id: 6,
    title: "Austin Yoga Lounge",
    description:
      "Designed and optimized a modern Squarespace website for a boutique yoga studio with responsive layouts, clear pricing, class scheduling integration, and a warm editorial-style visual identity.",
    subDescription: [
      "Created a clean and welcoming user experience aligned with the studio's wellness-focused brand",
      "Improved page structure for memberships, workshops, private sessions, and scheduling flows",
      "Balanced responsive design, clarity, and conversion-focused service presentation across the site",
    ],
    href: "https://www.austinyogalounge.com/",
    logo: "",
    image: "/assets/projects/austin-yoga-lounge/image.png",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "WordPress", path: "/assets/logos/wordpress.svg" },
    ],
  },
];

export const educationItems: ShowcaseItem[] = [
  {
    id: 1,
    title: "Bachelor of Computer Science",
    description:
      "Studied Computer Science at Vatterott College in Missouri, United States.",
    subDescription: [
      "School: Vatterott College",
      "Location: Missouri, United States",
      "Duration: 1999.09 - 2003.06",
      "Subject: Computer Science",
    ],
    href: "",
    logo: "",
    tags: [
      { id: 1, name: "Vatterott College" },
      { id: 2, name: "1999.09 - 2003.06" },
      { id: 3, name: "Computer Science" },
    ],
  },
];

export const employmentHistoryItems: ShowcaseItem[] = [
  {
    id: 1,
    title: "CMS | Web Developer",
    description:
      "Majestic Limousine Coach • 2016.04 - 2026.01",
    subDescription: [
      "CMS Expert with extensive experience designing, developing, and optimizing websites on WordPress, Webflow, Wix, and Squarespace.",
      "Skilled in creating fast, responsive, and visually engaging websites tailored for both desktop and mobile users.",
      "Experienced in implementing SEO best practices, performance optimization, and scalable architectures to drive traffic and conversions.",
      "Adept at customizing CMS platforms to meet client needs, streamline workflows, and deliver high-quality digital experiences.",
    ],
    href: "",
    logo: "",
    tags: [
      { id: 1, name: "Majestic Limousine Coach" },
      { id: 2, name: "2016.04 - 2026.01" },
      { id: 3, name: "WordPress, Webflow, Wix, Squarespace" },
    ],
  },
  {
    id: 2,
    title: "System Engineer Contractor",
    description:
      "Tata Consultancy • 2011.04 - 2016.03",
    subDescription: [
      "Provided application and production support for multiple enterprise-level client projects across various business domains.",
      "Managed Level 2+ critical issue resolution related to health insurance and fitness rewards platforms, including fitness device integrations and gym-based member point systems.",
      "Collaborated with business stakeholders and technical teams to identify, escalate, and resolve major production incidents while ensuring timely issue closure.",
      "Conducted end-user support and training sessions to improve system adoption, feature understanding, and operational efficiency across client teams.",
    ],
    href: "",
    logo: "",
    tags: [
      { id: 1, name: "Tata Consultancy" },
      { id: 2, name: "2011.04 - 2016.03" },
      { id: 3, name: "Production Support" },
    ],
  },
  {
    id: 3,
    title: "PHP Developer / Web Systems",
    description:
      "Captain Jack • 2001.03 - 2009.07",
    subDescription: [
      "Developed and maintained web applications using PHP, MySQL, JavaScript, HTML, and CSS for ecommerce and business platforms.",
      "Managed web servers, DNS configuration, domain setup, and daily maintenance across Windows and Linux environments.",
      "Collaborated with cross-functional teams to deliver scalable software solutions, optimize application performance, and resolve technical issues.",
      "Applied security best practices, conducted code reviews, and improved overall system reliability and website functionality.",
    ],
    href: "",
    logo: "",
    tags: [
      { id: 1, name: "Captain Jack" },
      { id: 2, name: "2001.03 - 2009.07" },
      { id: 3, name: "PHP, MySQL, JavaScript" },
    ],
  },
];
