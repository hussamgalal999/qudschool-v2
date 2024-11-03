import React from 'react';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  points: number;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, imageUrl, points }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
            {points} Points
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Play Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameCard;