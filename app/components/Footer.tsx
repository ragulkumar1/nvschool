'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
  Send,
  Heart,
  Users,
  BookOpen,
  Award,
  Calendar
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    awards: 0
  });

  const targetCounters = {
    students: 1200,
    teachers: 85,
    courses: 25,
    awards: 50
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      students: targetCounters.students / steps,
      teachers: targetCounters.teachers / steps,
      courses: targetCounters.courses / steps,
      awards: targetCounters.awards / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        students: Math.min(Math.floor(increment.students * currentStep), targetCounters.students),
        teachers: Math.min(Math.floor(increment.teachers * currentStep), targetCounters.teachers),
        courses: Math.min(Math.floor(increment.courses * currentStep), targetCounters.courses),
        awards: Math.min(Math.floor(increment.awards * currentStep), targetCounters.awards)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetCounters);
      }
    }, duration / steps);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ];

  const academicLinks = [
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Online Learning', href: '#online-learning' },
    { name: 'Library', href: '#library' },
    { name: 'Research', href: '#research' },
    { name: 'Scholarships', href: '#scholarships' },
    { name: 'Academic Calendar', href: '#calendar' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  const stats = [
    { icon: Users, count: counters.students, label: 'Students' },
    { icon: BookOpen, count: counters.teachers, label: 'Faculty' },
    { icon: Calendar, count: counters.courses, label: 'Courses' },
    { icon: Award, count: counters.awards, label: 'Awards' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Animated Counters Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={animateCounters}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-16 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  key={stat.count}
                >
                  {stat.count}+
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* School Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">NV School</h3>
                  <p className="text-gray-300 text-sm">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering students with innovative education, cutting-edge technology, 
                and personalized learning experiences for a bright future.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Education Street, Learning City, LC 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@nvschool.edu</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Academic Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Academics</h4>
              <ul className="space-y-3">
                {academicLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for updates on events, news, and achievements.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                    required
                    suppressHydrationWarning={true}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                    suppressHydrationWarning={true}
                  >
                    <Send className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </form>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-lg font-medium mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-colors duration-200`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative border-t border-white/10 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>&copy; 2024 NV School. All rights reserved.</span>
              <span className="text-red-400">|</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>for Education</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-300">
              <motion.a
                href="#privacy"
                whileHover={{ y: -2 }}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                whileHover={{ y: -2 }}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#accessibility"
                whileHover={{ y: -2 }}
                className="hover:text-white transition-colors"
              >
                Accessibility
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer; 