import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adithya S Kolavi",
  initials: "SK",
  location: "Bengaluru, India",
  about: "AI Researcher, Building Generative AI solutions at Scale",
  summary:
    "AI Researcher with experience in building generative AI solutions. Skilled in taking products from concept to completion and leading teams effectively. Experienced in AI, ML, and DL technologies, web development, and cloud computing.",
  // avatarUrl: "https://adithyask.com/adithyask.jpg",
  avatarUrl: "./adithyask.jpeg",
  personalWebsiteUrl: "https://adithyask.com",
  contact: {
    email: "adithyaskolavi@gmail.com",
    // tel: "+91 9148574393",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adithya-s-k",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adithya-s-kolavi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/adithya_s_k",
        icon: XIcon,
      },
      // {
      //   name: "Blog",
      //   url: "https://medium.com/@adithyask",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "PES University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "CognitiveLab",
      link: "https://www.cognitivelab.in",
      badges: ["On Site"],
      title: "AI Researcher",
      start: "January 2023",
      end: "present",
      description:
        "Pioneered one of India's first Kannada bilingual Large Language Model - Ambari-7b. Developed Cognitune, an enterprise-grade LLMops platform, reducing time to production by 60%.",
    },
    {
      company: "Indian Institute of Science (IISC)",
      link: "https://iisc.ac.in/",
      badges: ["On Site"],
      title: "Research Intern",
      start: "September 2023",
      end: "present",
      description:
        "Conducting research on Multi-Modal adaptation of LLMs. Training Vision Language model for various use cases such as Video Understanding, Object Detection/Segmentation and Image QnA.",
    },
    {
      company: "Mandelbulb Technologies",
      link: "https://mandelbulbtech.com/services/superai/",
      badges: ["Remote"],
      title: "Generative AI Developer",

      start: "May 2023",
      end: "August 2023",
      description:
        "Engineered an end-to-end generative AI application, increasing user engagement by 30% and improving response time by 25%.",
    },
    {
      company: "Enable Technologies",
      link: "https://enableupcycling.com/",
      badges: ["On Site"],
      title: "Full Stack Developer",

      start: "September 2022",
      end: "December 2022",
      description:
        "Developed the e-commerce platform enableupcycling.com, achieving a Lighthouse score of 90 in performance, accessibility, and SEO.",
    },
  ],
  skills: [
    "AI/ML/DL: PyTorch, Transformers, PEFT, Bitsandbytes, Diffusers, Hugging Face Ecosystem",
    "Python Libraries: NLTK, Scapy, FastAPI, Flask, Django, OpenCV, BeautifulSoup, Selenium, Pandas, Poetry, Langchain",
    "Web Frameworks: React.js, Next.js, Express, Node.js, Vue.js, Bootstrap, Tailwind",
    "Cloud: Azure, Azure Machine Learning, AWS, AWS SageMaker, Docker, Kubernetes, Cloudflare, E2E Cloud",
    "Big Data: Databricks, Azure Data Factory, Apache Spark, Hadoop, Kafka",
    "Databases: MongoDB, PostgreSQL, Firebase, Redis, MySQL, Supabase, Pinecone, FAISS, Qdrant, ChromaDb",
    "Languages: HTML, CSS, JavaScript, TypeScript, Python, C/C++, SQL",
  ],
  researchProjects: [
    {
      title: "Indic Eval/Leaderboard",
      techStack: ["spaCy", "NLTK", "Transformers", "SkyPilot", "Azure"],
      description:
        "Developed an evaluation framework for Indic Large Language Models, integrating TGI to speed up evaluation by 45%.",

      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/indic_eval",
      },
    },
    {
      title: "Vision-Augmented Retrieval and Generation",
      techStack: ["LLaVa", "Visual RAG", "LLama-index", "Qdrant"],
      description:
        "An innovative system integrating textual and visual information, enhancing RAG by 35% and improving contextual precision by 60%.",
    },
    {
      title: "Mixture of Lora Experts",
      techStack: ["PyTorch", "BERT", "PEFT", "Distributed Training", "HPC"],
      description:
        "A novel architecture facilitating the dynamic serving of multiple finetuned LLMs by swapping Lora Adapters during inference.",
    },
  ],
  projects: [
    {
      title: "PyRaft - Python Implementation of RAFT",
      techStack: ["Python", "FastAPI", "RAFT Consensus"],
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/PyRaft",
      },
      description:
        "Implemented RAFT Consensus algorithm from scratch using FastAPI and achieving a throughput of 50~250 transactions per second and improved system stability by 60%.",
    },
    {
      title: "Cognitune - End-to-End LLMops Platform",
      techStack: [
        "Python",
        "FastAPI",
        "Huggingface",
        "Transformers",
        "LLMs",
        "Containerization",
      ],
      description:
        "All-in-one platform for LLMops, featuring distributed data processing, multi-GPU fine-tuning, dynamic evaluation, and one-click high-throughput API deployment.",
    },
    {
      title: "Storyblocks - Generate Story Video from a Prompt",
      techStack: ["Fast API", "NextJS", "Diffusers", "MoviePy", "Wisper"],
      description:
        "Transformed text prompts into dynamic story videos with script generation, synchronized audio, and consistent visual style.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/Storyblocks",
      },
    },
  ],
  extraCurricular: [
    {
      title: "Google Developers Student Club Lead",
      description:
        "Led the Google Developers Student Club, fostering a collaborative environment for technology enthusiasts at PES University.",
    },
    {
      title: "Samarpana, Shunya Technical Head",
      description:
        "Directed technical teams for Samarpana (a fundraising marathon for families of martyrs) and Shunya (Math club) events.",
    },
    {
      title: "Hackathons Participant",
      description:
        "Won National Level Hackathons in Generative-AI - GenAI-Rush and Kodikon3. Participated in over 25 Hackathons with a 90% finalist selection rate.",
    },
  ],
} as const;
