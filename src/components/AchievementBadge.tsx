import React from 'react';
import { motion } from 'framer-motion';

interface AchievementBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ icon, title, description, progress }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-1 bg-blue-600" style={{ width: `${progress}%` }} />
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="mt-2 text-blue-600 font-semibold">
            {progress}% Complete
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementBadge;