'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Award,
  Star,
  Globe,
  Lightbulb,
  Target,
  Quote,
  MessageCircle,
  Trophy,
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

export default function PrincipalMessage() {
  const visionPoints = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Fostering a culture of continuous learning and academic achievement that prepares our students for global success.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Character Building",
      description: "Developing strong moral values, empathy, and ethical leadership that will guide our students throughout their lives.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Spirit",
      description: "Creating a supportive, inclusive environment where every student, teacher, and family feels valued and connected.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Preparing our students to be responsible global citizens who can contribute positively to our interconnected world.",
      color: "from-green-400 to-teal-500"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Academic Recognition",
      description: "Consistently ranked among the top educational institutions in the region",
      stats: "Top 5% Schools"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Student Success",
      description: "Outstanding university placement rates and scholarship achievements",
      stats: "95% University Acceptance"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation in Education",
      description: "Leading implementation of modern teaching methodologies and technology",
      stats: "100% Digital Classrooms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Holistic Development",
      description: "Comprehensive programs for sports, arts, and character development",
      stats: "50+ Extracurricular Activities"
    }
  ];

  const principalQuotes = [
    {
      quote: "Education is not just about acquiring knowledge; it's about igniting the spark of curiosity that will burn bright throughout a lifetime.",
      context: "On the Philosophy of Learning"
    },
    {
      quote: "Every child who walks through our doors carries within them unlimited potential. Our job is to help them discover and nurture that potential.",
      context: "On Student Potential"
    },
    {
      quote: "A school is more than buildings and books; it's a community where dreams take shape and futures are forged.",
      context: "On School Community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-600 animate-gradient-xy-reverse opacity-80"></div>
        
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
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-12 h-12 text-white mr-4" />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                    Principal's Message
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  A personal reflection on our educational journey, vision for the future, and commitment to excellence.
                </p>
              </motion.div>

              {/* Principal Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Dr. Sarah Johnson</h3>
                    <p className="text-white/80">Principal, NV School</p>
                    <p className="text-white/70 text-sm">M.Ed., Ph.D. in Educational Leadership</p>
                  </div>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  With over 20 years of experience in education, I am passionate about creating 
                  an environment where every student can thrive and reach their full potential.
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
                  Meet Our Team
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  Schedule a Visit
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side Principal Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Principal Photo Placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl"
                >
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12" />
                      </div>
                      <p className="text-lg font-semibold">Principal's Photo</p>
                      <p className="text-sm opacity-80">Coming Soon</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Achievement Icons */}
                {achievements.map((achievement, index) => {
                  const positions = [
                    { top: '10%', left: '10%', delay: 0.8 },
                    { top: '20%', right: '10%', delay: 1.0 },
                    { bottom: '30%', left: '15%', delay: 1.2 },
                    { bottom: '10%', right: '15%', delay: 1.4 }
                  ];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: positions[index].delay }}
                      className="absolute w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md"
                      style={positions[index]}
                    >
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </motion.div>
                  );
                })}
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

      {/* Personal Message Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              A Message from Our Principal
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-600/20">
              <Quote className="w-24 h-24" />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 first-letter:text-7xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Dear Students, Parents, and Members of our NV School Community,
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It is with great pleasure and pride that I welcome you to NV School, where we believe that 
                every child has the potential to achieve greatness. As your Principal, I am committed to 
                fostering an environment that nurtures not just academic excellence, but also character 
                development, creativity, and critical thinking.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our school stands as a beacon of educational innovation, where traditional values meet 
                modern teaching methodologies. We understand that each student is unique, with their own 
                strengths, interests, and learning style. Our dedicated faculty works tirelessly to create 
                personalized learning experiences that challenge and inspire every student to reach their 
                full potential.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beyond academics, we are committed to developing well-rounded individuals who are prepared 
                to face the challenges of tomorrow. Through our comprehensive programs in sports, arts, 
                community service, and leadership development, we ensure that our students graduate not 
                just with knowledge, but with the confidence, empathy, and skills needed to make a positive 
                impact in the world.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I invite you to explore our website, visit our campus, and discover what makes NV School 
                a truly special place of learning. Together, we can help your child embark on an 
                extraordinary educational journey that will shape their future and inspire them to dream big.
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-lg font-semibold text-gray-800 mb-2">With warm regards,</p>
                <p className="text-xl font-bold text-blue-600">Dr. Sarah Johnson</p>
                <p className="text-gray-600">Principal, NV School</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Goals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Vision & Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Together, we are building a future where every student can thrive and contribute meaningfully to society.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <div className="text-white">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Words of Wisdom
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reflections on education, leadership, and the future of learning.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {principalQuotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-white/20">
                  <Quote className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <p className="text-lg leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                  <div className="border-t border-white/30 pt-4">
                    <p className="text-sm font-semibold text-white/90">{item.context}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating the milestones that define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.stats}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Educational Journey
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Discover how NV School can help your child reach their full potential in a nurturing, 
                challenging, and inspiring environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Schedule a Campus Tour
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  Contact the Principal
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 