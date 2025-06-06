'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Heart, 
  Target, 
  Star, 
  Users, 
  BookOpen, 
  Award,
  Shield,
  Globe,
  Lightbulb,
  TreePine,
  Handshake,
  Zap
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
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
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
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
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

export default function MissionAndCoreValues() {
  const missionPoints = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "To provide world-class education that nurtures critical thinking, creativity, and a lifelong love for learning in every student.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Character Development",
      description: "To cultivate strong moral values, emotional intelligence, and ethical leadership qualities that prepare students for life's challenges.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusive Community",
      description: "To create a supportive, diverse, and inclusive environment where every student feels valued, respected, and empowered to succeed.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Citizenship",
      description: "To develop responsible global citizens who understand their role in creating a better, more sustainable world for future generations.",
      color: "from-green-400 to-teal-500"
    }
  ];

  const coreValues = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical behavior in all our actions and decisions.",
      principles: ["Honesty in all interactions", "Transparent communication", "Ethical decision-making", "Accountability for actions"]
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Excellence",
      description: "We strive for continuous improvement and innovation in teaching, learning, and personal development.",
      principles: ["Quality education delivery", "Continuous improvement", "Innovation in teaching", "Student achievement focus"]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Compassion",
      description: "We foster empathy, kindness, and understanding in our relationships with students, families, and the community.",
      principles: ["Empathetic understanding", "Supportive environment", "Inclusive practices", "Care for well-being"]
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Respect",
      description: "We value and honor the dignity, diversity, and unique contributions of every individual in our school community.",
      principles: ["Cultural diversity appreciation", "Individual dignity", "Mutual respect", "Open dialogue"]
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation",
      description: "We embrace creativity, critical thinking, and technological advancement to enhance learning experiences.",
      principles: ["Creative problem-solving", "Technology integration", "Critical thinking development", "Future-ready skills"]
    },
    {
      icon: <TreePine className="w-10 h-10" />,
      title: "Sustainability",
      description: "We are committed to environmental stewardship and teaching students to be responsible caretakers of our planet.",
      principles: ["Environmental awareness", "Sustainable practices", "Conservation education", "Green initiatives"]
    }
  ];

  const visionStatement = {
    title: "Our Vision for the Future",
    content: "To be a leading educational institution that transforms lives, shapes futures, and creates positive change in our communities and beyond. We envision a school where every student discovers their unique potential, develops the skills to thrive in a rapidly changing world, and graduates as confident, capable, and caring individuals ready to make meaningful contributions to society.",
    goals: [
      "Achieve 100% student engagement in learning",
      "Maintain top academic performance standards",
      "Foster innovation in educational practices",
      "Build strong community partnerships",
      "Develop future-ready global citizens"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-700 animate-gradient-xy-reverse opacity-80"></div>
        
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
                  Mission & Core Values
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Discover the principles that guide us, the values that define us, and the mission that drives us toward educational excellence.
                </p>
              </motion.div>

              {/* Mission Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  To empower every student with the knowledge, skills, and values needed to excel academically, 
                  contribute meaningfully to society, and lead fulfilling lives in an ever-changing world.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Our Values
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  Join Our Community
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
              {/* Values Constellation */}
              <div className="relative w-full h-[600px]">
                {/* Central Mission Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/90 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow"
                >
                  <Target className="w-16 h-16 text-blue-600" />
                </motion.div>

                {/* Orbiting Value Icons */}
                {[
                  { icon: Heart, color: 'from-pink-400 to-red-500', delay: 0.7, radius: 120, angle: 0 },
                  { icon: Star, color: 'from-yellow-400 to-orange-500', delay: 0.8, radius: 120, angle: 60 },
                  { icon: Users, color: 'from-blue-400 to-purple-500', delay: 0.9, radius: 120, angle: 120 },
                  { icon: Globe, color: 'from-green-400 to-teal-500', delay: 1.0, radius: 120, angle: 180 },
                  { icon: Shield, color: 'from-indigo-400 to-purple-500', delay: 1.1, radius: 120, angle: 240 },
                  { icon: Lightbulb, color: 'from-amber-400 to-yellow-500', delay: 1.2, radius: 120, angle: 300 },
                ].map(({ icon: Icon, color, delay, radius, angle }, index) => {
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay }}
                      className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-xl`}
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                  {Array.from({ length: 6 }, (_, i) => {
                    const angle = (i * 60 * Math.PI) / 180;
                    const x = 300 + Math.cos(angle) * 120;
                    const y = 300 + Math.sin(angle) * 120;
                    return (
                      <motion.line
                        key={i}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
                        x1="300"
                        y1="300"
                        x2={x}
                        y2={y}
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full"
        ></motion.div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Mission in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every day, we work toward our mission of empowering students with the knowledge, 
              skills, and values they need to succeed in life and contribute to society.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {missionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape the character 
              of our educational community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                    Key Principles:
                  </h4>
                  <ul className="space-y-1">
                    {value.principles.map((principle, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                {visionStatement.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {visionStatement.content}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Strategic Goals:</h3>
                {visionStatement.goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <Zap className="w-12 h-12 mr-4" />
                  <h3 className="text-2xl font-bold">Vision Impact</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2000+</div>
                    <div className="text-blue-100">Students Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-blue-100">Awards Won</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">29+</div>
                    <div className="text-blue-100">Years Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Be part of an educational community that values excellence, integrity, and innovation. 
              Together, we can shape the leaders of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Schedule a Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 