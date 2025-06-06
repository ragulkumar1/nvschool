'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  GraduationCap,
  Award,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
  Bell,
  Bookmark,
  Calendar as CalendarIcon,
  Heart,
  Trophy,
  Zap,
  Target,
  Globe,
  Music,
  Palette,
  FlaskConical,
  Camera,
  Gamepad2
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

export default function AcademicCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client side to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
  }, []);

  // Real-time clock update
  React.useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  // Auto-update calendar when day changes
  React.useEffect(() => {
    if (!mounted) return;
    
    const checkDateChange = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== currentTime.getDate()) {
        setCurrentTime(now);
        // Optionally reset to current month when date changes
        if (now.getMonth() !== currentMonth || now.getFullYear() !== currentYear) {
          setCurrentMonth(now.getMonth());
          setCurrentYear(now.getFullYear());
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(checkDateChange);
  }, [currentTime, currentMonth, currentYear, mounted]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const eventCategories = [
    { id: 'all', name: 'All Events', color: 'from-gray-400 to-gray-600' },
    { id: 'academic', name: 'Academic', color: 'from-blue-400 to-blue-600' },
    { id: 'exam', name: 'Examinations', color: 'from-red-400 to-red-600' },
    { id: 'holiday', name: 'Holidays', color: 'from-green-400 to-green-600' },
    { id: 'event', name: 'Events', color: 'from-purple-400 to-purple-600' },
    { id: 'sports', name: 'Sports', color: 'from-orange-400 to-orange-600' }
  ];

  const academicYearOverview = [
    {
      term: 'First Term',
      duration: 'June - September',
      color: 'from-blue-400 to-cyan-500',
      icon: <BookOpen className="w-6 h-6" />,
      highlights: ['New Academic Year Begins', 'Orientation Programs', 'Mid-term Assessments']
    },
    {
      term: 'Second Term',
      duration: 'October - December',
      color: 'from-purple-400 to-violet-500',
      icon: <Trophy className="w-6 h-6" />,
      highlights: ['Festival Celebrations', 'Annual Sports Day', 'First Term Exams']
    },
    {
      term: 'Third Term',
      duration: 'January - March',
      color: 'from-green-400 to-emerald-500',
      icon: <Star className="w-6 h-6" />,
      highlights: ['Science Fair', 'Cultural Programs', 'Board Examinations']
    },
    {
      term: 'Summer Break',
      duration: 'April - May',
      color: 'from-orange-400 to-red-500',
      icon: <Heart className="w-6 h-6" />,
      highlights: ['Summer Camps', 'Remedial Classes', 'Teacher Training']
    }
  ];

  const upcomingEvents = [
    {
      date: '2024-01-15',
      title: 'Republic Day Celebration',
      category: 'event',
      time: '9:00 AM',
      location: 'School Auditorium',
      description: 'Flag hoisting ceremony and cultural programs',
      icon: <Zap className="w-5 h-5" />
    },
    {
      date: '2024-01-20',
      title: 'Pre-Board Examinations Begin',
      category: 'exam',
      time: '10:00 AM',
      location: 'All Classrooms',
      description: 'Practice examinations for Class X and XII',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      date: '2024-01-25',
      title: 'Science Exhibition',
      category: 'academic',
      time: '2:00 PM',
      location: 'Science Laboratory',
      description: 'Student projects and experiments showcase',
      icon: <FlaskConical className="w-5 h-5" />
    },
    {
      date: '2024-02-01',
      title: 'Annual Sports Meet',
      category: 'sports',
      time: '8:00 AM',
      location: 'Sports Ground',
      description: 'Inter-house sports competition',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      date: '2024-02-14',
      title: 'Valent\'s Day Special Assembly',
      category: 'event',
      time: '11:00 AM',
      location: 'Main Assembly Hall',
      description: 'Special assembly on love and friendship',
      icon: <Heart className="w-5 h-5" />
    },
    {
      date: '2024-02-20',
      title: 'Art & Craft Exhibition',
      category: 'event',
      time: '3:00 PM',
      location: 'Art Room',
      description: 'Display of student artwork and crafts',
      icon: <Palette className="w-5 h-5" />
    }
  ];

  const importantDates = [
    {
      date: 'June 1, 2024',
      event: 'Academic Year Begins',
      category: 'academic',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      date: 'August 15, 2024',
      event: 'Independence Day',
      category: 'holiday',
      icon: <Star className="w-5 h-5" />
    },
    {
      date: 'October 2, 2024',
      event: 'Gandhi Jayanti',
      category: 'holiday',
      icon: <Heart className="w-5 h-5" />
    },
    {
      date: 'December 15-22, 2024',
      event: 'Winter Examinations',
      category: 'exam',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      date: 'January 26, 2025',
      event: 'Republic Day',
      category: 'holiday',
      icon: <Target className="w-5 h-5" />
    },
    {
      date: 'March 1-15, 2025',
      event: 'Final Examinations',
      category: 'exam',
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];
    const isCurrentMonth = currentTime.getMonth() === currentMonth && currentTime.getFullYear() === currentYear;

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = mounted && isCurrentMonth && currentTime.getDate() === day;
      const hasEvent = upcomingEvents.some(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === day && 
               eventDate.getMonth() === currentMonth && 
               eventDate.getFullYear() === currentYear;
      });

      // Check if event is happening today
      const isTodayEvent = hasEvent && isToday;

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.05 }}
          className={`p-2 text-center cursor-pointer rounded-lg transition-all duration-200 relative ${
            isToday 
              ? 'bg-blue-600 text-white font-bold shadow-lg ring-2 ring-blue-300' 
              : hasEvent 
                ? 'bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200' 
                : 'hover:bg-gray-100'
          }`}
        >
          <div className="text-sm">{day}</div>
          {hasEvent && (
            <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
              isTodayEvent ? 'bg-white' : 'bg-purple-600'
            }`}></div>
          )}
          {isToday && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </motion.div>
      );
    }

    return days;
  };

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-green-700 animate-gradient-xy-reverse opacity-80"></div>
        
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
                  Academic Calendar
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Stay informed about all important dates, events, examinations, and activities throughout the academic year.
                </p>
              </motion.div>

              {/* Calendar Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Current Academic Year</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  Academic Year 2024-25 • June 2024 - May 2025
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="text-white/80">
                    <span className="font-semibold">Current Term:</span> Third Term
                  </div>
                </div>
                
                {/* Academic Year Progress */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-white/80 text-sm mb-2">
                    <span>Academic Year Progress</span>
                    <span>{mounted ? Math.round(((currentTime.getMonth() >= 5 ? currentTime.getMonth() - 5 : currentTime.getMonth() + 7) / 12) * 100) : 0}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${mounted ? Math.round(((currentTime.getMonth() >= 5 ? currentTime.getMonth() - 5 : currentTime.getMonth() + 7) / 12) * 100) : 0}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">180</div>
                  <div className="text-white/80 text-sm">School Days</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-white/80 text-sm">Events</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-white/80 text-sm">Holidays</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side Calendar Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Calendar Visualization */}
              <div className="relative w-full h-[600px]">
                {/* Main Calendar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/90 rounded-3xl shadow-2xl p-6"
                >
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {months[currentMonth]} {currentYear}
                      </h3>
                      <div className="mt-1 flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="font-mono">
                            {mounted ? currentTime.toLocaleTimeString('en-US', { 
                              hour12: false,
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit'
                            }) : '--:--:--'}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          <span>
                            {mounted ? currentTime.toLocaleDateString('en-US', { 
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            }) : 'Loading...'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          if (!mounted) return;
                          const now = new Date();
                          setCurrentMonth(now.getMonth());
                          setCurrentYear(now.getFullYear());
                        }}
                        className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        Today
                      </button>
                      <button
                        onClick={() => navigateMonth('prev')}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                      </button>
                      <button
                        onClick={() => navigateMonth('next')}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={`${day}-${index}`} className="text-center text-xs font-semibold text-gray-600 p-1">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => (
                      <div key={i} className={`text-center text-xs p-1 rounded ${
                        i === 14 ? 'bg-blue-600 text-white' : 
                        i === 19 || i === 24 ? 'bg-purple-200 text-purple-700' : 
                        'text-gray-600'
                      }`}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating Event Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute top-8 left-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white shadow-xl animate-float"
                >
                  <BookOpen className="w-6 h-6 mb-2" />
                  <div className="text-sm font-semibold">Exam Week</div>
                  <div className="text-xs opacity-90">Jan 20-25</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-8 right-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-4 text-white shadow-xl animate-float"
                  style={{ animationDelay: '2s' }}
                >
                  <Trophy className="w-6 h-6 mb-2" />
                  <div className="text-sm font-semibold">Sports Day</div>
                  <div className="text-xs opacity-90">Feb 1</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="absolute top-32 right-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-4 text-white shadow-xl animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <Heart className="w-6 h-6 mb-2" />
                  <div className="text-sm font-semibold">Valentine's</div>
                  <div className="text-xs opacity-90">Feb 14</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Year Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Academic Year Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our academic year is divided into four terms, each with its unique focus and highlights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicYearOverview.map((term, index) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${term.color} flex items-center justify-center mb-6 shadow-lg text-white`}>
                  {term.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{term.term}</h3>
                <p className="text-blue-600 font-semibold mb-4">{term.duration}</p>
                <ul className="space-y-2">
                  {term.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calendar Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Interactive Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Navigate through months to view important dates and events.
            </p>
            
            {/* Simple Clock Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 bg-white rounded-3xl p-6 shadow-xl max-w-md mx-auto"
            >
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Current Time</h3>
              </div>
              
              {/* Analog Clock */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-lg">
                    {/* Clock Face */}
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="white"
                      stroke="#000"
                      strokeWidth="4"
                    />
                    
                    {/* Hour Markers */}
                    {Array.from({ length: 12 }, (_, i) => {
                      const angle = (i * 30 - 90) * (Math.PI / 180);
                      const x1 = 100 + Math.cos(angle) * 85;
                      const y1 = 100 + Math.sin(angle) * 85;
                      const x2 = 100 + Math.cos(angle) * 75;
                      const y2 = 100 + Math.sin(angle) * 75;
                      
                      return (
                        <line
                          key={`hour-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#000"
                          strokeWidth="3"
                        />
                      );
                    })}
                    
                    {/* Minute Markers */}
                    {Array.from({ length: 60 }, (_, i) => {
                      if (i % 5 !== 0) { // Skip hour positions
                        const angle = (i * 6 - 90) * (Math.PI / 180);
                        const x1 = 100 + Math.cos(angle) * 85;
                        const y1 = 100 + Math.sin(angle) * 85;
                        const x2 = 100 + Math.cos(angle) * 80;
                        const y2 = 100 + Math.sin(angle) * 80;
                        
                        return (
                          <line
                            key={`minute-${i}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#666"
                            strokeWidth="1"
                          />
                        );
                      }
                      return null;
                    })}
                    
                    {/* Hour Numbers */}
                    {Array.from({ length: 12 }, (_, i) => {
                      const hour = i === 0 ? 12 : i;
                      const angle = (i * 30 - 90) * (Math.PI / 180);
                      const x = 100 + Math.cos(angle) * 65;
                      const y = 100 + Math.sin(angle) * 65;
                      
                      return (
                        <text
                          key={`number-${i}`}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="16"
                          fontWeight="bold"
                          fill="#000"
                        >
                          {hour}
                        </text>
                      );
                    })}
                    
                    {/* Clock Hands */}
                    {mounted && (() => {
                      const hours = currentTime.getHours() % 12;
                      const minutes = currentTime.getMinutes();
                      const seconds = currentTime.getSeconds();
                      
                      // Calculate angles (subtract 90 to start from 12 o'clock)
                      const hourAngle = ((hours + minutes / 60) * 30 - 90) * (Math.PI / 180);
                      const minuteAngle = ((minutes + seconds / 60) * 6 - 90) * (Math.PI / 180);
                      const secondAngle = (seconds * 6 - 90) * (Math.PI / 180);
                      
                      return (
                        <>
                          {/* Hour Hand */}
                          <line
                            x1="100"
                            y1="100"
                            x2={100 + Math.cos(hourAngle) * 45}
                            y2={100 + Math.sin(hourAngle) * 45}
                            stroke="#000"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          
                          {/* Minute Hand */}
                          <line
                            x1="100"
                            y1="100"
                            x2={100 + Math.cos(minuteAngle) * 65}
                            y2={100 + Math.sin(minuteAngle) * 65}
                            stroke="#000"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                          
                          {/* Second Hand */}
                          <line
                            x1="100"
                            y1="100"
                            x2={100 + Math.cos(secondAngle) * 70}
                            y2={100 + Math.sin(secondAngle) * 70}
                            stroke="#ef4444"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      );
                    })()}
                    
                    {/* Center Dot */}
                    <circle
                      cx="100"
                      cy="100"
                      r="6"
                      fill="#000"
                    />
                  </svg>
                </div>
                
                {/* Digital Time Below Clock */}
                <div className="mt-4 text-center">
                  <div className="text-lg text-gray-600 font-semibold">
                    {mounted ? currentTime.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Loading...'}
                  </div>
                  <div className="mt-2 font-mono text-xl font-bold text-blue-600">
                    {mounted ? currentTime.toLocaleTimeString('en-US', { 
                      hour12: true,
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                    }) : '--:--:-- --'}
                  </div>
                  <div className="mt-2 inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Live
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {months[currentMonth]} {currentYear}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => navigateMonth('prev')}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                      onClick={() => navigateMonth('next')}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={`day-${index}`} className="text-center text-sm font-semibold text-gray-500 p-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {renderCalendar()}
                </div>
              </motion.div>
            </div>

            {/* Event Categories */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-3xl p-6 shadow-xl"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">Event Categories</h4>
                <div className="space-y-3">
                  {eventCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 border-2 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                      <span className="font-medium text-gray-700">{category.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-3xl p-6 shadow-xl"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">Live Status</h4>
                
                {/* Real-time Clock */}
                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Current Time</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-blue-600">
                    {mounted ? currentTime.toLocaleTimeString('en-US', { 
                      hour12: true,
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                    }) : '--:--:-- --'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {mounted ? currentTime.toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    }) : 'Loading...'}
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-3 text-gray-800">Legend</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Today</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Event Day</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live Indicator</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      if (!mounted) return;
                      const now = new Date();
                      setCurrentMonth(now.getMonth());
                      setCurrentYear(now.getFullYear());
                    }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm"
                  >
                    Go to Today
                  </button>
                </div>

                {/* Today's Events Notification */}
                {mounted && (() => {
                  const todayEvents = upcomingEvents.filter(event => {
                    const eventDate = new Date(event.date);
                    return eventDate.toDateString() === currentTime.toDateString();
                  });
                  
                  if (todayEvents.length > 0) {
                    return (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center mb-2">
                          <Bell className="w-4 h-4 mr-2 text-red-500 animate-pulse" />
                          <span className="text-sm font-semibold text-red-600">Today's Events</span>
                        </div>
                        <div className="space-y-2">
                          {todayEvents.map((event, index) => (
                            <div key={index} className="bg-red-50 p-2 rounded-lg">
                              <div className="text-xs font-semibold text-red-700">{event.title}</div>
                              <div className="text-xs text-red-600">{event.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with all the exciting events and important dates coming up.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredEvents.map((event, index) => {
                const categoryColor = eventCategories.find(cat => cat.id === event.category)?.color || 'from-gray-400 to-gray-600';
                return (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColor} flex items-center justify-center mb-4 text-white`}>
                      {event.icon}
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                      Add to Calendar
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Important Dates to Remember
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key dates throughout the academic year that you shouldn't miss.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {importantDates.map((item, index) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    item.category === 'academic' ? 'from-blue-400 to-blue-600' :
                    item.category === 'exam' ? 'from-red-400 to-red-600' :
                    item.category === 'holiday' ? 'from-green-400 to-green-600' :
                    'from-purple-400 to-purple-600'
                  } flex items-center justify-center mr-4 text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{item.event}</h3>
                    <p className="text-gray-600 font-semibold">{item.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 