'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Heart, 
  Star,
  Clock,
  Trophy,
  Building,
  Lightbulb,
  Globe
} from 'lucide-react';

// Custom CSS Animations
const customStyles = `
  @keyframes gradient-xy {
    0%, 100% {
      background-size: 400% 400%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  @keyframes gradient-xy-reverse {
    0%, 100% {
      background-size: 300% 300%;
      background-position: right center;
    }
    50% {
      background-size: 250% 250%;
      background-position: left center;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
  
  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-15px) rotate(-180deg);
    }
  }
  
  @keyframes float-slow {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(90deg);
    }
  }
  
  .animate-gradient-xy {
    animation: gradient-xy 15s ease infinite;
  }
  
  .animate-gradient-xy-reverse {
    animation: gradient-xy-reverse 20s ease infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite 2s;
  }
  
  .animate-float-slow {
    animation: float-slow 10s ease-in-out infinite 4s;
  }
`;

// Loading components
const HeaderSkeleton = () => (
  <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-lg animate-pulse">
    <div className="flex items-center justify-between h-full px-8">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>
      <div className="h-6 w-6 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const FooterSkeleton = () => (
  <div className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 w-32 bg-gray-700 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-700 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Dynamically import components with SSR disabled to avoid hydration mismatches
const Header = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function SchoolHistoryAndVision() {
  const milestones = [
    {
      year: "1995",
      title: "Foundation",
      description: "NV School was founded with a vision to provide quality education in a nurturing environment.",
      icon: <Building className="w-6 h-6" />
    },
    {
      year: "2000",
      title: "Expansion",
      description: "Added secondary education wing and modern science laboratories.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      year: "2005",
      title: "Technology Integration",
      description: "Introduced smart classrooms and computer labs for enhanced learning.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "2010",
      title: "Recognition",
      description: "Received state recognition for academic excellence and innovative teaching methods.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2015",
      title: "International Standards",
      description: "Achieved international curriculum standards and global partnerships.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Successfully transitioned to hybrid learning during the pandemic.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const visionPoints = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "To maintain the highest standards of education and foster intellectual curiosity in every student."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Character Development",
      description: "To nurture ethical, responsible, and compassionate individuals who contribute positively to society."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Innovation & Creativity",
      description: "To encourage creative thinking, innovation, and adaptability in an ever-changing world."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "To create a supportive learning community that values diversity and collaboration."
    }
  ];

  const coreValues = [
    "Excellence in Education",
    "Integrity and Honesty",
    "Respect for All",
    "Innovation and Creativity",
    "Social Responsibility",
    "Continuous Learning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 animate-gradient-xy-reverse opacity-80"></div>
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                  School History & Vision
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Discover our journey of excellence, our vision for the future, and the values that guide us in shaping tomorrow's leaders.
                </p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center mb-2">
                    <Clock className="w-6 h-6 text-white mr-2" />
                    <span className="text-white/80 text-sm font-medium">Established</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">1995</div>
                  <div className="text-white/70 text-sm">29+ Years</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 text-white mr-2" />
                    <span className="text-white/80 text-sm font-medium">Students</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">2000+</div>
                  <div className="text-white/70 text-sm">Growing</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Our Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  View Milestones
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main Illustration Container */}
              <div className="relative w-full h-[600px]">
                {/* Animated School Building */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-60"
                >
                  <svg viewBox="0 0 320 240" className="w-full h-full">
                    {/* Building Base */}
                    <rect x="40" y="120" width="240" height="120" fill="rgba(255,255,255,0.9)" rx="8"/>
                    
                    {/* Roof */}
                    <polygon points="30,120 160,60 290,120" fill="rgba(239,68,68,0.9)"/>
                    
                    {/* Windows */}
                    <rect x="70" y="140" width="30" height="30" fill="rgba(59,130,246,0.8)" rx="4"/>
                    <rect x="120" y="140" width="30" height="30" fill="rgba(59,130,246,0.8)" rx="4"/>
                    <rect x="170" y="140" width="30" height="30" fill="rgba(59,130,246,0.8)" rx="4"/>
                    <rect x="220" y="140" width="30" height="30" fill="rgba(59,130,246,0.8)" rx="4"/>
                    
                    <rect x="70" y="190" width="30" height="30" fill="rgba(59,130,246,0.8)" rx="4"/>
                    <rect x="120" y="190" width="30" height="30" fill="rgba(59,130,246,0.8)" rx="4"/>
                    <rect x="220" y="190" width="30" height="30" fill="rgba(59,130,246,0.8)" rx="4"/>
                    
                    {/* Door */}
                    <rect x="170" y="190" width="30" height="50" fill="rgba(139,69,19,0.9)" rx="4"/>
                    <circle cx="195" cy="215" r="2" fill="rgba(255,215,0,0.9)"/>
                    
                    {/* Flag */}
                    <rect x="160" y="60" width="2" height="40" fill="rgba(107,114,128,0.9)"/>
                    <rect x="162" y="60" width="25" height="15" fill="rgba(34,197,94,0.9)"/>
                  </svg>
                </motion.div>

                {/* Floating Books */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-20 left-20 w-16 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-xl transform rotate-12"
                >
                  <div className="w-full h-2 bg-yellow-600 rounded-t-lg"></div>
                  <div className="w-full h-2 bg-yellow-600 rounded-t-lg mt-4"></div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-32 right-16 w-14 h-18 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-xl transform -rotate-12"
                >
                  <div className="w-full h-2 bg-blue-600 rounded-t-lg"></div>
                  <div className="w-full h-2 bg-blue-600 rounded-t-lg mt-3"></div>
                </motion.div>

                {/* Floating Achievement Badge */}
                <motion.div
                  animate={{ 
                    y: [0, -25, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute top-40 left-32 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl"
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>

                {/* Timeline Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute right-8 top-16 space-y-8"
                >
                  {['1995', '2000', '2010', '2024'].map((year, index) => (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
                      <div className="bg-white/90 px-3 py-1 rounded-full text-blue-800 font-semibold text-sm shadow-lg">
                        {year}
                      </div>
                    </motion.div>
                  ))}
                  <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-white/50"></div>
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white/20 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white/25 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/15 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 rounded-full"
        ></motion.div>
      </section>

      {/* Founding Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Founding Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  NV School was founded in 1995 with a simple yet powerful vision: to create an educational institution 
                  that nurtures not just academic excellence, but also character, creativity, and compassion in every student.
                </p>
                <p>
                  Our founders, Dr. Neha Verma and Mr. Vikram Sharma, were educators who believed that education should 
                  be transformative, preparing students not just for exams, but for life. They envisioned a school where 
                  every child could discover their potential and pursue their dreams with confidence.
                </p>
                <p>
                  Starting with just 50 students and 8 dedicated teachers, we have grown into a thriving educational 
                  community of over 2,000 students, while maintaining our core commitment to personalized attention 
                  and holistic development.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Timeline of Growth</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1995</span>
                    <span className="text-gray-600">Founded with 50 students</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-purple-600 mr-4">2024</span>
                    <span className="text-gray-600">2,000+ students & growing</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Historical Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that shaped our journey and defined our commitment to excellence in education.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                          {milestone.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                          <span className="text-lg font-semibold text-blue-600">{milestone.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to educational excellence and character development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be a globally recognized educational institution that empowers students to become innovative leaders, 
                critical thinkers, and responsible global citizens who make a positive impact on the world.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="text-blue-600 mb-2">{point.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-2">{point.title}</h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide a nurturing, inclusive, and challenging educational environment that fosters academic excellence, 
                character development, and creative expression while preparing students for success in a rapidly evolving world.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-4">Core Values:</h4>
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center bg-white rounded-lg p-3 shadow-md"
                  >
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Legacy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Leadership Legacy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders who have shaped our institution's journey towards excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Dr. Neha Verma</h3>
                <p className="text-blue-600 font-semibold">Founder & Director</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A visionary educator with over 30 years of experience in educational leadership. 
                Dr. Verma&apos;s innovative approach to pedagogy and unwavering commitment to student 
                welfare has been the cornerstone of our institution&apos;s success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mr. Vikram Sharma</h3>
                <p className="text-purple-600 font-semibold">Co-Founder & Principal</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                An accomplished administrator and educator, Mr. Sharma brings expertise in 
                curriculum development and academic administration. His strategic vision has 
                guided our growth from a small school to a premier educational institution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Aspirations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Future Aspirations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap for continued excellence and innovation in education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-3">Global Partnerships</h3>
                <p className="text-blue-100">
                  Expanding international collaborations to provide students with global perspectives and opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-3">Innovation Hub</h3>
                <p className="text-purple-100">
                  Establishing a dedicated innovation center for research, creativity, and entrepreneurship development.
                </p>
              </div>
              
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4 text-pink-300" />
                <h3 className="text-xl font-bold mb-3">Excellence Recognition</h3>
                <p className="text-pink-100">
                  Pursuing international accreditation and recognition as a world-class educational institution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 