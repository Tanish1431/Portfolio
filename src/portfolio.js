/* Change this file to get your personal Portfolio */

import emoji from "./utils/emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tanish Khandelwal",
  title: "Building Digital Experiences Through Code.",
  subTitle:
    "Computer Science undergraduate passionate about building scalable full-stack applications, solving engineering problems and exploring cloud technologies.",
  role: "Full-Stack Developer | Software Engineer | Cloud & DevOps Enthusiast",
  resumeLink:
    "https://drive.google.com/file/d/1Sqre3wQospJ_chdg7dq5tr-BCiAenwvP/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Tanish1431",
  linkedin: "https://linkedin.com/in/tanishkhandelwal1431",
  gmail: "tanishkhandelwal.3434@gmail.com",
  display: true
};

// About Me Section

const aboutSection = {
  title: "Engineering Solutions, Exploring Systems.",
  subtitle: "Computer Science & Business Systems Undergraduate",
  description:
    "I am a Computer Science and Business Systems undergraduate at SRM Institute of Science and Technology with a strong focus on software engineering, scalable web architectures, and modern cloud platforms.",
  descriptionSecondary:
    "My engineering approach centers on understanding how systems behave end-to-end—from designing responsive, accessible frontends to building robust RESTful backends and exploring containerized cloud deployments. I believe in writing clean, maintainable code and solving practical engineering problems that create reliable digital experiences.",
  highlights: [
    {
      title: "Degree & Specialization",
      value: "B.Tech in CS & Business Systems",
      detail: "SRM Institute of Science and Technology",
      badge: "SRM IST"
    },
    {
      title: "Academic Standing",
      value: "9.09 CGPA",
      detail: "Strong foundations in CS core & system design",
      badge: "Top Decile"
    },
    {
      title: "Expected Graduation",
      value: "May 2027",
      detail: "Seeking Software Engineering internships & roles",
      badge: "Class of 2027"
    },
    {
      title: "Core Technical Focus",
      value: "Full-Stack, Cloud & DevOps",
      detail: "Distributed systems, APIs, container orchestration",
      badge: "Engineering Focus"
    }
  ],
  display: true
};

// Technical Skills Section

const skillsSection = {
  title: "Technical Skills & Competencies",
  subTitle:
    "A structured breakdown of my verified technologies across programming languages, full-stack frameworks, databases, and DevOps tools.",
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "SQL"]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS"
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      id: "databases",
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Minikube", "OpenStack"]
    },
    {
      id: "tools",
      title: "Tools & Libraries",
      skills: [
        "Git",
        "GitHub",
        "Chart.js",
        "Cloudinary",
        "Mapbox",
        "MATLAB",
        "Excel"
      ]
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SRM Institute of Science and Technology",
      logo: "",
      subHeader:
        "Bachelor of Technology (B.Tech) in Computer Science and Business Systems",
      duration: "June 2023 – May 2027",
      desc: "CGPA: 9.09",
      descBullets: [
        "Focused coursework in Data Structures, Algorithms, Operating Systems, Database Management, and Cloud Computing",
        "Active member of technical communities and coding clubs"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Cloud and Networking Intern",
      company: "C-DAC Chennai",
      companylogo: "",
      date: "March 2026 – June 2026",
      desc: "Worked on cloud infrastructure and networking projects involving OpenStack deployment and administration.",
      descBullets: [
        "Deployed and managed OpenStack cloud infrastructure for internal development environments",
        "Configured Trove Database-as-a-Service for multi-tenant database provisioning",
        "Containerized services using Docker and orchestrated deployments with Kubernetes",
        "Troubleshot infrastructure issues across compute, network, and storage layers"
      ]
    },
    {
      role: "Freelance Digital Marketing Specialist",
      company: "Mamta Mewa Wala",
      companylogo: "",
      date: "May 2026 – July 2026",
      desc: "Managed digital marketing efforts to improve brand visibility and customer engagement.",
      descBullets: [
        "Created and managed social media content across multiple platforms",
        "Planned and executed marketing campaigns to drive brand awareness",
        "Improved online brand presence through consistent content strategy",
        "Supported business growth through digital marketing initiatives"
      ]
    }
  ]
};

// Big Projects

const bigProjects = {
  title: "Projects",
  subtitle: "Full-stack applications built with modern web technologies",
  projects: [
    {
      image: "",
      projectName: "WanderLust – Property Listing Platform",
      projectDesc:
        "A scalable full-stack web platform supporting 30+ property listings with authentication and review systems, powered by 20+ RESTful API routes on MVC architecture. Integrated Cloudinary and Mapbox APIs for real-time location services.",
      techStack: "React.js, Node.js, Express.js, MongoDB, Cloudinary, Mapbox",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Tanish1431/WanderLust"
        },
        {
          name: "Live Demo",
          url: "https://wanderlust-pcwu.onrender.com/listings"
        }
      ]
    },
    {
      image: "",
      projectName: "AlphaDesk – Fintech Investment Platform",
      projectDesc:
        "A full-stack fintech investment platform on the MERN stack with 10+ RESTful API endpoints secured with JWT-based authentication. Features interactive Chart.js dashboards for 20+ stock listings and a 'Time Machine' feature to simulate historical investment returns.",
      techStack:
        "React.js, React Router, Chart.js, Node.js, Express.js, MongoDB",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Tanish1431/AlphaDesk"
        },
        {
          name: "Live Demo",
          url: "https://alphadesks.onrender.com/dashboard"
        }
      ]
    },
    {
      image: "",
      projectName: "VersionControlSystem – Git-Inspired Repository Platform",
      projectDesc:
        "A custom version control engine built from first principles, replicating core Git operations including commit tracking, branching, and diff generation. Full-stack repository management platform with snapshot-based version history validated across 10+ test commits.",
      techStack: "React.js, Node.js, Express.js, MongoDB",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Tanish1431/VersionControlSystem"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Academic excellence, hackathon participation, mentorship, and industry certifications.",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Earned the AWS Certified Cloud Practitioner certification, validating foundational knowledge of AWS cloud services, architecture, security, and pricing.",
      image: "",
      imageAlt: "AWS Cloud Practitioner",
      footerLink: []
    },
    {
      title: "AWS Certified AI Practitioner",
      subtitle:
        "Earned the AWS Certified AI Practitioner certification, demonstrating understanding of AI/ML concepts, services, and responsible AI practices on AWS.",
      image: "",
      imageAlt: "AWS AI Practitioner",
      footerLink: []
    },
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle:
        "Completed the Google Data Analytics Professional Certificate (March 2026), covering data analysis, visualization, SQL, R, and Tableau.",
      image: "",
      imageAlt: "Google Data Analytics",
      footerLink: []
    },
    {
      title: "Academic Excellence",
      subtitle:
        "Achieved 9.69 SGPA in 4th Semester and 9.55 SGPA in 5th Semester, reflecting consistent academic performance in core Computer Science subjects.",
      image: "",
      imageAlt: "Academic Excellence",
      footerLink: []
    },
    {
      title: "Hackathon – ARC'25 National Level",
      subtitle:
        "Competed in the National Level Automation and Robotics Challenge (ARC'25), gaining hands-on exposure to engineering design challenges under competitive, time-boxed conditions.",
      image: "",
      imageAlt: "ARC Hackathon",
      footerLink: []
    },
    {
      title: "Technology Mentor",
      subtitle:
        "Delivered technology awareness sessions for 40+ students, introducing computer fundamentals, AI, and cloud technologies to improve student engagement and technical literacy.",
      image: "",
      imageAlt: "Technology Mentor",
      footerLink: []
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "tanishkhandelwal.3434@gmail.com"
};

const isHireable = true;

export {
  illustration,
  greeting,
  aboutSection,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable
};
