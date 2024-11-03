import React from 'react';
import { Brain, Code, Bot, Rocket, Sparkles, Users, Laptop, Trophy, Star, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import GameCard from './components/GameCard';
import Gallery from './components/Gallery';
import AchievementBadge from './components/AchievementBadge';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  const courses = [
    {
      title: "Code Explorer",
      icon: <Code className="w-6 h-6" />,
      ageRange: "8-10",
      description: "Start your coding journey with fun block-based programming",
      color: "bg-blue-500",
    },
    {
      title: "AI Adventures",
      icon: <Brain className="w-6 h-6" />,
      ageRange: "12-16",
      description: "Discover the basics of artificial intelligence and machine learning",
      color: "bg-purple-500",
    },
    {
      title: "Game Creator",
      icon: <Sparkles className="w-6 h-6" />,
      ageRange: "10-14",
      description: "Create your own games while learning programming concepts",
      color: "bg-pink-500",
    },
    {
      title: "Robot Master",
      icon: <Bot className="w-6 h-6" />,
      ageRange: "11-16",
      description: "Learn about robots and how to program them",
      color: "bg-green-500",
    },
  ];

  const games = [
    {
      title: "Code Breaker",
      description: "Solve coding puzzles and earn points",
      imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
      points: 500,
    },
    {
      title: "AI Detective",
      description: "Learn AI concepts through mystery solving",
      imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=800&q=80",
      points: 750,
    },
    {
      title: "Design Challenge",
      description: "Create amazing designs and win badges",
      imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
      points: 600,
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Code Master",
      description: "Complete 10 coding challenges",
      progress: 70,
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "AI Explorer",
      description: "Finish the AI basics course",
      progress: 45,
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Design Guru",
      description: "Create 5 original designs",
      progress: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your learning journey with our interactive courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Learning Games</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn while playing our educational games
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </motion.section>

        <Gallery />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track your progress and earn badges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementBadge key={index} {...achievement} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Join thousands of young learners discovering the exciting world of technology</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </motion.button>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;