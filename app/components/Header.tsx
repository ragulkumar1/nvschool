'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'About Us', 
      href: '#about',
      dropdown: [
        { name: 'School History & Vision', href: '/history' },
        { name: 'Mission & Core Values', href: '/mission' },
        { name: 'Principal\'s Message', href: '/principal-message' },
        { name: 'School Management', href: '/management' },
        { name: 'Infrastructure Overview', href: '/infrastructure-overview' },
        { name: 'School Anthem & Motto', href: '/school-anthem-motto' },
      ]
    },
    { 
      name: 'Academics', 
      href: '#academics',
      dropdown: [
        { name: 'Curriculum', href: '/curriculum' },
        { name: 'Academic Calendar', href: '/academic-calendar' },
        { name: 'Subjects offered', href: '/subjects-offered' },
        { name: 'Assessment System', href: '/assessment-system' },
        { name: 'Educational partnerships', href: '#Educational-partnerships' },
        { name: 'E-learning resources', href: '#E-learning-resources' },
      ]
    },
    { 
      name: 'Admissions', 
      href: '#admissions',
      dropdown: [
        { name: 'Admission Process', href: '#admission-process' },
        { name: 'Key Dates', href: '#admission-dates' },
        { name: 'Fee Structure', href: '#fees' },
        { name: 'Online Application', href: '#online-application' },
        { name: 'Prospectus Download', href: '#prospectus' },
      ]
    },
    { 
      name: 'Facilities', 
      href: '#facilities',
      dropdown: [
        { name: 'Classrooms & Smart Boards', href: '#classrooms' },
        { name: 'Science & Computer Labs', href: '#laboratories' },
        { name: 'Library & Resources', href: '#library' },
        { name: 'Sports Complex', href: '#sports-facilities' },
        { name: 'Transport & Safety', href: '#transport' },
      ]
    },
    { 
      name: 'Student Life', 
      href: '#student-life',
      dropdown: [
        { name: 'Co-curricular Activities', href: '#activities' },
        { name: 'Sports & Games', href: '#sports' },
        { name: 'Cultural Programs', href: '#cultural' },
        { name: 'Student Achievements', href: '#achievements' },
        { name: 'School Clubs', href: '#clubs' },
      ]
    },
    { 
      name: 'Parents', 
      href: '#parents',
      dropdown: [
        { name: 'Parent Portal', href: '#parent-portal' },
        { name: 'PTA Information', href: '#pta' },
        { name: 'Fee Payment', href: '#fee-payment' },
        { name: 'Notices & Circulars', href: '#notices' },
      ]
    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    try {
      if (href.startsWith('/')) {
        // Navigate to external page
        window.location.href = href;
      } else {
        // Scroll to section on current page
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Element with selector "${href}" not found`);
        }
      }
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Error in scrollToSection:', error);
      // Ensure we don't throw an Event object
      if (error && typeof error === 'object' && 'type' in error) {
        console.error('Caught Event object in scrollToSection, converting to Error');
        throw new Error(`Navigation error: ${(error as any).type || 'Unknown'}`);
      }
      throw error;
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white backdrop-blur-xl shadow-2xl border-b border-gray-100' 
          : 'bg-white'
      }`}
    >
      <nav className="w-full px-0">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          {/* Logo Section - Left (No left padding) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg' 
                : 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg'
            }`}>
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white transition-colors duration-300" />
            </div>
            <div className="hidden xs:flex sm:flex flex-col justify-center min-w-0">
              <h1 className="text-xl font-bold leading-tight transition-all duration-300 truncate bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                NV School
              </h1>
              <p className="text-sm font-medium leading-tight transition-all duration-300 truncate text-gray-600">
                Excellence in Education
              </p>
            </div>
          </motion.div>

          {/* Navigation Menu - Center (Hidden on mobile/tablet) */}
          <div className="hidden xl:flex items-center justify-center flex-1 max-w-5xl mx-4 2xl:mx-8">
            <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-1 font-semibold text-base transition-all duration-300 py-2 px-2 xl:px-3 rounded-lg group whitespace-nowrap text-gray-700 hover:text-blue-600 hover:bg-blue-50/80`}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600"></span>
                    </span>
                    {item.dropdown && (
                      <ChevronDown 
                        className={`w-3 h-3 xl:w-4 xl:h-4 transition-all duration-300 flex-shrink-0 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 xl:w-72 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                      >
                        <div className="px-2">
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <motion.button
                              key={dropdownItem.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: dropIndex * 0.05 }}
                              whileHover={{ x: 8, backgroundColor: '#f8fafc' }}
                              onClick={() => scrollToSection(dropdownItem.href)}
                              className="w-full text-left px-4 py-3 text-base text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-xl font-medium"
                            >
                              {dropdownItem.name}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Navigation for Large screens (lg to xl) */}
          <div className="hidden lg:flex xl:hidden items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-3">
              {/* Show only essential menu items */}
              {menuItems.slice(0, 4).map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-1 font-semibold text-base transition-all duration-300 py-2 px-2 rounded-lg group whitespace-nowrap text-gray-700 hover:text-blue-600 hover:bg-blue-50/80`}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-600"></span>
                    </span>
                    {item.dropdown && (
                      <ChevronDown 
                        className={`w-3 h-3 transition-all duration-300 flex-shrink-0 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-60 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                      >
                        <div className="px-2">
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <motion.button
                              key={dropdownItem.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: dropIndex * 0.05 }}
                              whileHover={{ x: 8, backgroundColor: '#f8fafc' }}
                              onClick={() => scrollToSection(dropdownItem.href)}
                              className="w-full text-left px-4 py-3 text-base text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-xl font-medium"
                            >
                              {dropdownItem.name}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* More Menu for remaining items */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('more')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  className={`flex items-center space-x-1 font-semibold text-base transition-all duration-300 py-2 px-2 rounded-lg group whitespace-nowrap text-gray-700 hover:text-blue-600 hover:bg-blue-50/80`}
                >
                  <span>More</span>
                  <ChevronDown 
                    className={`w-3 h-3 transition-all duration-300 flex-shrink-0 ${
                      activeDropdown === 'more' ? 'rotate-180' : ''
                    }`} 
                  />
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'more' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full right-0 mt-3 w-48 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                    >
                      <div className="px-2">
                        {menuItems.slice(4).map((item, index) => (
                          <motion.button
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ x: 8, backgroundColor: '#f8fafc' }}
                            onClick={() => scrollToSection(item.href)}
                            className="w-full text-left px-4 py-3 text-base text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-xl font-medium"
                          >
                            {item.name}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Right */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
            
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 text-base font-semibold rounded-full border-2 transition-all duration-300 whitespace-nowrap text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-blue-200"
              >
                <span className="hidden md:inline">Inquire</span>
                <span className="md:hidden">Info</span>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-4 py-2 md:px-6 md:py-2 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3 text-base font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 shadow-xl hover:shadow-orange-200 transition-all duration-300 whitespace-nowrap"
              >
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 hover:bg-gray-100 text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left py-3 sm:py-4 px-4 sm:px-6 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-semibold text-base"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4 border-t border-gray-200 mt-4">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-base"
                >
                  Inquire Now
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 shadow-lg transition-all duration-300 font-semibold text-base"
                >
                  Apply Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 