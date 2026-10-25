import { HomeIcon, NotebookIcon, BriefcaseBusiness } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "Janani Selvi ",
  initials: "J",
  url: "https://janani.io",
  location: "Chennai, TamilNadu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Creative UI/UX Designer, Graphic Designer, and Frontend Developer passionate about crafting intuitive user experiences, stunning visuals, and responsive web interfaces.",
  summary:
    "I’m a UI/UX Designer, Graphic Designer, and Frontend Developer passionate about transforming ideas into meaningful digital experiences. Skilled in Figma, visual design, and responsive web development, I craft intuitive interfaces, compelling graphics, and user-friendly websites that blend creativity, functionality, and usability.",
  avatarUrl: "/me.jpeg",
  Secskills: [
    { name: "HTML", img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { name: "CSS", img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { name: "BootStrap", img: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" },
    { name: "Tailwindcss", img: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
    { name: "JavaScript", img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
    { name: "React", img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
    { name: "Github", img: "https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" },
    { name: "Netlify", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/netlify-icon.png" },

  ],
  skills: [
    { name: "Figma", img: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
    { name: "AdobeXD", img: "https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000" },
    { name: "Sketch", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/sketch-icon.png" },
    { name: "PhotoShop", img: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000" },
    { name: "Illustrator", img: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000" },
    { name: "Indesign", img: "https://img.icons8.com/?size=100&id=13675&format=png&color=000000" },
    { name: "LightRoom", img: "https://img.icons8.com/?size=100&id=19313&format=png&color=000000" },
    { name: "Canva", img: "https://img.icons8.com/?size=100&id=lAWjO4LexGga&format=png&color=000000" },
    { name: "WonderFilmora", img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wondershare_filmora_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
    { name: "CapCut", img: "https://images.seeklogo.com/logo-png/43/1/capcut-logo-png_seeklogo-437025.png" },

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Work", icon: BriefcaseBusiness, label: "Work" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "j.jananiram@gmail.com",
    tel: "+918610817676",
    social: {
      Instagram: {
        name: "behance",
        url: "https://www.behance.net/jjananjegadee",
        icon: Icons.behance,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/janani-selvi-j-66a153349/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jananiselvi",
        icon: Icons.GitHub,
        navbar: true,
      },

    },
  },

  work: [

    {
      company: "Corpswell",
      href: "https://Corpswell.com/",
      badges: [],
      location: "Chennai, TamilNadu",
      title: "UI/UX and Graphic Designer(Intership) ",
      logoUrl: "/CWLogo.jpg.jpeg",
      start: "JUN 2026",
      end: "Present",
      description: "UI/UX Designer & Graphic Design Intern — Corpswell | 6 Months",

      description1: "",

      description2: "Worked on 4 UI/UX design projects, focusing on wireframing, prototyping, user-friendly interfaces, and responsive layouts. Collaborated with team members to understand project requirements and create intuitive, visually appealing digital experiences.",

      description3: "",

      description4: "Graphic Design & Video Editing",

      description5: "",

      description6: "Created 30+ posters and brand logos, along with engaging video content for digital platforms. Worked on visual branding, typography, color combinations, and creative layouts to maintain brand consistency. Also contributed to social media content creation and management, collaborating with the team to deliver creative assets on time.",

      description7: "",

      description8: "Frontend Development",

      description9: "",

      description10: "Developed responsive web interfaces using HTML, CSS, and JavaScript. Focused on creating clean layouts, implementing interactive elements, and ensuring a consistent user experience across different screen sizes. Collaborated with the team to translate design concepts into functional web pages.",

    },
  ],
  education: [
    {
      school: "K.Ramakrishnan College of Engineering",
      href: "#",
      degree: "Bachelor of Engineering in Computer Science and Engineering (B.E - CSE)",
      logoUrl: "",
      start: "2021",
      end: "2025",
    },
    {
      school: "Chellammal Matric Higher Secondary School",
      href: "",
      degree: "Grade XII Higher Secondary Certificate (HSC)",
      logoUrl: "",
      start: "2020",
      end: "2021",
    },
    {
      school: "RSK Higher Secondary School",
      href: "",
      degree: "Grade X Secondary School Certificate (SSC)",
      logoUrl: "",
      start: "2019",
      end: "2020",
    },

  ],
  projects: [
    {
      title: "Tiffin Box: Meal Planning & Delivery Mobile App",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed 50+ high-fidelity mobile screens covering meal planning, child profiles, nutrition tracking, meal customization, ordering, and delivery tracking. Delivered the full design process: user flows, wireframes, interactive prototypes, and a reusable component library",
      technologies: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      links: [
        {
          type: "Design Link",
          href: "https://www.figma.com/design/fZZe5ygAbnHMwcRmIKRyb4/Internship-projects?node-id=4-2&t=aHkeXhAEwJsdUf5F-1",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/Project/Tiffin.png",
      video: "",
    },
    {
      title: "HireNest: Job Discovery & Recruitment Mobile App",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed 40+ mobile screens for two user groups (candidates and recruiters), covering job discovery, applications, profiles, and hiring workflows. Developed user flows, wireframes, interactive prototypes, and reusable UI components to ensure scalability and consistency.",
      technologies: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      links: [
        {
          type: "Design Link",
          href: "https://www.figma.com/design/fZZe5ygAbnHMwcRmIKRyb4/Internship-projects?node-id=4-2&t=aHkeXhAEwJsdUf5F-1",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/Project/Hirenest.png",
      video: "",
    },

    {
      title: "Landing Page UI Design",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed responsive landing page sections, including hero banners, course discovery, navigation, and call-to-action (CTA) elements, to improve course discovery and enrollment flow. Applied visual hierarchy, typography, spacing, and brand guidelines to deliver a consistent, conversion-focused interface.",
      technologies: [
        "Figma",
        "AdobePhotoshop",
        "AdobeIllustrator",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/Landing.png",
      video: "",
    },
    {
      title: "DoctorCare: Doctor Appointment Booking Mobile App",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed mobile UI/UX for appointment booking and healthcare workflows, simplifying the patient journey from search to confirmation. Created user flows, wireframes, high-fidelity screens, reusable components, and interactive prototypes for stakeholder review.",
      technologies: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      links: [
        {
          type: "Design Link",
          href: "https://www.figma.com/design/fZZe5ygAbnHMwcRmIKRyb4/Internship-projects?node-id=4-2&t=aHkeXhAEwJsdUf5F-1",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/Project/Doctorcare.png",
      video: "",
    },
    {
      title: "Hakshatra: E-commerce Website Design",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed responsive e-commerce layouts for desktop, tablet, and mobile, focused on product presentation and intuitive navigation. Built consistent UI components and applied responsive design principles to maintain brand identity and improve the shopping experience.",
      technologies: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "shopify"
      ],
      links: [
        {
          type: "Design Link",
          href: "https://www.figma.com/design/fZZe5ygAbnHMwcRmIKRyb4/Internship-projects?node-id=4-2&t=aHkeXhAEwJsdUf5F-1",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/Project/Hakshatra.png",
      video: "",
    },
  ],

  Codeprojects: [
    {
      title: "E-Commerce Website",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed and developed a responsive e-commerce website using HTML, CSS, and JavaScript. Created an intuitive user interface with product listings, product details, category filtering, search functionality, shopping cart management, and interactive buttons. Focused on providing a smooth shopping experience with a clean layout, responsive design, and user-friendly navigation across desktop, tablet, and mobile devices.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://6adcc1ea1ea2bc9f1baeb27b--courageous-tiramisu-12d136.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jananiselvi/Weather_app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/Ecom.png",
      video: "",
    },
    {
      title: "Car Landing Page",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed and developed a modern, responsive car landing page using HTML, CSS, and JavaScript. Showcased vehicle specifications, featured models, pricing details, high-quality car images, and call-to-action buttons. Implemented interactive navigation, smooth scrolling, engaging visual elements, and responsive layouts to create an attractive and professional automotive website.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://landing-page-projectr.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jananiselvi/Car-Landing-page.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/cardream.png",
      video: "",
    },
    {
      title: "Expense Tracker",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Built an interactive expense tracker application using HTML, CSS, and JavaScript to help users manage their personal finances. Implemented features to add, edit, and delete income and expense records, calculate the total balance, and display transaction history. Used JavaScript to dynamically update financial summaries and local storage to preserve transaction data between browser sessions.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://6adcbbebeeb43636d65928d3--bright-dango-27babd.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jananiselvi/Expense_tracker.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/Expenses.png",
      video: "",
    },
    {
      title: "To-Do Application",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        " Developed a responsive to-do application using HTML, CSS, and JavaScript to help users organize and manage daily tasks efficiently. Implemented functionality to add, edit, delete, and mark tasks as completed. Included task status management, a clean user interface, and local storage to save tasks, allowing users to access their task lists even after refreshing the page.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-management-project.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jananiselvi/todolist.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/Todo.png",
      video: "",
    },
    {
      title: "Weather Application",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        " Designed and developed a weather application using HTML, CSS, and JavaScript to display real-time weather information for different locations. Integrated a weather API to retrieve current weather conditions, temperature, humidity, wind speed, and weather forecasts. Implemented city-based search, dynamic weather icons, loading states, and responsive layouts to deliver a simple and user-friendly weather experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://6adcbce8575c89a26c6e14bf--animated-madeleine-74c277.netlify.app/#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jananiselvi/Weather_app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/weather.png",
      video: "",
    },
    {
      title: "Smart Calculator Application",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        " Developed a smart calculator application using HTML, CSS, and JavaScript to perform basic arithmetic calculations through an interactive interface. Implemented addition, subtraction, multiplication, division, percentage calculations, decimal operations, and clear and delete functions. Used JavaScript to handle user input, process calculations, manage errors, and update results dynamically while ensuring a responsive and easy-to-use design. ",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://calculator-application-project4.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jananiselvi/calculator-application.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/calculater.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Product AI",
      dates: "2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Created 'Product AI,' a comprehensive website designed to help users compare a wide range of products, including mobiles, laptops, and home appliances. The platform provides detailed insights and comparisons, enabling users to make well-informed purchase decisions with ease, focusing on convenience, user experience, and reliability in product evaluation.",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "MongoDB",
          href: "#",
          disabled: "disabled"
        }, {
          title: "Express JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Node JS",
          href: "#",
          disabled: "disabled"
        },
      ],
    },
    {
      title: "Company Website ",
      dates: "2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Developed a professional website for a digital marketing company, showcasing services including digital marketing, website development, mobile app development, social media management, and SEO, aimed at enhancing online visibility and client engagement",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Strapi CMS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Framer Motion",
          href: "#",
          disabled: "disabled"
        },
      ],
    },
    {
      title: "Gold Landing Website",
      dates: "2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Designed and developed a website for a gold transaction company, featuring a user-friendly form to securely collect customer details and streamline transactions, ensuring a seamless and efficient user experience.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Emailjs",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Framer Motion",
          href: "#",
          disabled: "disabled"
        },
      ],
    },
    {
      title: "Candit",
      dates: " 2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Developed 'Candit,' a dynamic social media platform featuring Gen Z-friendly elements and interactive fun games, designed to enhance user engagement and provide an entertaining, community-driven experience.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "NEXT JS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "TailWind Css",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "CSS",
          href: "#",
          disabled: "disabled"
        },
        {
          title: "Framer Motion",
          href: "#",
          disabled: "disabled"
        },
      ],
    },

  ],
} as const;