import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const categories: string[] = [
    'Languages',
    'Frameworks',
    'ML | AI | DL',
    'Python Libs',
    'Databases',
    'Cloud',
    'IoT',
    'Design',
  ];

  const contentMap: Record<string, string[]> = {
    Languages: [
      'HTML',
      'CSS',
      'JavaScript',
      'Typescript',
      'Python',
      'C/C++',
      'Go👶🏼',
    ],
    Frameworks: [
      'React.js',
      'Next.js',
      'Express',
      'Node.js',
      'Vue.js',
      'Bootstrap',
      'Tailwind',
    ],
    'ML | AI | DL': [
      'Huggingface',
      'Tensorflow',
      'Pytorch',
      'Keras',
      'Transformers',
      'LLMS',
      'Diffusion Models',
      'Langchain',
    ],
    'Python Libs': [
      'OpenCV',
      'BeautifulSoup',
      'Selenium',
      'Pandas',
      'FastAPI',
      'Flask',
      'Django',
      'Poetry',
    ],
    Databases: [
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'Redis',
      'MySQL',
      'Supabase',
      'Pinecone',
    ],
    Cloud: [
      'Google Cloud Platform',
      'Azure',
      'AWS',
      'Docker',
      'Kubernetes',
      'Cloudflare',
      'Heroku',
    ],
    IoT: ['Arduino', 'ESP32', 'ESP8266', 'Raspberry Pi', 'Embedded C', 'Blynk'],
    Design: [
      'Figma',
      'Adobe XD',
      'Adoble Illustrator',
      'Photoshop',
      'Canva',
      'Blender',
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = categories.indexOf(selectedCategory);
      const nextIndex = (currentIndex + 1) % categories.length;
      setSelectedCategory(categories[nextIndex]);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [selectedCategory, categories]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-4 w-full justify-center">
        {categories.map((category) => (
          <motion.div
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category
                ? 'sm:block md:block text-zinc-300 border-white border-b-2 font-semibold'
                : 'hidden md:block text-zinc-800 font-bold'
            }`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex flex-row  justify-center gap-4 items-center flex-wrap w-full h-fit text-xl font-semibold text-zinc-300 md:gap-10">
          <AnimatePresence mode="wait">
            {contentMap[selectedCategory].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Skills;
