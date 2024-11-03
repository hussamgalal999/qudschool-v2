import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Trophy, Rocket } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px]"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span>Learn, Play, Create!</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Where Learning Becomes an Adventure
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            Join our gamified learning platform and unlock your potential
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/10 p-3 rounded-full">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-blue-100">Learning Games</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/10 p-3 rounded-full">
                <Star className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/10 p-3 rounded-full">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;