'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  Star, 
  Trophy, 
  Calendar, 
  User, 
  Clock, 
  MapPin, 
  Filter,
  ChevronRight,
  Heart,
  Share2
} from 'lucide-react';
import { typography, spacing, grid } from '../styles/typography';

const ModernCardsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const cardData = [
    {
      id: 1,
      type: 'announcement',
      category: 'Announcements',
      title: 'New Science Lab Opening',
      description: 'State-of-the-art science laboratory with advanced equipment for chemistry, physics, and biology experiments.',
      image: '/api/placeholder/400/250',
      date: '2024-06-15',
      author: 'Dr. Sarah Johnson',
      priority: 'high',
      icon: Bell
    },
    {
      id: 2,
      type: 'student',
      category: 'Featured Students',
      title: 'Emma Rodriguez - National Math Olympiad Winner',
      description: 'Emma secured first place in the National Mathematics Olympiad, representing our school with excellence.',
      image: '/api/placeholder/400/250',
      date: '2024-06-10',
      achievement: 'Gold Medal',
      grade: 'Grade 12',
      icon: Star
    },
    {
      id: 3,
      type: 'achievement',
      category: 'Academic Highlights',
      title: 'STEM Program Excellence Award',
      description: 'Our STEM program received the Excellence Award for innovative teaching methods and outstanding student performance.',
      image: '/api/placeholder/400/250',
      date: '2024-06-08',
      award: 'Excellence Award',
      department: 'STEM Department',
      icon: Trophy
    },
    {
      id: 4,
      type: 'event',
      category: 'Activities & Events',
      title: 'Annual Science Fair 2024',
      description: 'Students showcase their innovative projects and scientific discoveries in this exciting annual event.',
      image: '/api/placeholder/400/250',
      date: '2024-07-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      participants: '200+',
      icon: Calendar
    },
    {
      id: 5,
      type: 'announcement',
      category: 'Announcements',
      title: 'Summer Reading Program',
      description: 'Join our exciting summer reading program with personalized book recommendations and reading challenges.',
      image: '/api/placeholder/400/250',
      date: '2024-06-20',
      author: 'Ms. Lisa Chen',
      priority: 'medium',
      icon: Bell
    },
    {
      id: 6,
      type: 'student',
      category: 'Featured Students',
      title: 'Alex Thompson - Robotics Champion',
      description: 'Alex led our robotics team to victory in the Regional Robotics Championship with an innovative design.',
      image: '/api/placeholder/400/250',
      date: '2024-06-05',
      achievement: 'Regional Champion',
      grade: 'Grade 11',
      icon: Star
    }
  ];

  const filters = [
    { id: 'all', label: 'All', count: cardData.length },
    { id: 'announcement', label: 'Announcements', count: cardData.filter(card => card.type === 'announcement').length },
    { id: 'student', label: 'Students', count: cardData.filter(card => card.type === 'student').length },
    { id: 'achievement', label: 'Achievements', count: cardData.filter(card => card.type === 'achievement').length },
    { id: 'event', label: 'Events', count: cardData.filter(card => card.type === 'event').length },
  ];

  const filteredCards = activeFilter === 'all' 
    ? cardData 
    : cardData.filter(card => card.type === activeFilter);

  const getCardColors = (type: string) => {
    const colors = {
      announcement: 'from-blue-500 to-cyan-500',
      student: 'from-purple-500 to-pink-500',
      achievement: 'from-amber-500 to-orange-500',
      event: 'from-green-500 to-emerald-500'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${typography.h2} bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6`}>
            What's Happening at NV School
          </h2>
          <p className={`${typography.body1} text-gray-600 max-w-3xl mx-auto`}>
            Stay updated with the latest news, achievements, and events from our vibrant school community
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-full ${typography.buttonSmall} transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-lg text-gray-700 hover:bg-white/80 border border-gray-200'
              }`}
            >
              <Filter className="w-3 h-3 md:w-4 md:h-4" />
              <span>{filter.label}</span>
              <span className={`px-2 py-1 rounded-full ${typography.small} ${
                activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          layout
          className={`${grid.cards} ${grid.gapMedium} mb-12`}
        >
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 h-full flex flex-col"
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${getCardColors(card.type)}`} />
              
              {/* Image Section */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${getCardColors(card.type)} rounded-full flex items-center justify-center`}>
                    <card.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className={`px-2 py-1 md:px-3 md:py-1 ${typography.small} text-white rounded-full bg-gradient-to-r ${getCardColors(card.type)}`}>
                    {card.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 md:top-4 md:right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 h-6 md:w-8 md:h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Heart className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 h-6 md:w-8 md:h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col h-full">
                <h3 className={`${typography.cardTitle} text-gray-800 mb-3 group-hover:text-blue-600 transition-colors`}>
                  {card.title}
                </h3>
                <p className={`${typography.cardBody} text-gray-600 mb-4 flex-grow`}>
                  {card.description}
                </p>

                {/* Card Specific Content */}
                <div className="space-y-2 md:space-y-3 mb-4">
                  {card.type === 'announcement' && (
                    <>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <User className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.author}</span>
                      </div>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full ${typography.small} ${
                        card.priority === 'high' ? 'bg-red-100 text-red-700' :
                        card.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {card.priority} priority
                      </div>
                    </>
                  )}

                  {card.type === 'student' && (
                    <>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <Trophy className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.achievement}</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <User className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.grade}</span>
                      </div>
                    </>
                  )}

                  {card.type === 'achievement' && (
                    <>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <Trophy className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.award}</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <User className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.department}</span>
                      </div>
                    </>
                  )}

                  {card.type === 'event' && (
                    <>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.time}</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.location}</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                        <User className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{card.participants} participants</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                  <div className={`flex items-center space-x-2 ${typography.caption} text-gray-500`}>
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span>{new Date(card.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className={`flex items-center space-x-1 text-blue-600 hover:text-blue-700 ${typography.caption}`}
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className={`${spacing.buttonPadding} bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full ${typography.button} shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            Load More Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCardsSection; 