'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Clock, 
  Award, 
  ChevronRight,
  Calendar,
  MapPin,
  Star
} from 'lucide-react';
import { typography, spacing, grid } from '../styles/typography';

type AcademicLevel = 'elementary' | 'middle' | 'high';

interface Subject {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: string;
  highlights: string[];
}

const academicLevels = [
  {
    id: 'elementary' as AcademicLevel,
    title: 'Elementary',
    grade: 'Grades K-5',
    description: 'Foundation learning with creative exploration',
    color: 'from-pink-400 to-red-400',
    textColor: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 'middle' as AcademicLevel,
    title: 'Middle School',
    grade: 'Grades 6-8',
    description: 'Critical thinking and skill development',
    color: 'from-blue-400 to-indigo-400',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'high' as AcademicLevel,
    title: 'High School',
    grade: 'Grades 9-12',
    description: 'Advanced preparation for college and careers',
    color: 'from-purple-400 to-pink-400',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

const subjects: Record<AcademicLevel, Subject[]> = {
  elementary: [
    {
      name: 'Language Arts',
      description: 'Reading, writing, speaking, and listening skills',
      icon: BookOpen,
      duration: '90 min/day',
      highlights: ['Phonics', 'Creative Writing', 'Storytelling']
    },
    {
      name: 'Mathematics',
      description: 'Number sense, problem solving, and logical thinking',
      icon: Award,
      duration: '60 min/day',
      highlights: ['Basic Operations', 'Geometry', 'Problem Solving']
    },
    {
      name: 'Science',
      description: 'Exploration of natural world and scientific method',
      icon: Star,
      duration: '45 min/day',
      highlights: ['Nature Studies', 'Simple Experiments', 'Discovery']
    },
    {
      name: 'Social Studies',
      description: 'Community, culture, and basic geography',
      icon: MapPin,
      duration: '45 min/day',
      highlights: ['Community Helpers', 'Maps', 'Cultures']
    }
  ],
  middle: [
    {
      name: 'English Language Arts',
      description: 'Advanced literacy, literature analysis, and composition',
      icon: BookOpen,
      duration: '85 min/day',
      highlights: ['Literature Analysis', 'Essay Writing', 'Public Speaking']
    },
    {
      name: 'Mathematics',
      description: 'Algebra foundations, geometry, and data analysis',
      icon: Award,
      duration: '85 min/day',
      highlights: ['Pre-Algebra', 'Geometry', 'Statistics']
    },
    {
      name: 'Science',
      description: 'Physical, life, and earth sciences with lab work',
      icon: Star,
      duration: '85 min/day',
      highlights: ['Lab Experiments', 'Scientific Method', 'Research Projects']
    },
    {
      name: 'Social Studies',
      description: 'World history, geography, and civic responsibility',
      icon: MapPin,
      duration: '85 min/day',
      highlights: ['World History', 'Geography', 'Current Events']
    }
  ],
  high: [
    {
      name: 'Advanced English',
      description: 'College-level writing, critical analysis, and literature',
      icon: BookOpen,
      duration: '90 min/day',
      highlights: ['AP Literature', 'College Prep', 'Research Papers']
    },
    {
      name: 'Advanced Mathematics',
      description: 'Calculus, statistics, and advanced problem solving',
      icon: Award,
      duration: '90 min/day',
      highlights: ['Calculus', 'AP Statistics', 'Advanced Functions']
    },
    {
      name: 'Advanced Sciences',
      description: 'Chemistry, physics, biology with intensive lab work',
      icon: Star,
      duration: '90 min/day',
      highlights: ['AP Chemistry', 'Physics', 'Advanced Biology']
    },
    {
      name: 'Advanced Social Studies',
      description: 'Government, economics, and advanced history courses',
      icon: MapPin,
      duration: '90 min/day',
      highlights: ['AP History', 'Government', 'Economics']
    }
  ]
};

const AcademicsSection = () => {
  const [activeLevel, setActiveLevel] = useState<AcademicLevel>('elementary');
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 ${typography.caption} mb-4`}>
            <GraduationCap className="w-4 h-4" />
            Academic Excellence
          </div>
          <h2 className={`${typography.h2} text-gray-900 mb-6`}>
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Curriculum</span>
          </h2>
          <p className={`${typography.body1} text-gray-600 max-w-3xl mx-auto`}>
            Comprehensive education programs designed to nurture intellectual growth, 
            critical thinking, and lifelong learning at every stage of development.
          </p>
        </motion.div>

        {/* Level Selection Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {academicLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={`relative px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeLevel === level.id
                  ? 'text-white shadow-lg transform scale-105'
                  : 'text-gray-600 bg-white/70 hover:bg-white hover:shadow-md'
              }`}
            >
              {activeLevel === level.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${level.color}`}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <div className="relative z-10 text-center">
                <div className={`${typography.cardSubtitle} font-bold`}>{level.title}</div>
                <div className={`${typography.caption} opacity-90`}>{level.grade}</div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Level Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            {academicLevels.map((level) => (
              activeLevel === level.id && (
                <div key={level.id} className={`inline-block px-6 py-3 rounded-xl ${level.bgColor}`}>
                  <p className={`${typography.cardSubtitle} ${level.textColor}`}>
                    {level.description}
                  </p>
                </div>
              )
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Subjects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`${grid.subjects} ${grid.gapMedium} mb-20`}
          >
            {subjects[activeLevel]?.map((subject: Subject, index: number) => {
              const IconComponent = subject.icon;
              return (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-4 md:p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col"
                       onClick={() => setActiveSubject(activeSubject === subject.name ? null : subject.name)}>
                    
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${academicLevels.find(l => l.id === activeLevel)?.color} mb-4 self-start`}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className={`${typography.cardTitle} text-gray-900 mb-2 group-hover:text-blue-600 transition-colors`}>
                      {subject.name}
                    </h3>
                    <p className={`${typography.cardBody} text-gray-600 mb-4 flex-grow`}>
                      {subject.description}
                    </p>

                    {/* Duration */}
                    <div className={`flex items-center gap-2 ${typography.caption} text-gray-500 mb-4`}>
                      <Clock className="w-4 h-4" />
                      {subject.duration}
                    </div>

                    {/* Expand indicator */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`${typography.caption} text-blue-600`}>View Details</span>
                      <ChevronRight className={`w-4 h-4 text-blue-600 transition-transform duration-300 ${
                        activeSubject === subject.name ? 'rotate-90' : ''
                      }`} />
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {activeSubject === subject.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-gray-200"
                        >
                          <h4 className={`${typography.cardSubtitle} text-gray-900 mb-2`}>Key Areas:</h4>
                          <div className="space-y-2">
                            {subject.highlights.map((highlight: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                <span className={`${typography.body3} text-gray-600`}>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${grid.stats} ${grid.gapMedium} text-center`}
        >
          <div className="flex flex-col items-center">
            <div className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${typography.statNumber} mb-2`}>
              98%
            </div>
            <p className={`${typography.statLabel} text-gray-600`}>College Acceptance Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <div className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${typography.statNumber} mb-2`}>
              15:1
            </div>
            <p className={`${typography.statLabel} text-gray-600`}>Student-Teacher Ratio</p>
          </div>
          <div className="flex flex-col items-center">
            <div className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${typography.statNumber} mb-2`}>
              40+
            </div>
            <p className={`${typography.statLabel} text-gray-600`}>Course Offerings</p>
          </div>
        </motion.div>

        {/* View Full Curriculum Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/curriculum"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <BookOpen className="w-5 h-5" />
            View Full Curriculum
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicsSection; 