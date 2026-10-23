import {
  GitHubIcon,
  GoogleScholarIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Adithya S Kolavi",
  initials: "SK",
  location: "Bengaluru, India",
  about:
    "Research Engineer at Hugging Face · Scaling RL Environments in the Open",
  summary:
    "I'm a Research Engineer at Hugging Face, working on scaling reinforcement learning environments in the open: the infrastructure, environments, and training recipes that let open models learn across coding, computer use, simulation, multilingual, and scientific domains. Before this, I founded CognitiveLab, the open-source lab behind Ambari-7B and Nayana (backed by Meta's LLaMA Impact Grant), and built agentic memory and real-time agents at Microsoft Research and knowledge-graph retrieval at Apple. My work has appeared at ICCV, NAACL, AAAI, NeurIPS, and CHI venues, and my open-source projects have 15k+ GitHub stars.",
  // avatarUrl: "https://adithyask.com/adithyask.jpg",
  avatarUrl: "/adithyask.jpeg",
  personalWebsiteUrl: "https://adithyask.com",
  resumeUrl: "/Adithya_s_kolavi_Research_HF.pdf",
  extendedBio: `
## Now: Scaling RL Environments in the Open

Models increasingly learn by acting in environments, not only from static data. At Hugging Face, I build the open infrastructure for that shift, so environments can be generated, trained on, and evaluated at scale:

- **[FineEnvs](https://github.com/adithya-s-k/FineEnvs)**: an open ecosystem of cross-domain RL environments, post-trained models, and reproducible training recipes spanning coding, computer use, simulation, multilingual, biology, and more.
- **[Multi-harness RL](https://huggingface.co/spaces/FineEnvs/multi-harness-rl)**: training built around OpenEnv, so the same environment runs across TRL, Harbor, and OpenReward.
- **[Repo2RLEnv](https://github.com/huggingface/Repo2RLEnv)**: turning repositories into verifiable coding tasks and RL environments for synthetic data at scale.
- **[The Ultimate Guide to RL Environments](https://huggingface.co/spaces/AdithyaSK/rl-environments-guide)**: a survey and reproduction of modern environment frameworks, read by 25k+ people.

## How I Got Here

**Open source first.** I started by building in public: tools for document parsing like OmniParse, LLM fine-tuning guides, and learning resources like AI Engineering Academy. That habit of shipping openly has shaped everything since.

**Multilingual and multimodal AI.** I founded [CognitiveLab](https://www.cognitivelab.in) to build AI for languages the field tends to overlook. We released Ambari-7B, India's first Kannada-English bilingual LLM, and Indic Eval, the first open benchmark suite for Indic LLMs. Our Nayana initiative, backed by Meta's LLaMA Impact Grant, produced a vision-language model across 22 languages, 2TB+ of synthetic document data, and NetraEmbed for cross-lingual document retrieval.

**Research at scale.** At Apple, I built LLM-powered knowledge-graph generation and agentic retrieval over enterprise data. At Microsoft Research, I worked on enterprise agentic memory that was transferred to M365 Copilot, and a real-time voice agent for video that won the Microsoft Global Hackathon. Both led to patents.

Each step pointed the same way: the hardest problems are now in how models learn from interaction, and that work should happen in the open.

## What I Care About

- **Openness**: environments, data, and recipes anyone can reproduce and build on
- **Breadth**: environments across domains and languages, not just English and code
- **Rigor**: evaluation that reflects real-world use, not only benchmarks

## Let's Connect

I'm always happy to talk about RL environments, post-training, multilingual and multimodal models, or open-source AI. Reach out by email or on X.
`,
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
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=RHftLbEAAAAJ&hl=en",
        icon: GoogleScholarIcon,
      },
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
      company: "Hugging Face",
      link: "https://huggingface.co/",
      badges: ["Hybrid"],
      title: "Research Engineer",
      start: "April 2026",
      end: "Present",
      description:
        "Building infrastructure to scale RL environments across data generation, training, and evaluation, including FineEnvs, an open ecosystem of cross-domain RL environments and training recipes. Built multi-harness RL training around OpenEnv (TRL, Harbor, OpenReward), created Repo2RLEnv for synthetic coding data generation, and authored the Ultimate Guide to RL Environments (25k+ reads).",
    },
    {
      company: "Microsoft Research",
      link: "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/",
      badges: ["On Site"],
      title: "Research Fellow",
      start: "August 2025",
      end: "March 2026",
      description:
        "Built a real-time voice agent for talking directly with video content, which was patented and won the Microsoft Global Hackathon among 10k+ participants. Developed enterprise-scale agentic memory across the Microsoft stack with 40% lower inference latency and 90%+ retrieval accuracy, resulting in a second patent and technology transfer to M365 Copilot.",
    },
    {
      company: "CognitiveLab",
      link: "https://www.cognitivelab.in",
      badges: ["On Site"],
      title: "Founder, Lead AI Researcher",
      start: "May 2023",
      end: "Present",
      description:
        "Leading an open-source AI research lab that received Meta's LLaMA Impact Grant for Nayana, a multimodal vision-language model covering 22 languages, backed by 2TB+ of synthetic multilingual document data. Pioneered Ambari-7B, India's first Kannada-English bilingual LLM, and Indic Eval, the first open-source benchmark suite for Indic LLMs. Open-source projects with 15k+ GitHub stars.",
    },
    {
      company: "Apple",
      link: "https://www.apple.com/",
      badges: ["On Site"],
      title: "ML Intern",
      start: "January 2025",
      end: "July 2025",
      description:
        "Built an internal LLM-powered knowledge graph generation and retrieval platform with 100k+ entities. Designed an agentic retrieval pipeline that reduced hallucinations by 45%, and used LLMs for relation extraction and schema induction to achieve a 3x increase in graph completeness.",
    },
    {
      company: "TurboML",
      link: "https://turboml.com/",
      badges: ["Remote"],
      title: "AI Developer",
      start: "June 2024",
      end: "November 2024",
      description:
        "Architected an LLMOps observability platform for real-time monitoring and evaluation of LLMs. Built a distributed tracing system for AI workflows that cut debugging time by 60%, and automated evaluation frameworks that reduced manual evaluation effort by 75%.",
    },
    {
      company: "NeoHumans",
      link: "https://neohumans.ai/",
      badges: ["Remote"],
      title: "AI Researcher",
      start: "June 2024",
      end: "August 2024",
      description:
        "Spearheaded the fine-tuning of a Large Language Model (LLM) using a custom synthetic data generation pipeline for multilingual tasks. Successfully deployed the model in a scalable architecture, enabling robust performance across multiple languages and tasks.",
    },
    {
      company: "Indian Institute of Science (IISC)",
      link: "https://iisc.ac.in/",
      badges: ["On Site"],
      title: "Research Intern",
      start: "September 2023",
      end: "May 2024",
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
    "AI/ML/DL: PyTorch, Transformers, PEFT, Bitsandbytes, Ray, OpenEnv, Harbor, TRL, SkyRL",
    "Python Libs: FastAPI, Flask, OpenCV, BeautifulSoup, Selenium, Pandas, Poetry, Langchain, LlamaIndex",
    "Web: React.js, Next.js, Express, Node.js, Vue.js, Bootstrap, Tailwind",
    "Cloud: Azure, Azure Machine Learning, AWS, AWS SageMaker, Docker, Kubernetes (AKS), Modal",
    "Big Data: Databricks, Azure Data Factory, Apache Spark, Hadoop, Kafka",
    "Databases: MongoDB, PostgreSQL, Firebase, Redis, MySQL, Supabase, Pinecone, FAISS, Qdrant, ChromaDb, LanceDB",
    "Languages: HTML, CSS, JavaScript, TypeScript, Python, C/C++, SQL",
  ],
  researchProjects: [
    {
      title: "FineEnvs",
      techStack: ["OpenEnv", "TRL", "Harbor", "OpenReward", "RL"],
      description:
        "An open ecosystem of cross-domain RL environments, post-trained models, training recipes, and reproducible artifacts spanning coding, computer use, simulation, multilingual, biology, and more.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/FineEnvs",
      },
    },
    {
      title: "Repo2RLEnv",
      techStack: [
        "Python",
        "Synthetic Data",
        "RL Environments",
        "Coding Agents",
      ],
      description:
        "Open-source library for synthetic coding data generation, unifying multiple repository-to-task approaches into one pipeline for reproducible RL environments and coding tasks at scale.",
      link: {
        label: "github.com",
        href: "https://github.com/huggingface/Repo2RLEnv",
      },
    },
    {
      title: "NetraEmbed",
      techStack: ["Transformers", "ColPali", "Vision-Language Models", "MTEB"],
      description:
        "State-of-the-art multilingual multimodal document retrieval with dense (NetraEmbed) and multi-vector (ColNetraEmbed) variants, reaching 0.716 NDCG@5 (+152% over baselines) across 22 languages. Ships with the NayanaIR benchmark (28k+ document images, 5.4k+ queries).",
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/Cognitive-Lab/NetraEmbed",
      },
    },
    {
      title: "Indic Eval/Leaderboard",
      techStack: ["spaCy", "NLTK", "Transformers", "SkyPilot", "Azure"],
      description:
        "Developed an evaluation framework for Indic Large Language Models, accommodating multiple translated benchmarks and a leaderboard around it for comparison.",

      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/indic_eval",
      },
    },
    {
      title: "Ambari-7b",
      techStack: ["Pytroch", "Transformers", "PEFT ", "Deepspeed", "Azure ML"],
      description:
        "India's first Kannada bilingual LLM utilizing the LLama2/3 base model, fine-tuned across multiple stages with 1 billion Kannada tokens and tokenization efficiency by 85%",
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/collections/Cognitive-Lab/ambari-65a2678d1051c2b0db3e01fe",
      },
    },
    {
      title: "YoloGemma",
      techStack: ["LLaVa", "PaliGemma", "FastGPT", "Transformers"],
      description:
        "Testing and evaluating the capabilities of Vision-Language models (PaliGemma) in performing computer vision tasks such as object detection and segmentation.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/YoloGemma",
      },
    },
    {
      title: "VARAG",
      techStack: ["LLaVa", "Visual RAG", "LLama-index", "Qdrant"],
      description:
        "Vision-Augmented Retrieval and Generation : a system integrating textual and visual information, enhancing RAG by 35% and improving contextual precision by 60%.",
    },
    {
      title: "Mixture of Lora Experts",
      techStack: ["PyTorch", "BERT", "PEFT", "Distributed Training", "HPC"],
      description:
        "A novel architecture facilitating the dynamic serving of multiple finetuned LLMs by swapping Lora Adapters during inference.",
    },
    {
      title: "ViViD",
      techStack: ["PyTorch", "LLaVA", "PEFT", "Distributed Training", "HPC"],
      description:
        "A state-of-the-art Vision-Language model specialized in converting complex PDFs into markdown with high speed and efficiency.",
    },
  ],
  open_source: [
    "https://github.com/adithya-s-k/manim_skill",
    "https://github.com/huggingface/Repo2RLEnv",
    "https://github.com/adithya-s-k/FineEnvs",
    "https://github.com/adithya-s-k/omniparse",
    "https://github.com/adithya-s-k/RAG-SaaS",
    "https://github.com/adithya-s-k/Gitvizz",
    "https://github.com/adithya-s-k/Omnidocs",
    "https://github.com/adithya-s-k/VARAG",
    "https://github.com/adithya-s-k/AI-Engineering.academy",
    "https://github.com/adithya-s-k/marker-api",
    "https://github.com/adithya-s-k/YoloGemma",
    "https://github.com/adithya-s-k/indic_eval",
    "https://github.com/adithya-s-k/Indic-llm",
  ],
  projects: [
    {
      title: "Manim Skill",
      techStack: ["Python", "Manim", "Agent Skills", "Claude Code"],
      description:
        "Agent skills that teach coding agents to create 3Blue1Brown-style math and ML animations with Manim. 1.2k+ GitHub stars.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/manim_skill",
      },
    },
    {
      title: "Cognitune",
      techStack: ["Python", "FastAPI", "Transformers", "Containerization"],
      description:
        "All-in-one platform for LLMops, featuring distributed data processing, multi-GPU fine-tuning, dynamic evaluation, and one-click high-throughput API deployment.",
    },
    {
      title: "Storyblocks",
      techStack: ["Fast API", "NextJS", "Diffusers", "MoviePy", "Wisper"],
      description:
        "Generate Story Video from a Prompt : Transformed text prompts into dynamic story videos with script generation, synchronized audio, and consistent visual style.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/Storyblocks",
      },
    },
    {
      title: "Marker API",
      techStack: ["Pytorch", "Fast API", "HPC", "Docker", "Transformer"],
      description:
        "A production-ready server with 400 github ⭐, easily deployable to convert PDFs, Word documents, etc., into markdown to aid RAG pipelines.",
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/marker-api",
      },
    },
    {
      title: "PyRaft",
      techStack: ["Python", "FastAPI", "RAFT Consensus"],
      link: {
        label: "github.com",
        href: "https://github.com/adithya-s-k/PyRaft",
      },
      description:
        "Python implementation of the RAFT consensus algorithm from scratch using FastAPI, achieving a throughput of 50-250 transactions per second",
    },
    {
      title: "Tokenizer Arena",
      techStack: ["Transformer JS", "React", "Tailwind CSS"],
      description:
        "A friendly arena to easily compare different tokenizers of various LLMs simultaneously, running completely in the browser.",
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/spaces/Cognitive-Lab/Tokenizer_Arena",
      },
    },
    {
      title: "Topic2Dataset",
      techStack: ["FastAPI", "NextJS", "Langchain", "GraphScraper", "Docker"],
      description:
        "Create high-quality instruction fine-tuning datasets for LLMs by providing a topic or website, allowing massive synthetic data generation.",
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
  publications: [
    {
      title:
        "M3DR: Towards Universal Multilingual Multimodal Document Retrieval",
      description:
        "A multilingual multimodal document retrieval framework using contrastive training for robust cross-lingual and cross-modal alignment, introducing the NetraEmbed models and the NayanaIR benchmark.",
      publisher:
        "AAAI 2026 | Workshop on New Frontiers in Information Retrieval",
      date: "2026",
      status: "Accepted",
      websiteUrl: "https://huggingface.co/papers/2512.03514",
      resourceUrl: "https://arxiv.org/abs/2512.03514",
      citation:
        "Kolavi, A. S., & Jain, V. (2025). M3DR: Towards Universal Multilingual Multimodal Document Retrieval. arXiv preprint arXiv:2512.03514.",
      tags: [
        "Document Retrieval",
        "Multilingual",
        "Multimodal AI",
        "Embeddings",
      ],
      showLinks: true,
    },
    {
      title:
        "INLAY: Preemptive, In-Context Intelligence for Casual Web Browsing",
      description:
        "A browsing assistant that preemptively surfaces relevant, in-context intelligence while people casually browse the web, without them having to ask.",
      publisher: "CHI 2026 | Extended Abstracts",
      date: "2026",
      status: "Published",
      websiteUrl: "https://doi.org/10.1145/3772363.3799065",
      resourceUrl: "https://dl.acm.org/doi/10.1145/3772363.3799065",
      citation:
        "Suvarnapathaki, P. K., Kolavi, A. S., Vijay, H., Das, M., Manchepalli, A., & Padmanabhan, V. N. (2026). INLAY: Preemptive, In-Context Intelligence for Casual Web Browsing. In Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26).",
      tags: ["HCI", "Web Agents", "Proactive AI", "LLM Applications"],
      showLinks: true,
    },
    {
      title:
        "TRACE: Transparent Reasoning and Attribution Chains for Extended Multimodal Contexts",
      description:
        "A framework for transparent, attributable reasoning over long multimodal contexts, linking each reasoning step back to its supporting evidence.",
      publisher: "NeurIPS 2025 | Workshop on Efficient Reasoning",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://neurips.cc/",
      citation:
        "Kolavi, A. S. (2025). TRACE: Transparent Reasoning and Attribution Chains for Extended Multimodal Contexts. NeurIPS 2025 Workshop on Efficient Reasoning.",
      tags: ["Reasoning", "Attribution", "Multimodal AI", "Long Context"],
      showLinks: false,
    },
    {
      title:
        "Nayana: A Foundation for Document-Centric Vision-Language Models via Multi-Task, Multimodal, and Multilingual Data Synthesis",
      description:
        "A comprehensive approach to generating synthetic datasets for training vision-language models on document understanding tasks across multiple languages.",
      publisher:
        "ICCV 2025 |Workshop on Computer Vision for Developing Countries (CV4DC)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://cv4dc.github.io/2025/call-for-papers/",
      resourceUrl: "https://openreview.net/pdf?id=Ji46STdhQQ",
      citation:
        "Kolavi, A. S., & Jain, V. (2025). Nayana: A Foundation for Document-Centric Vision-Language Models via Multi-Task, Multimodal, and Multilingual Data Synthesis. Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) Workshops.",
      tags: [
        "Dataset Generation",
        "Multimodal AI",
        "Document Understanding",
        "Synthetic Data",
      ],
      showLinks: true,
    },
    {
      title:
        "ViViD - Vision Language model for Unified Visual Understanding of Documents",
      description:
        "A vision-language model specifically optimized for document understanding tasks, capable of processing diverse document formats with high accuracy.",
      publisher:
        "CVPR 2025 | Emergent Visual Abilities and Limits of Foundation Models (EVAL-FoMo 2025)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://sites.google.com/view/eval-fomo-2-cvpr/home",
      resourceUrl: "https://example.com/vivid-paper.pdf",
      tags: [
        "Vision-Language Models",
        "Document Understanding",
        "Multimodal AI",
        "Foundation Models",
      ],
      showLinks: false,
    },
    {
      title:
        "Nayana OCR: A Scalable Framework for Document OCR in Low-Resource Languages",
      description:
        "Development of a specialized OCR system designed for low-resource Indic languages, addressing unique challenges in character recognition and document processing.",
      publisher: "NAACL 2025 | Language Models for Underserved Communities",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://lm4uc.github.io/",
      resourceUrl: "https://openreview.net/pdf?id=uaQR3BgHrV",
      citation:
        "Kolavi, A. S., Samarth, P., & Jain, V. (2025). Nayana OCR: A Scalable Framework for Document OCR in Low-Resource Languages. Proceedings of the 1st Workshop on Language Models for Underserved Communities (LM4UC).",
      tags: [
        "OCR",
        "Low-Resource Languages",
        "Document Processing",
        "Indic Languages",
      ],
      showLinks: true,
    },
    {
      title:
        "Nayana - A Unified Foundation Model for Multilingual, Multimodal, and Multitask Intelligence",
      description:
        "Winner of the 2024 Llama impact grant from Meta, this paper presents a foundation model architecture designed for multilingual and multimodal applications.",
      publisher: "LlamaCon 2025 | LLama Impact Grant 2024 winner",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://www.llama.com/",
      resourceUrl: "https://example.com/nayana-foundation-model-poster.pdf",
      tags: [
        "Foundation Models",
        "Multilingual",
        "Multimodal",
        "Multitask Learning",
      ],
      showLinks: false,
    },
    {
      title:
        "A Multi-Agent Approach for Iterative Refinement in Visual Content Generation",
      description:
        "This paper explores advanced multi-agent collaboration techniques in generative AI systems, focusing on iterative refinement for visual content creation.",
      publisher: "AAAI 2025 | Advancing LLM-Based Multi-Agent Collaboration",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://multiagents.org/workshop",
      resourceUrl:
        "https://multiagents.org/2025_artifacts/a_multi_agent_approach_for_iterative_refinement_in_visual_content_generation.pdf",
      citation:
        "Achala Nayak, R. S., Kolavi, A. S., Dias, N. T., & Somayaji P, S. (2025). A Multi-Agent Approach for Iterative Refinement in Visual Content Generation. AAAI 2025 Workshop on Advancing LLM-Based Multi-Agent Collaboration.",
      tags: [
        "Multi-Agent Systems",
        "Generative AI",
        "Visual Content",
        "LLM Collaboration",
      ],
      showLinks: true,
    },
    {
      title:
        "CAPTAIN: Continuous Automated Planning Through Autonomous Internet Navigation",
      description:
        "A novel framework for autonomous web navigation and task planning using large language models to perform complex multi-step operations.",
      publisher: "AAAI 2025 | Large Language Models for Planning (LM4Plan)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://llmforplanning.github.io/",
      resourceUrl: "https://openreview.net/pdf?id=OkvQyqv9H5",
      citation:
        "Kolavi, A. S. (2025). CAPTAIN: Continuous Automated Planning Through Autonomous Internet Navigation. AAAI 2025 Workshop on Large Language Models for Planning (LM4Plan).",
      tags: [
        "Automated Planning",
        "Web Navigation",
        "LLM Applications",
        "Autonomous Systems",
      ],
      showLinks: true,
    },
  ],
  achievements: [
    {
      title: "Joined Hugging Face as a Research Engineer",
      date: "April 2026",
      description:
        "Joined Hugging Face to build infrastructure for scaling RL environments across data generation, training, and evaluation, including FineEnvs, Repo2RLEnv, and multi-harness RL training around OpenEnv.",
      tags: ["Career", "Hugging Face", "RL Environments"],
      link: {
        label: "FineEnvs",
        href: "https://github.com/adithya-s-k/FineEnvs",
      },
    },
    {
      title: "The Ultimate Guide to RL Environments Reaches 25k+ Reads",
      date: "April 2026",
      description:
        "A comprehensive survey and reproduction of modern reinforcement learning environment frameworks, reaching 25k+ reads and 150k+ impressions.",
      tags: ["Writing", "RL Environments", "Milestone"],
      link: {
        label: "Read the Guide",
        href: "https://huggingface.co/spaces/AdithyaSK/rl-environments-guide",
      },
    },
    {
      title: "Won the Microsoft Global Hackathon",
      date: "2025",
      description:
        "Our real-time voice agent for talking directly with video content won the Microsoft Global Hackathon among 10k+ participants, and the work was patented.",
      tags: ["Award", "Hackathon", "Microsoft"],
    },
    {
      title: "Omniparse Hits 6500 Stars on GitHub",
      date: "April 2025",
      description:
        "Omniparse, our open-source document parsing library, has reached 6500 stars on GitHub, making it one of the most popular libraries for document processing.",
      fullDescription:
        "The open-source document parsing project Marker API has reached 500 stars on GitHub, becoming one of the most popular document processing tools for AI applications. The project has been adopted by several companies for their RAG pipelines and document processing needs. This milestone represents the growing community interest in high-quality PDF-to-markdown conversion tools that integrate seamlessly with modern AI workflows.",
      tags: ["Open Source", "GitHub", "Milestone"],
      link: {
        label: "View Repository",
        href: "https://github.com/adithya-s-k/omniparse",
      },
      socialEmbed: {
        type: "twitter",
        embedId: "1808230459358285834",
      },
    },
    // {
    //   title: "Featured Speaker at LLaMA Developer Conference",
    //   date: "March 2025",
    //   description:
    //     "Presented our work on multilingual adaptations of LLaMA models at Meta's official LLaMA Developer Conference in San Francisco.",
    //   tags: ["Speaking", "LLaMA", "Conference"],
    //   link: {
    //     label: "Conference Website",
    //     href: "https://www.llama.com/conference",
    //   },
    // },
    // {
    //   title: "Ambari-7b Reaches 10,000 Downloads",
    //   date: "February 2025",
    //   description:
    //     "Our Kannada-English bilingual LLM has been downloaded over 10,000 times on Hugging Face, marking a significant milestone for Indic language AI adoption.",
    //   fullDescription:
    //     "Our Kannada-English bilingual LLM has been downloaded over 10,000 times on Hugging Face, marking a significant milestone for Indic language AI adoption. The model has been cited in several research papers and is being used in production by companies and researchers working with Indic languages. This achievement highlights the growing interest in language technology for under-resourced languages and the impact of our work on democratizing AI across languages.",
    //   tags: ["Ambari", "Hugging Face", "Milestone"],
    //   socialEmbed: {
    //     type: "linkedin",
    //     embedId: "activity:123456789",
    //   },
    // },
    {
      title: "Awarded LLaMA Impact Grant by Meta AI",
      date: "April 2025",
      description:
        "Cognitivelab was seleted as one of the recipients of Meta's LLaMA Impact Grant for our work on extending large language models to under-resourced Indic languages.",
      tags: ["Award", "Grant", "Meta AI"],
      link: {
        label: "Announcement",
        href: "https://about.fb.com/news/2025/04/llama-impact-grant-recipients/?utm_source=AIatMeta&utm_medium=organic_social&utm_content=image&utm_campaign=llamacon",
      },
    },
    // {
    //   title: "Cognitune Platform Exits Beta",
    //   date: "December 2024",
    //   description:
    //     "Successfully launched the production version of Cognitune, our enterprise LLMOps platform, now serving over 20 organizations across India and Southeast Asia.",
    //   tags: ["Product Launch", "LLMOps", "Enterprise AI"],
    // },
  ],
  blogs: [
    {
      slug: "simulation-rl-environments",
      title: "Simulation RL Environments: Real-World Simulations for AI Agents",
      date: "2026-10-06",
      excerpt:
        "Real-world simulation RL environments for AI agents, from port dock planning to interactive 3D evaluation of every model rollout.",
      externalUrl:
        "https://huggingface.co/spaces/FineEnvs/simulation-rl-environments",
      tags: ["FineEnvs", "RL Environments", "Simulation", "Agents"],
      readingTime: "Article",
      published: true,
    },
    {
      slug: "game-to-rl-environment",
      title: "How to Turn a Game into an RL Environment",
      date: "2026-09-09",
      excerpt:
        "From an idea to a trained 4B model, with the dead ends left in: building a GeoGuesser RL environment end to end.",
      externalUrl: "https://huggingface.co/spaces/FineEnvs/geoguesser-article",
      tags: ["FineEnvs", "RL Environments", "GRPO", "OpenEnv"],
      readingTime: "Article",
      published: true,
    },
    {
      slug: "ultimate-guide-multi-harness-rl",
      title: "The Ultimate Guide to Multi-Harness RL",
      date: "2026-08-31",
      excerpt:
        "Train open models with RL inside real agent harnesses, running the same environments across TRL, Harbor, and OpenReward.",
      externalUrl: "https://huggingface.co/spaces/FineEnvs/multi-harness-rl",
      tags: ["FineEnvs", "Multi-Harness RL", "OpenEnv", "Harbor", "TRL"],
      readingTime: "Long-form guide",
      published: true,
    },
    {
      slug: "talk-scaling-rl-amd-ai-dev-day",
      title: "Talk: Scaling RL for LLMs (AMD AI Dev Day)",
      date: "2026-08-06",
      excerpt:
        "RL environments and RL training for LLMs, presented at AMD AI Dev Day.",
      externalUrl:
        "https://huggingface.co/spaces/AdithyaSK/scaling-rl-for-llms-amd-ai-dev-day",
      tags: ["Talk", "Slides", "RL Environments", "RL Training"],
      readingTime: "20 min talk",
      published: true,
    },
    {
      slug: "talk-multi-harness-training",
      title: "Talk: Multi-Harness Training",
      date: "2026-07-28",
      excerpt: "OpenEnv x Harbor: trainable tokens from any coding agent.",
      externalUrl:
        "https://huggingface.co/spaces/AdithyaSK/multi-harness-training-slides",
      tags: ["Talk", "Slides", "Multi-Harness RL", "OpenEnv"],
      readingTime: "Slides",
      published: true,
    },
    {
      slug: "talk-rl-environments-101",
      title: "Talk: RL Environments 101",
      date: "2026-07-24",
      excerpt:
        "From 'What is an env?' to training your own: the original 30-minute talk on RL environments.",
      externalUrl:
        "https://huggingface.co/spaces/AdithyaSK/rl-environments-101-slides",
      tags: ["Talk", "Slides", "RL Environments"],
      readingTime: "30 min talk",
      published: true,
    },
    {
      slug: "ultimate-guide-rl-environments",
      title:
        "The Ultimate Guide to RL Environments: Building and Scaling Them in the LLM Era",
      date: "2026-04-29",
      excerpt:
        "A comprehensive survey and reproduction of modern RL environment frameworks, with 25k+ reads and 150k+ impressions.",
      externalUrl:
        "https://huggingface.co/spaces/AdithyaSK/rl-environments-guide",
      tags: ["RL Environments", "OpenEnv", "Survey", "LLM Training"],
      readingTime: "Long-form guide",
      published: true,
    },
    {
      slug: "multi-agent-image-editing",
      title:
        "Cursor for Image Editing: A Multi-Agent Approach for Visual Content Creation",
      date: "2025-06-11",
      excerpt:
        "A novel multi-agent system that redefines how we generate and refine visual content, presented at the Multi-Agent Workshops at AAAI 2025.",
      tags: [
        "Multi-Agent Systems",
        "Computer Vision",
        "Image Generation",
        "AAAI 2025",
      ],
      readingTime: "8 min read",
      published: true,
      content: `# Cursor for Image Editing: A Multi-Agent Approach for Visual Content Creation and Editing

[Demo Video](https://www.youtube.com/watch?v=_EX5kFtxPcE)

In the fast-evolving world of digital advertising, crafting visually stunning and brand-consistent visuals can be a time-consuming and costly endeavor. Our team at PES University set out to tackle this challenge with a novel multi-agent system that redefines how we generate and refine visual content. Our work, recently presented at the Multi-Agent Workshops at AAAI 2025, introduces an innovative approach to creating posters, banners, and flyers with unprecedented control and efficiency.

## The Challenge with Current Image Generation Models

Foundational models like Stable Diffusion excel at producing high-quality images from text prompts. However, they often fall short when it comes to post-editing capabilities. Need to tweak the layout, align text perfectly, or swap an object? You're often left resorting to manual editing tools or complex techniques like inpainting. This limitation is especially problematic in industries like advertising, where precision and brand consistency are non-negotiable.

## Our Solution: A Multi-Agent System for Iterative Refinement

Our system combines the power of Large Language Models (LLMs) and Vision-Language Models (VLMs) to create a seamless workflow. Here's how it works:

### Initial Generation
We start by segmenting key objects from provided images, crafting a narrative that ties them together in a cohesive story, and generating an initial image.

### Iterative Refinement
Specialized agents analyze the image for visual inconsistencies, such as misaligned text or clashing colors, and propose targeted edits. This mimics the human editing process while allowing for manual tweaks.

### Customization
Users can fine-tune layouts, fonts, and effects through an integrated editor, ensuring the final image meets brand guidelines and marketing objectives.

This multi-agent architecture not only enhances control but also accelerates the creative process, making it ideal for producing consistent, high-quality visuals at scale.

## Why It Matters

Our approach addresses the repetitive and resource-intensive nature of traditional design workflows. By automating iterative refinement, we empower designers to focus on creativity rather than tedious adjustments. Whether it's a vibrant poster for a university or a sleek banner for a product launch, our system ensures visual coherence and brand alignment with minimal effort.

Curious to see it in action? Check out our [demo video](https://www.youtube.com/watch?v=_EX5kFtxPcE) or dive into the full paper presented at the Multi-Agent Workshops at AAAI 2025.

## Acknowledgments

This project was a true team effort. A huge shoutout to my talented teammates— Achala, Nigel, and Srinidhi— and our mentor, Prof. Srinath, for their invaluable contributions and guidance.`,
    },
    {
      slug: "kannada-llm",
      title: "Building Ambari-7b: India's First Kannada-English Bilingual LLM",
      date: "2025-01-10",
      excerpt:
        "The technical journey of creating a performant bilingual LLM for low-resource languages with limited training data.",
      externalUrl: "https://www.cognitivelab.in/blog/introducing-ambari",
      tags: ["Low-Resource Languages", "LLM Training", "Bilingual Models"],
      readingTime: "15 min read",
      published: true,
    },
    {
      slug: "llama-weight-matrix-changes",
      title:
        "From 7B to 8B Parameters: Understanding Weight Matrix Changes in LLama Transformer Models",
      date: "2024-04-19",
      excerpt:
        "Deep dive into the underlying architecture of LLama3 and the structural changes between 7B and 8B parameter models.",
      externalUrl:
        "https://adithyask.medium.com/from-7b-to-8b-parameters-understanding-weight-matrix-changes-in-llama-transformer-models-31ea7ed5fd88",
      tags: ["LLMs", "Model Architecture", "Transformers", "LLama"],
      readingTime: "10 min read",
      published: true,
    },
    {
      slug: "axolotl-guide",
      title: "Axolotl is all you need",
      date: "2024-04-15",
      excerpt:
        "A low-code guide to fine-tuning LLMs efficiently using the Axolotl library.",
      externalUrl:
        "https://adithyask.medium.com/axolotl-is-all-you-need-331d5de1b7c0",
      tags: ["Fine-tuning", "Axolotl", "LLMs"],
      readingTime: "7 min read",
      published: true,
    },
    {
      slug: "gemma-fine-tuning",
      title: "A Beginner's Guide to Fine-Tuning Gemma",
      date: "2024-02-21",
      excerpt:
        "A comprehensive guide to fine-tuning Google's Gemma model with practical examples and best practices.",
      externalUrl:
        "https://adithyask.medium.com/a-beginners-guide-to-fine-tuning-gemma-0444d46d821c",
      tags: ["Gemma", "Fine-tuning", "Google Models"],
      readingTime: "15 min read",
      published: true,
    },
    {
      slug: "mixtral-fine-tuning",
      title: "A Beginner's Guide to Fine-Tuning Mixtral Instruct Model",
      date: "2024-01-08",
      excerpt:
        "Unleashing the power of Mixtral: A comprehensive guide to fine-tuning this powerful mixture-of-experts model.",
      externalUrl:
        "https://adithyask.medium.com/a-beginners-guide-to-fine-tuning-mixtral-instruct-model-7f6a30aacf61",
      tags: ["Mixtral", "MoE", "Fine-tuning", "LLMs"],
      readingTime: "14 min read",
      published: true,
    },
    {
      slug: "run-huggingface-locally",
      title: "Run any Huggingface model locally",
      date: "2024-01-01",
      excerpt:
        "A practical guide and colab notebook to quantize LLMs in GGUF format to run them efficiently on your local machine.",
      externalUrl:
        "https://adithyask.medium.com/run-any-huggingface-model-locally-6bf817fdaff3",
      tags: ["GGUF", "Quantization", "Local Deployment", "Hugging Face"],
      readingTime: "8 min read",
      published: true,
    },
    {
      slug: "llm-awq-quantization",
      title: "Squeeze Every Drop of Performance from Your LLM with AWQ",
      date: "2023-10-21",
      excerpt:
        "A guide to quantizing LLMs using Activation-Aware Quantization (AWQ) on a Google Colab notebook for optimal performance.",
      externalUrl:
        "https://adithyask.medium.com/squeeze-every-drop-of-performance-from-your-llm-with-awq-activation-aware-quantization-53973365eaaa",
      tags: ["AWQ", "Quantization", "Model Optimization", "Colab"],
      readingTime: "9 min read",
      published: true,
    },
    {
      slug: "deploy-mistral-aws",
      title: "Deploy Mistral/Llama 7b on AWS in 10 mins",
      date: "2023-10-08",
      excerpt:
        "A step-by-step guide to deploying Mistral or Llama models on AWS in just three simple stages.",
      externalUrl:
        "https://adithyask.medium.com/deploy-mistral-llama-7b-on-aws-in-10-mins-cc80e88d13f2",
      tags: ["AWS", "Deployment", "Mistral", "Llama", "Cloud"],
      readingTime: "10 min read",
      published: true,
    },
    {
      slug: "mistral-fine-tuning",
      title: "A Beginner's Guide to Fine-Tuning Mistral 7B Instruct Model",
      date: "2023-10-06",
      excerpt:
        "Fine-tuning the Mistral 7B model for code generation using a single Google Colab notebook.",
      externalUrl:
        "https://adithyask.medium.com/a-beginners-guide-to-fine-tuning-mistral-7b-instruct-model-0f39647b20fe",
      tags: ["Mistral", "Fine-tuning", "Code Generation", "Colab"],
      readingTime: "16 min read",
      published: true,
    },
    {
      slug: "companionllama",
      title: "CompanionLLama: Your AI Sentient Companion",
      date: "2023-09-15",
      excerpt:
        "A journey into fine-tuning LLama2 to create an AI companion with personality and conversational abilities.",
      externalUrl:
        "https://adithyask.medium.com/companionllama-your-ai-sentient-companion-a-journey-into-fine-tuning-llama2-1ae843050359",
      tags: ["LLama2", "AI Companion", "Fine-tuning", "Personalization"],
      readingTime: "11 min read",
      published: true,
    },
  ],
} as const;
