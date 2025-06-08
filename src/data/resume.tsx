import { Icons } from "@/components/icons";
import { FileText, HomeIcon, NotebookIcon } from "lucide-react";

  export const DATA = {
    name: "Archit Choudhury",
    initials: "AC",
    url: "https://archit.com",
    location: "Bhubaneswar, Odisha, India",
    locationLink: "https://www.google.com/maps/place/bhubaneswar",
    description:
      " I love building things and passionate about tech, phtography and sustainability. .",
    // summary:
    //   "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    // 
  summary: "I'm a lifelong learner driven by curiosity across **Tech**, **AI**, **Photography**, and **Sustainability**. I love exploring how innovation and creativity intersect, constantly upskilling to build thoughtful, real-world solutions that are both visually compelling and socially meaningful. When I’m not coding, I’m usually watching TV shows to unwind and get inspired.",
    avatarUrl: "/me1.jpg  ",

    skills: [
          // Languages
          "C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", 

          // Developer Tools
          "VS Code", "GitHub", "MySQL", "MongoDB", "Docker", "Jupyter Notebook", "Postman", "Git", "Linux",

          // Coursework (optional, but you can include these too if relevant)
          // "Data Structures", "OOPS", "DBMS", "ML", "AI", "Operating Systems", "Computer Networks",

          // Technologies & Frameworks
          "Tailwind CSS", "Node.js", "Express.js", "React.js", "Next.js", "NumPy", " Pandas","Scikit-learn", "Streamlit", "Langchain", "Langgraph",
    ],

    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],

    contact: {
      email: "architchoudhury10@gmail.com",
      tel: "",
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/arc-ch",
          icon: Icons.github,

          navbar: true,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/archit-choudhury-4037431b9/",
          icon: Icons.linkedin,

          navbar: true,
        },
        X: {
          name: "X",
          url: "https://x.com/",
          icon: Icons.x,

          navbar: true,
        },
        Youtube: {
          name: "Youtube",
          url: "https://www.youtube.com",
          icon: Icons.youtube,
          navbar: true,
        },
        email: {
          name: "Copy Email",
          // url: "mailto:architchoudhury10@gmail.com",
          url: "mailto:architchoudhury10@gmail.com?subject=Let's%20Connect&body=Hi%20Archit%2C%0A%0AI'd%20like%20to%20connect%20with%20you%20about...",
          icon: Icons.email,

          navbar: true,
        },
      },
    },

    // WORK
  work: [
    // BUILDSPACE S5
    {
      company: "Buildspace",
      href: "https://buildspace.so",
      badges: ["Typescipt", "Langgraph"],
      location: "Remote",
      title: "Project Builder & Contributor", 
      logoUrl: "/buildspace.jpg",
      start: "June 2024",
      end: "Nov 2024",
      description:[
        "• Based in San Francisco County, USA. Member of Nights & Weekends Season 5. Worked on several real-world projects using TypeScript and large language models (LLMs).", 
        "•  Collaborated with a global community of builders, exchanging ideas and feedback across time zones and cultures."]
    },

    // INTEL UNNATI PROGRAM
    {
      company: "Intel Corporation",
      badges: ["Data Science","Leadership" ],
      href: "https://intel.in",
      location: "Remote",
      title: "Data Analyst- Team Leader",
      logoUrl: "/intel.png",
      start: "May 2024",
      end: "July 2024",
    //    description: 
    // "Led a cross-functional team to design and implement a system for Knowledge Representation and Insight Generation from structured datasets, emphasizing advanced data analysis and predictive modeling.     Developed and deployed predictive algorithms that enhanced data-driven decision-making.Created clear, insightful visualizations using Seaborn and Matplotlib to improve result interpretation and presentation.   Personally integrated a natural language interface using PandasAI and few-shot learning, enabling non-technical users to interactively query datasets and receive actionable, downloadable outputs—bridging the gap between data science and business users.", 
    // },
    description: [
      "• In Intel's Unnati Program , Led a cross-functional team to design and implement a system for knowledge representation and insight generation from structured datasets, emphasizing advanced data analysis and predictive modeling.",
      "• Developed and deployed predictive algorithms that enhanced data-driven decision-making. Created clear, insightful visualizations using Seaborn and Matplotlib to improve result interpretation and presentation.",
      "• Personally integrated a natural language interface using PandasAI and few-shot learning, enabling non-technical users to interactively query datasets and receive actionable, downloadable outputs—bridging the gap between data science and business users."
    ],  
    },

    // THE ECO-GAME
    { 
      company: "The Eco-Game ",
      href: "https://architchoudhury10.medium.com/we-made-a-board-game-that-teaches-about-climate-change-b00f533e0b90",
      badges: ["Sustainability", "Product Design"],

      location: "India (On-site)",
      title: "Co-Creator & Lead Designer",
      logoUrl: "/images/blogs/boardgame.jpg",
      start: "Mar 2021",
      end: "Dec 2022",
      description:[
        "• Co-created and Led development of an educational board game during the Sustainable Design Challenge organized by Youth for Sustainabilty (YFS) and World University of Design, Haryana. Blog",
        "• Designed the game to educate children about climate change through engaging play, fostering environmental awareness and action.",
        "• Secured funding and strategic support from YFS to ensure project success and outreach.",
        "• Committed to social responsibility by donating an equivalent number of games sold to underprivileged children, with versions crafted in their Regional languages to ensure equal access to climate education.",
  ],
    },

    // ALT EFF
    {
      company: "ALT EFF",
      href: "https://www.alteff.in/",
      badges: ["Photoshop", "Social Media"],
      location: "India (Remote)",
      title: "Video Editor & Graphic Designer Intern",
      logoUrl: "/alteff.png",
      start: "Apr 2021",
      end: "Oct 2021",
      description: [
    "• Edited various video content for their Film Festival ensuring visual appeal. Handled social media promotion to drive engagement.",
    "•  Designed posters for over 50 Environment and Climate Change-oriented films, shows and Focused on visual storytelling for environmental education."
  ],
    
},

  ],

  // BLOGS
  blogPosts: [
  {
    title: "We made a Board Game that teaches about Climate Change",
    href: "https://architchoudhury10.medium.com/we-made-a-board-game-that-teaches-about-climate-change-b00f533e0b90",
    logoUrl: "/images/blogs/boardgame.jpg",
    description: "How a board game helps spread awareness on climate issues through interactive design.",
    badges: ["Climate", "Game Design"]
  },
  {
    title: "Ray-Ban Stories by Facebook",
    href: "https://architchoudhury10.medium.com/ray-ban-stories-by-facebook-6a95e428aa59",
    logoUrl: "/images/blogs/rayban.jpg",
    description: "Examining smart glasses and the intersection of fashion, tech, and privacy.",
    badges: ["AR", "Privacy", "Wearables"]
  },
  {
    title: "What is Pegasus spyware?",
    href: "https://architchoudhury10.medium.com/what-is-pegasus-spyware-5a0407bab8db",
    logoUrl: "/images/blogs/pegasus.jpg",
    description: "Exploring the powerful surveillance tool used to infiltrate devices worldwide.",
    badges: ["Cybersecurity", "Privacy"]
  },
  {
    title: "Spotify launches Greenroom, a Clubhouse Competitor",
    href: "https://architchoudhury10.medium.com/spotify-launches-greenroom-829f5acfff9b",
    logoUrl: "/images/blogs/greenroom.jpg",
    description: "Spotify’s entry into live audio and what it means for creators and users.",
    badges: ["Streaming", "Social Audio"]
  },
  {
    title: "Dark Patterns",
    href: "https://architchoudhury10.medium.com/dark-patterns-f1f1e54d77a9",
    logoUrl: "/images/blogs/darkpatterns.jpg",
    description: "A look at deceptive UI design tricks used to manipulate user behavior.",
    badges: ["UX", "Ethics"]
  },
  {
    title: "Sustainable Running Shoes by Adidas & Allbirds",
    href: "https://architchoudhury10.medium.com/sustainable-running-shoes-by-team-up-of-adidas-allbirds-fac210f3f4d8",
    logoUrl: "/images/blogs/adidasallbirds.jpg",
    description: "How sportswear giants are rethinking sustainability in footwear.",
    badges: ["Sustainability", "Footwear"]
  },
  {
    title: "AirTags: Apple’s New Trackers",
    href: "https://architchoudhury10.medium.com/airtags-apples-new-trackers-41bef8aeca6e",
    logoUrl: "/images/blogs/airtags.jpg",
    description: "An introduction to Apple's tracking device and concerns about misuse.",
    badges: ["Apple", "Hardware", "Privacy"]
  },
  {
    title: "Drones- A Filmmaker’s tool: DJI FPV",
    href: "https://architchoudhury10.medium.com/drones-a-filmmakers-tool-dji-fpv-6dc16c0c3595",
    logoUrl: "/images/blogs/dji.jpg",
    description: "DJI FPV drones and their growing role in modern cinematography.",
    badges: ["Filmmaking", "Drones", "Tech"]
  },
  {
    title: "NFTs Craze on the Digital Art market- Explained",
    href: "https://architchoudhury10.medium.com/nfts-craze-on-the-digital-art-market-explained-bb26236bcf59",
    logoUrl: "/images/blogs/nft.jpg",
    description: "Breaking down the hype, technology, and controversy around NFTs.",
    badges: ["NFT", "Blockchain", "Art"]
  },
  {
    title: "Ethical Wildlife Filmmaking",
    href: "https://architchoudhury10.medium.com/ethical-wildlife-filmmaking-f258a7a13857",
    logoUrl: "/images/blogs/wildlife.jpg",
    description: "Balancing cinematic storytelling with ethical wildlife practices.",
    badges: ["Filmmaking", "Wildlife", "Ethics"]
  },
    {
    title: "What is Empathetic Technology?",
    href: "https://architchoudhury10.medium.com/what-is-empathetic-technology-7e66da619f9",
    logoUrl: "/images/blogs/empathetic-tech.jpg",
    description: "Understanding how technology can respond to human emotions and improve interactions.",
    badges: ["Human-Computer Interaction", "AI", "Design"]
  },
  {
    title: "Someone’s eavesdropping",
    href: "https://architchoudhury10.medium.com/someones-eavesdropping-f3b2f5804218",
    logoUrl: "/images/blogs/eavesdropping.jpg",
    description: "An overview of how smart devices might be listening to us more than we realize.",
    badges: ["Privacy", "Surveillance"]
  },
  {
    title: "The technology that will revolutionize the art of filmmaking ft. The Mandalorian",
    href: "https://architchoudhury10.medium.com/the-technology-that-will-revolutionize-the-art-of-filmmaking-ft-the-mandalorian-396ca6cbb360",
    logoUrl: "/images/blogs/mandalorian.jpg",
    description: "Exploring virtual production and how it's reshaping cinema and series like The Mandalorian.",
    badges: ["Filmmaking", "Virtual Production", "Innovation"]
  },
  {
    title: "DIGITAL CARBON FOOTPRINT",
    href: "https://architchoudhury10.medium.com/digital-carbon-footprint-a3e585b7313f",
    logoUrl: "/images/blogs/carbon.jpg",
    description: "Measuring the environmental impact of our digital activities and ways to reduce it.",
    badges: ["Sustainability", "Technology", "Climate"]
  },
  {
    title: "How the BBC makes wildlife films that look like Hollywood movies",
    href: "https://architchoudhury10.medium.com/how-bbc-makes-planet-earth-like-a-hollywood-movie-37637e7e8bd",
    logoUrl: "/images/blogs/bbc.jpg",
    description: "Behind the scenes of BBC's high-quality wildlife documentaries and cinematic techniques.",
    badges: ["Filmmaking", "Wildlife", "BBC"]
  },
  {
    title: "Snowden",
    href: "https://architchoudhury10.medium.com/snowden-5cfb762359a",
    logoUrl: "/images/blogs/snowden.jpg",
    description: "The story of Edward Snowden and his global impact on privacy debates.",
    badges: ["Privacy", "Whistleblower", "Surveillance"]
  },
  {
    title: "The Social Dilemma",
    href: "https://architchoudhury10.medium.com/the-social-dilemma-c25570c4b552",
    logoUrl: "/images/blogs/socialdilemma.jpg",
    description: "A reflection on the dark side of social media as depicted in the popular documentary.",
    badges: ["Tech Ethics", "Social Media", "Netflix"]
  },
  {
    title: "The Great Hack",
    href: "https://architchoudhury10.medium.com/the-great-hack-28103025de07",
    logoUrl: "/images/blogs/greathack.jpg",
    description: "Uncovering how data was weaponized in the Cambridge Analytica scandal.",
    badges: ["Privacy", "Politics", "Data"]
  },
  {
    title: "Don’t Look Up - A Star-Studded Satire",
    href: "https://architchoudhury10.medium.com/dont-look-up-a-star-studded-satire-fed1cbb0e743",
    logoUrl: "/images/blogs/dontlookup.jpg",
    description: "Reviewing the apocalyptic satire and its reflection on society’s climate inaction.",
    badges: ["Film", "Satire", "Climate"]
  }

],

 // EDUCATION
  education: [
    // {
    //   school: "Buildspace",
    //   href: "https://buildspace.so",
    //   degree: "Remote Intern- nights & weekends s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "2024",
    //   end: "2024",
    // },
    {
      school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      href: "https://kiit.ac.in/",
      // degree: "B.Tech - Computer Science & Engineering       Grade: 9 CGPA",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/kiit.png",
      start: "2022",
      end: "2026",
      grade: "Grade: 9 CGPA",
    },

    {
      school: "D.A.V Public School, Kalinga Nagar",
      href: "http://davkng.org.in/",
      degree: " Class XII in Science",
      logoUrl: "/davkng.png",
      start: "2015",
      end: "2022",
      grade:"  Grade: 92.2%",
    },
    
  ],


  // PROJECTS
  projects: [
    // PROJECT 1-INSIGHTFUL INCOME ANALYSIS   
  {
    title: "Insightful Income Analysis",
    href: "https://archit-adult-income-v2.streamlit.app/", //  live link
    dates: "June 2024",
    active: true,
    description:
      "Developed a robust machine learning model for income prediction. Built a logistic regression model and created a Streamlit website for interactive data visualization. Integrated Gemini API and PandasAI to convert Natural Language Queries into downloadable CSV results.",
    technologies: [
      "Python",
      "Streamlit",
      "Gemini API",
      "PandasAI",
      "Logistic Regression",
      "Langchain",
      "OPEN AI API",
    ],
    links: [
      {
        type: "Website",
        href: "https://archit-adult-income-v2.streamlit.app/", //  live link
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/arc-ch/income-ml-project", // GitHub link
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/income.png",
    video: "", // Optional: add demo video if available maybe add later to cloudfare or aws
  },

  // PROJECT 2- MEETUP.APP
  {
    title: "Meetup.app",
    href: "https://meetup-app-dun.vercel.app/", // Replace with actual live link
    dates: "August 2024",
    active: true,
    description:
      "Developed a full-featured video conferencing web application with features like secure authentication, real-time communication, meeting management, and responsive design. Integrated Clerk for user authentication and Stream for real-time audio/video communication and meeting recordings.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "Stream",
      "ShadCN UI",
      "Tailwind CSS",
    ],

    links: [
      {
        type: "Website",
        href: "https://meetup-app-dun.vercel.app/", //  live link
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/arc-ch/meetup-app", //  GitHub link
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/meetup.png",
    video: "", // Optional: add demo video if available
  },

  // PROJECT 3- RESUME CLASSIFIER & QUERY BOT
  {
    title: "Resume Classifier & Query Bot",
    href: "https://resume-screening-assistant-archit.streamlit.app/", // Replace with actual live link
    dates: "March 2025",
    active: true,
    description:
      "Developed an AI-powered web app that analyzes resumes and predicts job categories using TF-IDF vectorization and Logistic Regression. Integrated Gemini AI for resume scoring, strengths/weaknesses analysis, and improvement suggestions. Added a Query Bot for smart, resume-related Q&A. Built with Streamlit.",
    technologies: [
      "Python",
      "Sklearn",
      "NLP",
      "TF-IDF",
      "Logistic Regression",
      "Gemini API",
      "Streamlit",
    ],
    links: [
      {
        type: "Website",
        href: "https://resume-screening-assistant-archit.streamlit.app/", // Replace with actual live link
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/arc-ch/resume-screening", // Replace with actual GitHub link
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/resume.png",
    video: "", // Optional: add demo video if available
  },

     // PROJECT 4- CHAT APP
 {
      title: "Chatify",
      href: "https://chat-app-3u0l.onrender.com/",
      dates: "Mar 2025",
      active: true,
      description:
        "A full-stack real-time messaging web app built with the MERN stack. Features include real-time communication with Socket.io, JWT-based authentication, global state management using Zustand, and a responsive UI using TailwindCSS and Daisy UI.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Zustand",
        "TailwindCSS",
        "Daisy UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://chat-app-3u0l.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/arc-ch/chat-app",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/chat.png", // Add a screenshot if you have one
      video: "", // Optional: Add a short demo video link if available
  },


  // PROJECT 5- IPL SCORE EXTENSION
  {
  title: "IPL Score Chrome Extension",
  href: "https://arc-ch.github.io/IPL-Score-Extension/",
  dates: "April 2023",
  active: true,
  description:
    "A lightweight Chrome extension that displays live IPL scores using the cricketdata.org API. Shows details like team names, scores, and match status with real-time updates. Designed to keep fans informed without needing to visit full websites.",
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Chrome Extensions",
    "cricketdata.org API"
  ],
  links: [
    {
      type: "Website",
      href: "https://arc-ch.github.io/IPL-Score-Extension/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/arc-ch/IPL-Score-Extension",
      icon: <Icons.github className="size-3" />,
    }
  ],
  image: "/ipl.png", // Optional: add a preview image or screenshot of the extension
  video: "", // Optional: link to a quick demo video/gif
},
  ],

  // RESEARCH PAPER
  research: [
  {
    title: "A Machine Learning and NLP Approach for Automated Candidate Evaluation and Optimization",
    href: "https://github.com/arc-ch/resume-screening/blob/main/FINAL%20IEEE%20PAPER.pdf", // arXiv, IEEE, or GitHub PDF etc.
    dates: "May 2025",
    description:
      "AI-driven system for resume analysis and query support using NLP and Gemini AI. After testing KNN, SVC, and logistic regression, the system uses TF-IDF with logistic regression for accurate scoring, feedback, and job-role classification.",
      technologies: [
      "Python",
      "Scikit-learn",
      "Natural Language Processing (NLP)",
      "TF-IDF Vectorization",
      "Logistic Regression",
      "K-Nearest Neighbors (KNN)",
      "Support Vector Classifier (SVC)",
      "Gemini API",
      "Streamlit",
      "Pandas",
      "Pickle",
    ],

    tags: [
      "Conference Paper",
      "IEEE Standard",
      "Research Study",
      "Natural Language Processing",
      "Machine Learning Models",
      "Academic Writing",
      "AI Ethics",
      "Query Assistant",
      "Peer-Reviewed",
      "TF-IDF",
      "Logistic Regression",
      "Gemini AI",
    ],

    image: "/paper.png", // You can include a thumbnail if you have one
    video: "", // Optional demo if you recorded one
    links: [
      {
        type: "PDF",
        href: "https://github.com/arc-ch/resume-screening/blob/main/FINAL%20IEEE%20PAPER.pdf", // link to paper or PDF
         icon: <FileText className="size-3" />, // imported directly
      },
      {
        type: "Code",
        href: "https://github.com/arc-ch/resume-screening",
        icon: <Icons.github className="size-3" />,
      },
    ],
  },
],
  // HACKATHONS
  hackathons: [
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com",
        },
      ],
    }
  ],
} as const;
