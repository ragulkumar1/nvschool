'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Star, Users, Award, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });

  const animatedTexts = [
    "Excellence in Education",
    "Nurturing Future Leaders",
    "Inspiring Innovation",
    "Building Tomorrow's Minds"
  ];

  // Memoize particle positions to ensure consistent rendering
  const particlePositions = useMemo(() => {
    if (!isClient) return [];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      initialX: Math.random() * windowDimensions.width,
      initialY: Math.random() * windowDimensions.height,
      offsetX: (Math.random() - 0.5) * 80,
      offsetY: (Math.random() - 0.5) * 80,
    }));
  }, [isClient, windowDimensions.width, windowDimensions.height]);

  useEffect(() => {
    setIsClient(true);
    
    // Set initial window dimensions
    if (typeof window !== 'undefined') {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  const scrollToNext = () => {
    try {
      if (typeof window !== 'undefined') {
        const nextSection = document.querySelector('#about');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn('Next section with selector "#about" not found');
        }
      }
    } catch (error) {
      console.error('Error in scrollToNext:', error);
      // Ensure we don't throw an Event object
      if (error && typeof error === 'object' && 'type' in error) {
        console.error('Caught Event object in scrollToNext, converting to Error');
        // Don't throw, just log the error to prevent app crash
        return;
      }
    }
  };

  const stats = [
    { icon: Users, label: "Students", value: "1,200+" },
    { icon: Award, label: "Awards", value: "50+" },
    { icon: BookOpen, label: "Programs", value: "25+" },
    { icon: Star, label: "Rating", value: "4.9/5" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Floating Particles - Only render on client with stable positions */}
        {isClient && particlePositions.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              x: mousePosition.x + particle.offsetX,
              y: mousePosition.y + particle.offsetY,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 25,
              delay: particle.id * 0.02,
            }}
          />
        ))}
        
        {/* Gradient Blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/20"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-medium text-sm">Rated #1 School in the Region</span>
          </motion.div> */}
          
          <h1 className="font-bold text-white mb-8 ">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-1xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4"
            >
              Nattaraj Vidyalaya
            </motion.span>
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
            >
              
            </motion.div>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Empowering students with innovative education, cutting-edge technology, 
            and personalized learning experiences that prepare them for a bright future.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm md:text-base shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            Apply for Admission
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-lg text-white rounded-full font-semibold text-sm md:text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5" />
            <span>Watch Virtual Tour</span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 text-center"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-xs md:text-sm font-medium">Scroll Down</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 md:w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1.5 md:mt-2 group-hover:bg-white transition-colors"
            />
          </div>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection; 