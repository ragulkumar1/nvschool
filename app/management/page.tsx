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
  Globe,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  Shield,
  FileText,
  Settings,
  Calendar,
  GraduationCap,
  ChevronRight
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
  
  .animate-gradient-xy {
    animation: gradient-xy 15s ease infinite;
  }
  
  .animate-gradient-xy-reverse {
    animation: gradient-xy-reverse 20s ease infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
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

export default function SchoolManagementAndAdministration() {
  const leadershipTeam = [
    {
      name: "Dr. Neha Verma",
      position: "Principal",
      description: "With 25+ years in education, Dr. Verma leads our school with vision and dedication to academic excellence.",
      education: "Ph.D. in Education, M.Ed. English Literature",
      experience: "25+ years",
      specialization: "Educational Leadership & Curriculum Development",
      email: "principal@nvschool.edu",
      phone: "+91 98765 43210"
    },
    {
      name: "Mr. Vikram Sharma",
      position: "Vice Principal",
      description: "A passionate educator with expertise in modern teaching methodologies and student development.",
      education: "M.A. Mathematics, B.Ed.",
      experience: "20+ years",
      specialization: "Academic Administration & Assessment",
      email: "vp@nvschool.edu",
      phone: "+91 98765 43211"
    },
    {
      name: "Mrs. Priya Gupta",
      position: "Academic Director",
      description: "Leading our academic programs with innovative approaches and ensuring curriculum excellence.",
      education: "M.Sc. Physics, M.Ed. Science Education",
      experience: "18+ years",
      specialization: "STEM Education & Innovation",
      email: "academic@nvschool.edu",
      phone: "+91 98765 43212"
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Administrative Manager",
      description: "Overseeing day-to-day operations and ensuring smooth functioning of all administrative processes.",
      education: "MBA Administration, B.Com",
      experience: "15+ years",
      specialization: "Operations Management & Finance",
      email: "admin@nvschool.edu",
      phone: "+91 98765 43213"
    }
  ];

  const departments = [
    {
      name: "Academic Affairs",
      head: "Mrs. Priya Gupta",
      icon: <BookOpen className="w-8 h-8" />,
      responsibilities: [
        "Curriculum Development & Implementation",
        "Academic Standards & Assessment",
        "Teacher Training & Professional Development",
        "Student Academic Performance Monitoring"
      ]
    },
    {
      name: "Student Services",
      head: "Dr. Kavya Reddy",
      icon: <Users className="w-8 h-8" />,
      responsibilities: [
        "Student Counseling & Guidance",
        "Extracurricular Activities Coordination",
        "Student Welfare & Support Services",
        "Career Guidance & College Counseling"
      ]
    },
    {
      name: "Administration & Finance",
      head: "Mr. Rajesh Kumar",
      icon: <Building className="w-8 h-8" />,
      responsibilities: [
        "Financial Management & Budgeting",
        "Human Resources & Staff Management",
        "Infrastructure & Facilities Management",
        "Compliance & Regulatory Affairs"
      ]
    },
    {
      name: "Technology & Innovation",
      head: "Mr. Arun Patel",
      icon: <Lightbulb className="w-8 h-8" />,
      responsibilities: [
        "IT Infrastructure & Support",
        "Digital Learning Platforms",
        "Educational Technology Integration",
        "Data Management & Analytics"
      ]
    }
  ];

  const governanceStructure = [
    {
      title: "Board of Governors",
      description: "Strategic oversight and policy formulation",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Principal's Office",
      description: "Executive leadership and daily operations",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Academic Council",
      description: "Curriculum and academic standards",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Parent-Teacher Committee",
      description: "Community engagement and feedback",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const policies = [
    {
      title: "Academic Policy",
      description: "Standards for curriculum, assessment, and academic integrity",
      icon: <FileText className="w-6 h-6" />,
      lastUpdated: "August 2024"
    },
    {
      title: "Student Code of Conduct",
      description: "Guidelines for behavior, discipline, and student rights",
      icon: <Users className="w-6 h-6" />,
      lastUpdated: "July 2024"
    },
    {
      title: "Safety & Security Policy",
      description: "Comprehensive safety protocols and emergency procedures",
      icon: <Shield className="w-6 h-6" />,
      lastUpdated: "September 2024"
    },
    {
      title: "Anti-Bullying Policy",
      description: "Zero-tolerance approach to bullying and harassment",
      icon: <Heart className="w-6 h-6" />,
      lastUpdated: "June 2024"
    }
  ];

  const managementPhilosophy = [
    {
      principle: "Collaborative Leadership",
      description: "We believe in shared decision-making and inclusive leadership that involves all stakeholders.",
      icon: <Users className="w-8 h-8" />
    },
    {
      principle: "Continuous Improvement",
      description: "Our commitment to ongoing evaluation and enhancement of all educational processes.",
      icon: <Target className="w-8 h-8" />
    },
    {
      principle: "Transparency & Accountability",
      description: "Open communication and responsibility in all our administrative and academic decisions.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      principle: "Innovation & Adaptability",
      description: "Embracing new ideas and adapting to changing educational landscapes and student needs.",
      icon: <Lightbulb className="w-8 h-8" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 animate-gradient-xy-reverse opacity-80"></div>
        
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
                  School Management & Administration
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Meet our dedicated leadership team and discover the governance structure that drives our commitment to educational excellence.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 text-white mr-2" />
                    <span className="text-white/80 text-sm font-medium">Leadership Team</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                  <div className="text-white/70 text-sm">Experienced Leaders</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center mb-2">
                    <Award className="w-6 h-6 text-white mr-2" />
                    <span className="text-white/80 text-sm font-medium">Experience</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">200+</div>
                  <div className="text-white/70 text-sm">Years Combined</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Meet Our Team
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300">
                  Contact Administration
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
              {/* Organizational Chart Illustration */}
              <div className="relative w-full h-[600px]">
                {/* Central Leadership Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <GraduationCap className="w-16 h-16 text-indigo-600" />
                </motion.div>

                {/* Surrounding Department Nodes */}
                {[
                  { icon: BookOpen, angle: 0, delay: 0.8 },
                  { icon: Users, angle: 90, delay: 1.0 },
                  { icon: Building, angle: 180, delay: 1.2 },
                  { icon: Lightbulb, angle: 270, delay: 1.4 }
                ].map(({ icon: Icon, angle, delay }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay }}
                    className="absolute w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-xl"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`
                    }}
                  >
                    <Icon className="w-8 h-8 text-indigo-500" />
                  </motion.div>
                ))}

                {/* Connection Lines */}
                {[0, 90, 180, 270].map((angle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    className="absolute w-0.5 h-24 bg-white/30 origin-bottom"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -100%) rotate(${angle}deg)`
                    }}
                  />
                ))}

                {/* Floating Admin Elements */}
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
                  className="absolute top-20 left-20 w-16 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-xl transform rotate-12 flex items-center justify-center"
                >
                  <FileText className="w-8 h-8 text-white" />
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
                  className="absolute top-32 right-16 w-14 h-18 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-xl transform -rotate-12 flex items-center justify-center"
                >
                  <Settings className="w-6 h-6 text-white" />
                </motion.div>

                {/* Governance Badge */}
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
                  className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl"
                >
                  <Shield className="w-6 h-6 text-white" />
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
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our school's vision, manage operations, and ensure academic excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                    <p className="text-indigo-600 font-semibold text-lg mb-3">{leader.position}</p>
                    <p className="text-gray-600 mb-4">{leader.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-gray-700">{leader.education}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-gray-700">{leader.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-gray-700">{leader.specialization}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-4">
                      <a href={`mailto:${leader.email}`} className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <Mail className="w-4 h-4 mr-1" />
                        <span className="text-sm">Email</span>
                      </a>
                      <a href={`tel:${leader.phone}`} className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <Phone className="w-4 h-4 mr-1" />
                        <span className="text-sm">Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Administrative Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized departments work together to ensure smooth operations and exceptional educational delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{dept.name}</h3>
                    <p className="text-indigo-600 font-semibold">Head: {dept.head}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Responsibilities:</h4>
                  {dept.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Governance Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our transparent governance model ensures accountability and effective decision-making at all levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceStructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-indigo-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Management Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our management approach is built on core principles that drive excellence and foster a positive learning environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {managementPhilosophy.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{principle.principle}</h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              School Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive policies ensure a safe, fair, and productive learning environment for all students and staff.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-indigo-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {policy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{policy.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{policy.description}</p>
                    <div className="flex items-center text-xs text-indigo-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>Last updated: {policy.lastUpdated}</span>
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View All Policies
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Administration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact Administration
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions or need assistance? Our administrative team is here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-white/80 mb-4">Call us during office hours</p>
              <p className="text-white font-semibold">+91 98765 43210</p>
              <p className="text-white/70 text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white/80 mb-4">Send us a message anytime</p>
              <p className="text-white font-semibold">admin@nvschool.edu</p>
              <p className="text-white/70 text-sm">We respond within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-white/80 mb-4">Administration Office</p>
              <p className="text-white font-semibold">Main Building, 2nd Floor</p>
              <p className="text-white/70 text-sm">Office Hours: 8:00 AM - 4:00 PM</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule a Meeting
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 