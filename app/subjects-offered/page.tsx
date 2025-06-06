'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  BookOpen, 
  Calculator, 
  FlaskConical,
  Globe,
  Music,
  Paintbrush,
  Computer,
  Languages,
  Activity,
  Microscope,
  Heart,
  Brain,
  Trophy,
  Star,
  Users,
  Target,
  Award,
  ChevronRight,
  Play,
  Clock,
  MapPin,
  User
} from 'lucide-react';

// Type definitions
interface SubjectCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

interface Subject {
  name: string;
  icon: React.ReactNode;
  levels: string[];
  description: string;
  topics: Record<string, string[]>;
  assessment: string;
  duration: string;
}

type SubjectCategoryId = 'core' | 'sciences' | 'languages' | 'arts' | 'technology' | 'physical';

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

// Dynamically import components
const Header = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function SubjectsOfferedPage() {
  const [activeCategory, setActiveCategory] = useState<SubjectCategoryId>('core');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const subjectCategories: SubjectCategory[] = [
    {
      id: 'core',
      title: 'Core Subjects',
      description: 'Essential subjects forming the foundation of education',
      color: 'from-blue-500 to-indigo-600',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 'sciences',
      title: 'Sciences',
      description: 'Comprehensive science education and laboratory work',
      color: 'from-green-500 to-emerald-600',
      icon: <FlaskConical className="w-8 h-8" />
    },
    {
      id: 'languages',
      title: 'Languages',
      description: 'Communication skills and multilingual education',
      color: 'from-purple-500 to-violet-600',
      icon: <Languages className="w-8 h-8" />
    },
    {
      id: 'arts',
      title: 'Arts & Creative',
      description: 'Creative expression and artistic development',
      color: 'from-pink-500 to-rose-600',
      icon: <Paintbrush className="w-8 h-8" />
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'Digital literacy and computer science',
      color: 'from-cyan-500 to-blue-600',
      icon: <Computer className="w-8 h-8" />
    },
    {
      id: 'physical',
      title: 'Physical Education',
      description: 'Sports, fitness, and health education',
      color: 'from-orange-500 to-red-600',
      icon: <Activity className="w-8 h-8" />
    }
  ];

  const subjects: Record<SubjectCategoryId, Subject[]> = {
    core: [
      {
        name: 'Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Comprehensive mathematical education from basic numeracy to advanced calculus',
        topics: {
          'Pre-Primary': ['Counting', 'Shapes', 'Patterns', 'Basic operations'],
          'Primary': ['Arithmetic', 'Geometry', 'Fractions', 'Word problems'],
          'Secondary': ['Algebra', 'Trigonometry', 'Statistics', 'Coordinate geometry'],
          'Higher Secondary': ['Calculus', 'Advanced statistics', 'Discrete mathematics', 'Applied mathematics']
        },
        assessment: 'Continuous assessment, practical applications, and examinations',
        duration: 'Year-round program with specialized tracks'
      },
      {
        name: 'English Language Arts',
        icon: <BookOpen className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Comprehensive language and literature program developing communication skills',
        topics: {
          'Pre-Primary': ['Phonics', 'Letter recognition', 'Basic vocabulary', 'Story time'],
          'Primary': ['Reading comprehension', 'Grammar', 'Creative writing', 'Public speaking'],
          'Secondary': ['Literature analysis', 'Advanced writing', 'Research skills', 'Critical thinking'],
          'Higher Secondary': ['Advanced literature', 'Comparative analysis', 'Academic writing', 'Rhetoric']
        },
        assessment: 'Portfolio-based assessment, presentations, and written examinations',
        duration: 'Full academic year with intensive workshops'
      },
      {
        name: 'Social Studies',
        icon: <Globe className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Understanding society, history, geography, and civic responsibilities',
        topics: {
          'Primary': ['Local community', 'Basic geography', 'Historical stories', 'Cultural awareness'],
          'Secondary': ['World history', 'Political systems', 'Economic principles', 'Environmental studies'],
          'Higher Secondary': ['Advanced history', 'International relations', 'Philosophy', 'Sociology']
        },
        assessment: 'Project-based learning, field studies, and comprehensive examinations',
        duration: 'Academic year with field trips and practical applications'
      }
    ],
    sciences: [
      {
        name: 'Physics',
        icon: <Microscope className="w-6 h-6" />,
        levels: ['Secondary', 'Higher Secondary'],
        description: 'Understanding the fundamental laws of nature and physical phenomena',
        topics: {
          'Secondary': ['Mechanics', 'Heat and temperature', 'Light and sound', 'Electricity basics'],
          'Higher Secondary': ['Advanced mechanics', 'Thermodynamics', 'Electromagnetism', 'Modern physics']
        },
        assessment: 'Laboratory work, practical experiments, and theoretical examinations',
        duration: 'Full academic year with extensive laboratory sessions'
      },
      {
        name: 'Chemistry',
        icon: <FlaskConical className="w-6 h-6" />,
        levels: ['Secondary', 'Higher Secondary'],
        description: 'Exploring matter, its properties, and chemical reactions',
        topics: {
          'Secondary': ['Atomic structure', 'Chemical bonding', 'Acids and bases', 'Chemical reactions'],
          'Higher Secondary': ['Organic chemistry', 'Physical chemistry', 'Analytical chemistry', 'Biochemistry']
        },
        assessment: 'Laboratory reports, practical examinations, and theory tests',
        duration: 'Year-long program with weekly laboratory sessions'
      },
      {
        name: 'Biology',
        icon: <Heart className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Study of living organisms and life processes',
        topics: {
          'Primary': ['Plants and animals', 'Human body basics', 'Life cycles', 'Environment'],
          'Secondary': ['Cell biology', 'Genetics', 'Ecology', 'Human physiology'],
          'Higher Secondary': ['Molecular biology', 'Biotechnology', 'Evolution', 'Advanced genetics']
        },
        assessment: 'Field studies, laboratory work, and comprehensive examinations',
        duration: 'Academic year with nature studies and lab work'
      },
      {
        name: 'Environmental Science',
        icon: <Globe className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Understanding environmental issues and sustainable development',
        topics: {
          'Primary': ['Nature conservation', 'Pollution awareness', 'Recycling', 'Animal habitats'],
          'Secondary': ['Ecosystem dynamics', 'Climate change', 'Renewable energy', 'Biodiversity'],
          'Higher Secondary': ['Environmental policy', 'Sustainability science', 'Conservation biology', 'Green technology']
        },
        assessment: 'Project work, field studies, and research presentations',
        duration: 'Integrated throughout the academic year'
      }
    ],
    languages: [
      {
        name: 'Hindi',
        icon: <Languages className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'National language instruction and cultural understanding',
        topics: {
          'Pre-Primary': ['Basic vocabulary', 'Simple sentences', 'Rhymes and songs', 'Cultural stories'],
          'Primary': ['Grammar fundamentals', 'Reading skills', 'Writing practice', 'Literature introduction'],
          'Secondary': ['Advanced grammar', 'Poetry analysis', 'Essay writing', 'Cultural texts'],
          'Higher Secondary': ['Classical literature', 'Modern Hindi poetry', 'Comparative literature', 'Language research']
        },
        assessment: 'Speaking assessments, written tests, and cultural presentations',
        duration: 'Full academic year with cultural immersion activities'
      },
      {
        name: 'French',
        icon: <Languages className="w-6 h-6" />,
        levels: ['Secondary', 'Higher Secondary'],
        description: 'International language learning and cultural exchange',
        topics: {
          'Secondary': ['Basic conversation', 'Grammar foundations', 'Cultural introduction', 'Travel French'],
          'Higher Secondary': ['Advanced conversation', 'French literature', 'Business French', 'Cultural studies']
        },
        assessment: 'Oral examinations, written tests, and cultural projects',
        duration: 'Academic year with exchange program opportunities'
      },
      {
        name: 'Sanskrit',
        icon: <Languages className="w-6 h-6" />,
        levels: ['Primary', 'Secondary'],
        description: 'Classical language study and ancient wisdom',
        topics: {
          'Primary': ['Basic script', 'Simple verses', 'Cultural stories', 'Moral values'],
          'Secondary': ['Grammar study', 'Classical texts', 'Philosophy introduction', 'Cultural heritage']
        },
        assessment: 'Recitation, translation exercises, and cultural understanding',
        duration: 'Academic year with spiritual and cultural components'
      }
    ],
    arts: [
      {
        name: 'Visual Arts',
        icon: <Paintbrush className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Creative expression through various visual art forms',
        topics: {
          'Pre-Primary': ['Finger painting', 'Coloring', 'Clay modeling', 'Craft activities'],
          'Primary': ['Drawing techniques', 'Watercolor painting', 'Sculpture basics', 'Art history'],
          'Secondary': ['Advanced drawing', 'Oil painting', 'Digital art', 'Art criticism'],
          'Higher Secondary': ['Portfolio development', 'Mixed media', 'Contemporary art', 'Art therapy']
        },
        assessment: 'Portfolio assessments, exhibitions, and creative projects',
        duration: 'Year-round with seasonal exhibitions'
      },
      {
        name: 'Music',
        icon: <Music className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Musical education including vocal and instrumental training',
        topics: {
          'Pre-Primary': ['Simple songs', 'Rhythm activities', 'Musical games', 'Basic instruments'],
          'Primary': ['Music theory basics', 'Choir participation', 'Instrument introduction', 'Cultural music'],
          'Secondary': ['Advanced theory', 'Instrumental proficiency', 'Music composition', 'Performance skills'],
          'Higher Secondary': ['Music history', 'Advanced composition', 'Music technology', 'Career preparation']
        },
        assessment: 'Performance evaluations, theory tests, and composition projects',
        duration: 'Academic year with regular performances and recitals'
      },
      {
        name: 'Drama & Theatre',
        icon: <Users className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Theatrical arts and performance skills development',
        topics: {
          'Primary': ['Basic acting', 'Storytelling', 'Simple productions', 'Confidence building'],
          'Secondary': ['Script analysis', 'Character development', 'Stage techniques', 'Production work'],
          'Higher Secondary': ['Advanced acting', 'Directing skills', 'Theatre history', 'Professional preparation']
        },
        assessment: 'Performance assessments, production participation, and skill demonstrations',
        duration: 'Academic year with multiple productions and workshops'
      }
    ],
    technology: [
      {
        name: 'Computer Science',
        icon: <Computer className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Comprehensive computer education and programming skills',
        topics: {
          'Primary': ['Basic computer operations', 'Typing skills', 'Educational software', 'Internet safety'],
          'Secondary': ['Programming basics', 'Web development', 'Database concepts', 'Digital citizenship'],
          'Higher Secondary': ['Advanced programming', 'Software engineering', 'AI basics', 'Cybersecurity']
        },
        assessment: 'Practical projects, coding assessments, and portfolio development',
        duration: 'Full academic year with hands-on laboratory sessions'
      },
      {
        name: 'Information Technology',
        icon: <Computer className="w-6 h-6" />,
        levels: ['Secondary', 'Higher Secondary'],
        description: 'IT skills, digital literacy, and technology applications',
        topics: {
          'Secondary': ['Office applications', 'Digital media', 'Network basics', 'IT ethics'],
          'Higher Secondary': ['System administration', 'Network security', 'Cloud computing', 'IT project management']
        },
        assessment: 'Practical examinations, project work, and certification preparation',
        duration: 'Academic year with industry-relevant training'
      },
      {
        name: 'Robotics & AI',
        icon: <Brain className="w-6 h-6" />,
        levels: ['Secondary', 'Higher Secondary'],
        description: 'Introduction to robotics, artificial intelligence, and automation',
        topics: {
          'Secondary': ['Basic robotics', 'Programming robots', 'Sensor technology', 'Simple automation'],
          'Higher Secondary': ['Advanced robotics', 'Machine learning basics', 'AI applications', 'Research projects']
        },
        assessment: 'Project-based assessment, competitions, and innovation challenges',
        duration: 'Academic year with competition participation'
      }
    ],
    physical: [
      {
        name: 'Physical Education',
        icon: <Activity className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Comprehensive physical fitness and sports education',
        topics: {
          'Pre-Primary': ['Basic movements', 'Playground games', 'Motor skills', 'Fun activities'],
          'Primary': ['Team sports', 'Athletics', 'Swimming', 'Fitness basics'],
          'Secondary': ['Advanced sports', 'Sports science', 'Coaching basics', 'Health education'],
          'Higher Secondary': ['Sports psychology', 'Exercise physiology', 'Sports management', 'Career preparation']
        },
        assessment: 'Skill assessments, fitness tests, and participation evaluation',
        duration: 'Year-round with seasonal sports and competitions'
      },
      {
        name: 'Health Education',
        icon: <Heart className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Health awareness, nutrition, and wellness education',
        topics: {
          'Primary': ['Personal hygiene', 'Healthy eating', 'Safety rules', 'Basic first aid'],
          'Secondary': ['Mental health', 'Substance abuse prevention', 'Nutrition science', 'Health promotion'],
          'Higher Secondary': ['Public health', 'Health research', 'Community health', 'Health policy']
        },
        assessment: 'Health projects, presentations, and practical demonstrations',
        duration: 'Integrated throughout the academic year'
      },
      {
        name: 'Yoga & Meditation',
        icon: <Activity className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Mind-body wellness through yoga and meditation practices',
        topics: {
          'Primary': ['Basic poses', 'Breathing exercises', 'Relaxation techniques', 'Mindfulness'],
          'Secondary': ['Advanced poses', 'Meditation practices', 'Stress management', 'Yoga philosophy'],
          'Higher Secondary': ['Yoga instruction', 'Therapeutic yoga', 'Spiritual practices', 'Teacher training']
        },
        assessment: 'Practical demonstrations, participation, and personal development',
        duration: 'Daily practice throughout the academic year'
      }
    ]
  };

  const activeSubjects = subjects[activeCategory] || [];

  const filteredSubjects = selectedLevel === 'all' 
    ? activeSubjects 
    : activeSubjects.filter((subject: Subject) => subject.levels.includes(selectedLevel));

  const levelOptions = ['all', 'Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-indigo-600 to-blue-700 animate-gradient-xy-reverse opacity-80"></div>
        
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                  Subjects Offered
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Comprehensive subject offerings designed to provide holistic education from foundational learning to advanced specialization.
                </p>
              </motion.div>

              {/* Subject Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Our Academic Portfolio</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  We offer a diverse range of subjects across six main categories, ensuring students receive 
                  a well-rounded education that prepares them for future academic and career success.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-white/80 text-sm">Subjects</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-white/80 text-sm">Categories</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-white/80 text-sm">Levels</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Subject Categories Visualization */}
              <div className="relative w-full h-[600px]">
                {subjectCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 + index * 0.2 }}
                    className={`absolute w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform animate-float`}
                    style={{
                      top: `${20 + (index % 2) * 200}px`,
                      left: `${50 + (index % 3) * 120}px`,
                      transform: `rotate(${index % 2 === 0 ? '12deg' : '-12deg'})`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <div className="text-white text-center">
                        {category.icon}
                        <div className="text-xs font-bold mt-1">{category.title.split(' ')[0]}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subject Categories Navigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Subject Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of subjects organized into six main categories
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {subjectCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id as SubjectCategoryId)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {levelOptions.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedLevel === level
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {level === 'all' ? 'All Levels' : level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Display */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  {subjectCategories.find(cat => cat.id === activeCategory)?.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {subjectCategories.find(cat => cat.id === activeCategory)?.description}
                </p>
              </div>

              {/* Subjects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredSubjects.map((subject: Subject, index: number) => (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Subject Header */}
                    <div className={`bg-gradient-to-r ${subjectCategories.find(cat => cat.id === activeCategory)?.color} p-6 text-white`}>
                      <div className="flex items-center space-x-3 mb-3">
                        {subject.icon}
                        <h4 className="text-xl font-bold">{subject.name}</h4>
                      </div>
                      <p className="text-white/90">{subject.description}</p>
                    </div>

                    {/* Subject Content */}
                    <div className="p-6 space-y-6">
                      {/* Levels */}
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Available Levels
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {subject.levels.map((level: string) => (
                            <span
                              key={level}
                              className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                            >
                              {level}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Topics by Level */}
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Key Topics
                        </h5>
                        <div className="space-y-3">
                          {Object.entries(subject.topics).map(([level, topics]: [string, string[]]) => (
                            <div key={level} className="border-l-4 border-indigo-200 pl-4">
                              <h6 className="font-medium text-gray-700 mb-1">{level}</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {topics.map((topic: string, idx: number) => (
                                  <li key={idx} className="flex items-center">
                                    <ChevronRight className="w-3 h-3 mr-1 text-indigo-400" />
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Assessment & Duration */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Assessment
                          </h6>
                          <p className="text-sm text-gray-600">{subject.assessment}</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Duration
                          </h6>
                          <p className="text-sm text-gray-600">{subject.duration}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredSubjects.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <BookOpen className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No subjects found</h3>
                  <p className="text-gray-500">
                    No subjects available for the selected level in this category.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our Subjects?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: 'Holistic Development',
                description: 'Our subjects are designed to develop cognitive, emotional, and physical aspects of students.',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Expert Faculty',
                description: 'Experienced teachers with specialized knowledge in their respective subject areas.',
                color: 'from-purple-500 to-violet-600'
              },
              {
                icon: <Trophy className="w-12 h-12" />,
                title: 'Modern Facilities',
                description: 'State-of-the-art laboratories, libraries, and technology to support learning.',
                color: 'from-emerald-500 to-green-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 