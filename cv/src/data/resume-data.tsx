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
# Adithya S Kolavi - AI Researcher & Developer

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
      description:
        "Part of the Unified Intelligence team, working on Knowledge Graphs and AI systems.",
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
    "https://github.com/adithya-s-k/Indic-llm"
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
      title: "ViViD - Vision Language model for Unified Visual Understanding of Documents",
      description: "A vision-language model specifically optimized for document understanding tasks, capable of processing diverse document formats with high accuracy.",
      publisher: "CVPR 2025 | Emergent Visual Abilities and Limits of Foundation Models (EVAL-FoMo 2025)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://cvpr2025.thecvf.com/",
      resourceUrl: "https://example.com/vivid-paper.pdf",
      citation: "Kolavi, A. S., Kumar, P., & Reddy, L. (2025). ViViD: Vision Language model for Unified Visual Understanding of Documents. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) EVAL-FoMo Workshop, pp. 342-351.",
      tags: ["Vision-Language Models", "Document Understanding", "Multimodal AI", "Foundation Models"]
    },
    {
      title: "Nayana OCR: A Scalable Framework for Document OCR in Low-Resource Languages",
      description: "Development of a specialized OCR system designed for low-resource Indic languages, addressing unique challenges in character recognition and document processing.",
      publisher: "NAACL 2025 | Language Models for Underserved Communities",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://2025.naacl.org/",
      resourceUrl: "https://example.com/nayana-ocr-paper.pdf",
      citation: "Kolavi, A. S., Sharma, R., & Bhat, S. (2025). Nayana OCR: A Scalable Framework for Document OCR in Low-Resource Languages. In Proceedings of NAACL 2025: Language Models for Underserved Communities Workshop, pp. 78-85.",
      tags: ["OCR", "Low-Resource Languages", "Document Processing", "Indic Languages"]
    },
    {
      title: "Nayana - A Unified Foundation Model for Multilingual, Multimodal, and Multitask Intelligence",
      description: "Winner of the 2024 Llama impact grant from Meta, this paper presents a foundation model architecture designed for multilingual and multimodal applications.",
      publisher: "LlamaCon 2025 | LLama Impact Grant 2024 winner",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://ai.meta.com/llama/",
      resourceUrl: "https://example.com/nayana-foundation-model-poster.pdf",
      citation: "Kolavi, A. S., & Team, Cognitive Lab. (2025). Nayana: A Unified Foundation Model for Multilingual, Multimodal, and Multitask Intelligence. LlamaCon 2025, Meta AI Research.",
      tags: ["Foundation Models", "Multilingual", "Multimodal", "Multitask Learning"]
    },
    {
      title: "Nayana: Synthesizing Multi-task, Multi-modal, and Multi-lingual Document Understanding Datasets for Vision-Language Models",
      description: "A comprehensive approach to generating synthetic datasets for training vision-language models on document understanding tasks across multiple languages.",
      publisher: "KDD 2025 | Datasets and Benchmarks Track",
      date: "2025",
      status: "Under Review",
      websiteUrl: "https://kdd.org/kdd2025/",
      resourceUrl: "https://example.com/nayana-datasets-preprint.pdf",
      citation: "Kolavi, A. S., Verma, A., & Singh, M. (2025). Nayana: Synthesizing Multi-task, Multi-modal, and Multi-lingual Document Understanding Datasets for Vision-Language Models. Under review for KDD 2025 Datasets and Benchmarks Track.",
      tags: ["Dataset Generation", "Multimodal AI", "Document Understanding", "Synthetic Data"]
    },
    {
      title: "A Multi-Agent Approach for Iterative Refinement in Visual Content Generation",
      description: "This paper explores advanced multi-agent collaboration techniques in generative AI systems, focusing on iterative refinement for visual content creation.",
      publisher: "AAAI 2025 | Advancing LLM-Based Multi-Agent Collaboration",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://aaai.org/aaai-conference/",
      resourceUrl: "https://example.com/multi-agent-visual-content-paper.pdf",
      citation: "Kolavi, A. S., Jain, D., & Patel, N. (2025). A Multi-Agent Approach for Iterative Refinement in Visual Content Generation. In Proceedings of the 39th AAAI Conference on Artificial Intelligence, Workshop on Advancing LLM-Based Multi-Agent Collaboration, pp. 532-540.",
      tags: ["Multi-Agent Systems", "Generative AI", "Visual Content", "LLM Collaboration"]
    },
    {
      title: "CAPTAIN: Continuous Automated Planning Through Autonomous Internet Navigation",
      description: "A novel framework for autonomous web navigation and task planning using large language models to perform complex multi-step operations.",
      publisher: "AAAI 2025 | Large Language Models for Planning (LM4Plan)",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://lm4plan.github.io/",
      resourceUrl: "https://example.com/captain-framework-paper.pdf",
      citation: "Kolavi, A. S., & Gupta, R. (2025). CAPTAIN: Continuous Automated Planning Through Autonomous Internet Navigation. In AAAI 2025 Workshop on Large Language Models for Planning (LM4Plan).",
      tags: ["Automated Planning", "Web Navigation", "LLM Applications", "Autonomous Systems"]
    },
  ],
  blogs :[
    {
      "slug": "advanced-rag-systems",
      "title": "Building Advanced RAG Systems for Enterprise Applications",
      "date": "2025-04-18",
      "excerpt": "A deep dive into Retrieval Augmented Generation techniques and how to scale them for enterprise use cases with vector databases and efficient query systems.",
      "content": "# Building Advanced RAG Systems for Enterprise Applications\n\nRetrieval Augmented Generation (RAG) has emerged as one of the most powerful techniques for enhancing large language models with external knowledge. In this article, we'll explore how to build and scale RAG systems for enterprise applications.\n\n## What Makes RAG Systems Powerful\n\nRAG systems combine the generative capabilities of LLMs with the ability to retrieve relevant information from external sources. This combination allows models to:\n\n- Access up-to-date information beyond their training cutoff\n- Reference domain-specific knowledge without fine-tuning\n- Cite sources for their responses, improving trustworthiness\n- Reduce hallucination by grounding responses in factual information\n\n## Core Components of Advanced RAG Systems\n\n### 1. Vector Databases\n\nVector databases are essential for efficient similarity search in large document collections. Some popular options include:\n\n- Pinecone: Fully managed vector database with easy scaling\n- Qdrant: Open-source vector search with filterable metadata\n- Milvus: Distributed vector database for large-scale deployments\n- FAISS: Facebook AI's efficient similarity search library\n\n### 2. Embedding Models\n\nThe choice of embedding model significantly impacts RAG performance. Current recommended models include:\n\n- OpenAI's text-embedding-3-small and text-embedding-3-large\n- Voyage AI embeddings\n- BGE embeddings (especially for multilingual use cases)\n\n### 3. Chunking Strategies\n\nEffective document chunking balances context preservation with retrieval precision:\n\n- Semantic chunking based on document structure\n- Overlapping windows to preserve context\n- Hierarchical chunking for multilevel retrieval\n\n## Scaling RAG for Enterprise\n\nEnterprise RAG systems face unique challenges:\n\n1. **Data volume**: Handling millions of documents efficiently\n2. **Real-time updates**: Keeping knowledge bases current\n3. **Security**: Managing access controls and data privacy\n4. **Cost optimization**: Balancing performance with operational costs\n\n## Advanced RAG Techniques\n\n### Query Rewriting\n\nTransforming the initial query to improve retrieval relevance:\n\n```python\ndef rewrite_query(query, context=None):\n    prompt = f\"\"\"Given the user query: '{query}'\n    Rewrite this query to be more effective for retrieving relevant documents.\n    Make it more specific and include key terms that would appear in relevant documents.\"\"\"\n    \n    response = llm.generate(prompt)\n    return response\n```\n\n### Multiple Query Generation\n\nGenerating multiple query variants to increase retrieval coverage:\n\n```python\ndef generate_multiple_queries(query, num_queries=3):\n    prompt = f\"\"\"Based on the user question: '{query}'\n    Generate {num_queries} different search queries that would help retrieve relevant information.\n    Each query should focus on different aspects of the question.\"\"\"\n    \n    response = llm.generate(prompt)\n    queries = parse_queries(response)  # Parse the generated queries\n    return queries\n```\n\n## Conclusion\n\nBuilding advanced RAG systems for enterprise requires careful consideration of infrastructure, data processing, and retrieval strategies. By implementing the techniques outlined in this article, you can create robust, scalable knowledge systems that significantly enhance the capabilities of your language models.",
      "tags": ["RAG", "LLMs", "Vector Databases"],
      "readingTime": "8 min read",
      "published": true
    },
    {
      "slug": "fine-tuning-llms",
      "title": "Fine-tuning Large Language Models for Domain Specific Tasks",
      "date": "2025-03-25",
      "excerpt": "A comprehensive guide to fine-tuning LLMs using PEFT methods like LoRA and QLoRA to achieve better performance on specialized tasks.",
      "content": "# Fine-tuning Large Language Models for Domain Specific Tasks\n\nLarge Language Models (LLMs) have demonstrated remarkable capabilities across various tasks. However, for domain-specific applications, fine-tuning these models becomes essential to achieve optimal performance. This guide explores parameter-efficient fine-tuning methods that make LLM customization more accessible and cost-effective.\n\n## Why Fine-tune LLMs?\n\nWhile prompt engineering can achieve good results, fine-tuning offers several advantages:\n\n- **Improved performance** on domain-specific tasks\n- **Reduced prompt lengths** as domain knowledge is encoded in the model weights\n- **Consistent outputs** with reduced hallucinations\n- **Lower inference costs** due to shorter prompts and potentially smaller models\n\n## Parameter-Efficient Fine-Tuning Methods\n\n### LoRA (Low-Rank Adaptation)\n\nLoRA is a technique that freezes the original model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture. This approach has several benefits:\n\n- Significantly fewer trainable parameters (typically <1% of the original model)\n- Minimal memory overhead during training\n- Ability to switch between different fine-tuned versions with minimal computational cost\n\nImplementing LoRA with PEFT library is straightforward:\n\n```python\nfrom peft import get_peft_model, LoraConfig, TaskType\n\nconfig = LoraConfig(\n    r=16,  # rank of the update matrices\n    lora_alpha=32,  # scaling factor\n    target_modules=[\"q_proj\", \"v_proj\"],  # which modules to apply LoRA to\n    lora_dropout=0.05,\n    bias=\"none\",\n    task_type=TaskType.CAUSAL_LM\n)\n\npeft_model = get_peft_model(base_model, config)\n```\n\n### QLoRA (Quantized LoRA)\n\nQLoRA takes LoRA a step further by quantizing the base model to 4 or 8 bits, enabling fine-tuning of larger models on consumer hardware:\n\n```python\nmodel = AutoModelForCausalLM.from_pretrained(\n    model_id,\n    quantization_config=BitsAndBytesConfig(\n        load_in_4bit=True,\n        bnb_4bit_use_double_quant=True,\n        bnb_4bit_quant_type=\"nf4\",\n        bnb_4bit_compute_dtype=torch.bfloat16\n    )\n)\n```\n\n## Fine-tuning Dataset Preparation\n\nThe quality of your fine-tuning dataset is crucial for success. Consider these strategies:\n\n### Data Collection\n\n1. **Domain-specific corpus**: Gather text relevant to your domain\n2. **Task examples**: Create examples of the specific tasks you want the model to perform\n3. **Synthetic data**: Use existing LLMs to generate training examples\n\n### Data Formatting\n\nFormat your data according to the model's expected input structure. For instruction fine-tuning, a common format is:\n\n```json\n{\n  \"instruction\": \"Classify the sentiment of this product review.\",\n  \"input\": \"I've been using this product for a week and I'm very impressed with its performance.\",\n  \"output\": \"Positive\"\n}\n```\n\n## Evaluation Strategies\n\nEvaluate your fine-tuned model using:\n\n1. **Task-specific metrics**: Accuracy, F1, BLEU, ROUGE, etc.\n2. **Human evaluation**: Subjective assessment of outputs\n3. **A/B testing**: Compare performance against the base model\n\n## Conclusion\n\nParameter-efficient fine-tuning methods like LoRA and QLoRA have democratized LLM customization, making it possible to adapt powerful models to specific domains with reasonable computational resources. By carefully preparing your dataset and selecting appropriate fine-tuning techniques, you can achieve significant improvements in model performance for your specific use cases.",
      "tags": ["Fine-tuning", "LoRA", "PEFT"],
      "readingTime": "12 min read",
      "published": true
    },
    {
      "slug": "multimodal-llms-vision",
      "title": "Exploring Vision-Language Models for Document Understanding",
      "date": "2025-02-15",
      "excerpt": "How new multimodal models like GPT-4V and Claude 3 are transforming document processing and visual understanding tasks.",
      "externalUrl": "https://medium.com/@adithyaskolavi/exploring-vision-language-models-for-document-understanding-8f3e9c721b4d",
      "tags": ["Multimodal AI", "Vision-Language Models", "Document AI"],
      "readingTime": "10 min read",
      "published": true
    },
    {
      "slug": "kannada-llm",
      "title": "Building Ambari-7b: India's First Kannada-English Bilingual LLM",
      "date": "2025-01-10",
      "excerpt": "The technical journey of creating a performant bilingual LLM for low-resource languages with limited training data.",
      "externalUrl": "https://medium.com/@adithyaskolavi/building-ambari-7b-indias-first-kannada-english-bilingual-llm-c743f5b8e212",
      "tags": ["Low-Resource Languages", "LLM Training", "Bilingual Models"],
      "readingTime": "15 min read",
      "published": true
    }
  ]
} as const;
