import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adithya S Kolavi",
  initials: "SK",
  location: "Bengaluru, India",
  about: "AI Researcher, Building Generative AI solutions at Scale",
  summary:
    "Building AI that actually works! Currently deep into Vision-Language Models and Agentic Systems, with hands-on experience taking AI projects from wild ideas to real products. Love tinkering with model fine-tuning and cloud deployments. Big open-source enthusiast - you'll find me contributing to projects that make AI more accessible to everyone.",
  // avatarUrl: "https://adithyask.com/adithyask.jpg",
  avatarUrl: "/adithyask.jpeg",
  personalWebsiteUrl: "https://adithyask.com",
  resumeUrl: "/Adithya_s_kolavi_Research_v1.pdf",
  extendedBio: `
  
## My Journey in AI

My fascination with AI began during my early undergraduate years when I first explored the intersection of computer vision and natural language processing. What started as curiosity quickly evolved into a passion for building practical AI solutions that solve real-world problems.

### The Vision-Language Connection

I've always been intrigued by how machines can understand and interpret visual and textual information simultaneously. This interest led me to specialize in Vision-Language Models (VLMs), exploring how these multimodal systems can transform industries from healthcare documentation to creative content generation.

My work at the Indian Institute of Science provided me with a strong research foundation, allowing me to experiment with cutting-edge approaches to multimodal learning and representation. The experience of working in a top-tier research environment shaped my understanding of what makes AI systems robust and useful in practical settings.

### Language Technology for Everyone

One of my proudest achievements has been contributing to the development of language technologies for under-resourced languages. With Ambari-7b, we created one of India's first bilingual LLMs with strong performance in Kannada, demonstrating that language technology shouldn't be limited to just globally dominant languages.

This project taught me the importance of data curation, tokenization strategies specific to morphologically rich languages, and efficient fine-tuning techniques when working with limited computational resources.

### From Research to Production

My philosophy is that AI research should translate into real-world impact. At CognitiveLab, I've had the opportunity to bridge this gap by developing Cognitune, a platform that makes LLM deployment and fine-tuning accessible to organizations without specialized ML infrastructure.

Working with enterprise clients has given me valuable insights into the challenges of deploying AI in production environments - from monitoring and evaluation to addressing specific business requirements and scale concerns.

## Technical Approach

I believe in pragmatic AI development:

1. **Understanding the fundamentals**: Strong theoretical knowledge helps make better architectural decisions
2. **Data-centric mindset**: Great models start with great data
3. **Efficient implementation**: Optimizing for both performance and computational efficiency
4. **Continuous evaluation**: Rigorous testing against diverse metrics and real-world scenarios

## Open Source Contributions

Open source is central to my work philosophy. By contributing to and maintaining several open-source projects, I aim to make AI more accessible and democratize access to cutting-edge technologies. Projects like Marker API and VARAG represent my commitment to sharing knowledge and tools with the broader developer community.

## What I'm Learning Now

I'm currently exploring:

- Multi-agent systems for collaborative problem-solving
- Retrieval-augmented generation techniques for document understanding
- Efficient fine-tuning approaches for resource-constrained environments
- Evaluation frameworks for multilingual models

## Beyond Technology

Outside of my technical work, I enjoy participating in hackathons, mentoring students interested in AI, and discussing the societal implications of advancing AI technologies. I believe in responsible AI development that considers ethical implications and accessibility.

## Let's Connect

I'm always interested in collaboration opportunities, especially in the areas of:
- Vision-Language Models for practical applications
- Low-resource language technology
- Efficient deployment of AI systems
- Open-source AI tools and frameworks

Feel free to reach out if you'd like to discuss ideas, potential collaborations, or just chat about the future of AI!
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
      company: "Apple",
      link: "https://www.apple.com/",
      badges: ["On Site"],
      title: "ML Intern",
      start: "January 2025",
      end: "present",
      description: "Part of the Unified Intelligence team",
    },
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
      company: "TurboML",
      link: "https://turboml.com/",
      badges: ["Remote"],
      title: "AI Developer",
      start: "June 2024",
      end: "November 2024",
      description:
        "Contributed to the development of LLMOps platform, focusing on AI system observability and evaluation. Implemented advanced tracing, monitoring, and analytics solutions to gain insights into large-scale AI systems, which enhanced model transparency and performance.",
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
    "AI/ML/DL: PyTorch, Transformers, PEFT, Bitsandbytes, Diffusers, Hugging Face Ecosystem",
    "Python Libs: NLTK, Scapy, FastAPI, Flask, Django, OpenCV, BeautifulSoup, Selenium, Pandas, Poetry, Langchain",
    "Web: React.js, Next.js, Express, Node.js, Vue.js, Bootstrap, Tailwind",
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
    "https://github.com/adithya-s-k/omniparse",
    "https://github.com/adithya-s-k/RAG-SaaS",
    "https://github.com/adithya-s-k/VARAG",
    "https://github.com/adithya-s-k/AI-Engineering.academy",
    "https://github.com/adithya-s-k/marker-api",
    "https://github.com/adithya-s-k/YoloGemma",
    "https://github.com/adithya-s-k/indic_eval",
    "https://github.com/adithya-s-k/Indic-llm",
  ],
  projects: [
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
        "ViViD - Vision Language model for Unified Visual Understanding of Documents",
      description:
        "A vision-language model specifically optimized for document understanding tasks, capable of processing diverse document formats with high accuracy.",
      publisher:
        "CVPR 2025 | Emergent Visual Abilities and Limits of Foundation Models (EVAL-FoMo 2025)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://sites.google.com/view/eval-fomo-2-cvpr/home",
      resourceUrl: "https://example.com/vivid-paper.pdf",
      citation: "_",
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
      citation: "_",
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
      citation: "_",
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
        "Nayana: Synthesizing Multi-task, Multi-modal, and Multi-lingual Document Understanding Datasets for Vision-Language Models",
      description:
        "A comprehensive approach to generating synthetic datasets for training vision-language models on document understanding tasks across multiple languages.",
      publisher: "KDD 2025 | Datasets and Benchmarks Track",
      date: "2025",
      status: "Under Review",
      websiteUrl:
        "https://kdd2025.kdd.org/call-for-datasets-and-benchmarks-track-papers/",
      resourceUrl: "https://example.com/nayana-datasets-preprint.pdf",
      citation: "_",
      tags: [
        "Dataset Generation",
        "Multimodal AI",
        "Document Understanding",
        "Synthetic Data",
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
      citation: "_",
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
      date: "2024",
      status: "Accepted",
      websiteUrl: "https://llmforplanning.github.io/",
      resourceUrl: "https://openreview.net/pdf?id=OkvQyqv9H5",
      citation: "_",
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
