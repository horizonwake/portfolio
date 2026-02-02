export default {
  // Personal Information
  personal: {
    name: "Jarred Brown",
    title: "Full Stack Developer",
    photo: "/images/profile.jpg",
    email: "jarredbrownmusic@gmail.com",
    location: "London, ON, Canada",
    bio: "Software Developer with 5+ years of experience building responsive web applications, REST APIs, and UI components using JavaScript, Svelte, Vue, React, and Node.js. Skilled in performance optimization, accessibility compliance (AODA/WCAG 2.1), automated testing, and supporting CI/CD pipelines.",
  },

  // Social Links
  social: {
    github: "https://github.com/horizonwake",
    linkedin: "https://linkedin.com/in/jarred-brown-dev",
  },

  // Resume
  resume: {
    pdfUrl: "/Jarred Brown Resume FT.pdf",
    downloadFileName: "Jarred_Brown_Resume.pdf",
  },

  // Brand Colors
  theme: {
    primary: "#117cc9",
    secondary: "#0458b7",
    accent: "#FF2D55",
    background: "#ffffff",
    surface: "#F5F5F7",
    text: "#1D1D1F",
    textSecondary: "#86868B",
  },

  // Navigation
  navigation: [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ],

  projectSections: [
    {
      id: "javascript",
      title: "JavaScript Projects",
      description:
        "APIs and web applications built with vanilla JavaScript and JavaScript frameworks",
      projects: [
        {
          id: 1,
          title: "Stock Comparison Tool",
          description:
            "Interactive stock analysis tool featuring multi-ticker comparison, 2-year historical data, company profile, and recent news.",
          technologies: ["JS", "HTML", "CSS", "Chart.js"],
          image: "/images/projects/stocksjs.png",
          github: "https://github.com/horizonwake/stocks",
          demo: "https://stocksjs.horizonwake.com",
        },
        {
          id: 3,
          title: "REST API Service",
          description:
            "A self-hosted monolithic API designed to serve my frontend portfolio applications using third-party data.",
          technologies: ["Node.js", "Express", "Redis"],
          image: "/images/projects/api.png",
          demo: "https://api.horizonwake.com/api-docs",
        },
      ],
    },
    // {
    //   id: "node",
    //   title: "Node.js Projects",
    //   description: "Backend services and API development",
    //   projects: [
    //     {
    //       id: 3,
    //       title: "REST API Service",
    //       description:
    //         "A self-hosted monolithic API designed to serve my frontend portfolio applications.",
    //       technologies: ["Node.js", "Express", "Redis"],
    //       image: "/images/projects/api.png",
    //       demo: "https://api.horizonwake.com/api-docs",
    //     },
    //   ],
    // },
  ],
};
