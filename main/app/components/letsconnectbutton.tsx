'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConnectButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence>
        {!isClicked ? (
          <motion.button
            key="connectButton"
            initial={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
            onClick={handleClick}
          >
            Let's Connect
          </motion.button>
        ) : (
          <div className="flex flex-row gap-2 items-center">
            <motion.input
              key="emailInput"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              type="email"
              placeholder="Email"
              className="mt-4 px-4 py-2 border rounded transition-all"
            />
            <motion.input
              key="messageInput"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              type="text"
              placeholder="Message"
              className="mt-4 px-4 py-2 border rounded transition-all"
            />
            <motion.button
              key="sendButton"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
              onClick={handleClick}
            >
              Send
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConnectButton;
