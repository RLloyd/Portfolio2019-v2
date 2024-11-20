import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PortfolioCard as PortfolioCardType } from '../types';

interface CardProps {
  data: PortfolioCardType;
  position: { top: number; left: number };
}

export const PortfolioCard: React.FC<CardProps> = ({ data, position }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="absolute rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
      style={{
        top: position.top,
        left: position.left,
        width: '300px',
        height: '400px'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      role="article"
      aria-label={`Portfolio card for ${data.title}`}
    >
      <div className="relative h-48">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        <img
          src={data.image}
          alt={data.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          decoding="async"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {data.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {data.description}
        </p>
        <button
          onClick={() => navigate(data.link)}
          className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
          aria-label={`View ${data.title} project`}
        >
          View Project
        </button>
      </div>
    </motion.div>
  );
};