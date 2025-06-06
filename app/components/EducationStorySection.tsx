'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Heart, MessageCircle, Send, ChevronLeft, ChevronRight, User, GraduationCap, BookOpen, Award, Users, Microscope } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
  content: {
    type: 'image' | 'video';
    media: string;
    text: string;
    overlayText?: string;
  }[];
}

const EducationStorySection = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const stories: Story[] = [
    {
      id: 1,
      title: "Campus Life",
      subtitle: "Daily moments",
      image: "./images/student1.webp",
      category: "Life",
      icon: Users,
      gradient: "from-pink-500 to-rose-500",
      content: [
        {
          type: 'image',
          media: "./images/student1.webp",
          text: "Morning assembly bringing students together",
          overlayText: "🌅 Starting the day with unity"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Students collaborating in our modern library",
          overlayText: "📚 Knowledge sharing"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Sports activities promoting teamwork",
          overlayText: "⚽ Building character"
        }
      ]
    },
    {
      id: 2,
      title: "Science Lab",
      subtitle: "Experiments",
      image: "/api/placeholder/120/120",
      category: "STEM",
      icon: Microscope,
      gradient: "from-blue-500 to-cyan-500",
      content: [
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Students conducting chemistry experiments",
          overlayText: "🧪 Hands-on learning"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Advanced biology research projects",
          overlayText: "🔬 Future scientists"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Physics demonstrations in action",
          overlayText: "⚡ Understanding the world"
        }
      ]
    },
    {
      id: 3,
      title: "Arts & Culture",
      subtitle: "Creative expression",
      image: "/api/placeholder/120/120",
      category: "Arts",
      icon: BookOpen,
      gradient: "from-purple-500 to-violet-500",
      content: [
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Annual cultural festival performances",
          overlayText: "🎭 Celebrating creativity"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Art exhibition showcasing student work",
          overlayText: "🎨 Young artists shine"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Music ensemble practice sessions",
          overlayText: "🎵 Harmony in learning"
        }
      ]
    },
    {
      id: 4,
      title: "Achievements",
      subtitle: "Awards & recognition",
      image: "/api/placeholder/120/120",
      category: "Success",
      icon: Award,
      gradient: "from-amber-500 to-orange-500",
      content: [
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "National science fair winners",
          overlayText: "🏆 Excellence recognized"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Inter-school debate competition victory",
          overlayText: "🗣️ Eloquent voices"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Sports championship celebration",
          overlayText: "🥇 Champions in action"
        }
      ]
    },
    {
      id: 5,
      title: "Graduation",
      subtitle: "Class of 2024",
      image: "/api/placeholder/120/120",
      category: "Milestone",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-500",
      content: [
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Graduation ceremony highlights",
          overlayText: "🎓 Dreams taking flight"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Valedictorian's inspiring speech",
          overlayText: "💭 Words of wisdom"
        },
        {
          type: 'image',
          media: "/api/placeholder/400/600",
          text: "Alumni success stories",
          overlayText: "⭐ Future leaders"
        }
      ]
    }
  ];

  useEffect(() => {
    if (selectedStory && isPlaying) {
      const handleProgress = () => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (selectedStory && currentSlide < selectedStory.content.length - 1) {
              setCurrentSlide(currentSlide + 1);
              setProgress(0);
            } else {
              handleCloseStory();
            }
            return 0;
          }
          return prev + 1;
        });
      };

      progressRef.current = setInterval(handleProgress, 50);
    }
    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [selectedStory, currentSlide, isPlaying]);

  const handleStoryClick = (story: Story) => {
    try {
      setSelectedStory(story);
      setCurrentSlide(0);
      setProgress(0);
      setIsPlaying(true);
    } catch (error) {
      console.error('Error in handleStoryClick:', error);
      if (error && typeof error === 'object' && 'type' in error) {
        console.error('Caught Event object in handleStoryClick');
        return;
      }
    }
  };

  const handleCloseStory = () => {
    try {
      setSelectedStory(null);
      setCurrentSlide(0);
      setProgress(0);
      setIsPlaying(false);
    } catch (error) {
      console.error('Error in handleCloseStory:', error);
      if (error && typeof error === 'object' && 'type' in error) {
        console.error('Caught Event object in handleCloseStory');
        return;
      }
    }
  };

  const handleNextSlide = () => {
    try {
      if (selectedStory && currentSlide < selectedStory.content.length - 1) {
        setCurrentSlide(currentSlide + 1);
        setProgress(0);
      } else {
        handleCloseStory();
      }
    } catch (error) {
      console.error('Error in handleNextSlide:', error);
      if (error && typeof error === 'object' && 'type' in error) {
        console.error('Caught Event object in handleNextSlide');
        return;
      }
    }
  };

  const handlePrevSlide = () => {
    try {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        setProgress(0);
      }
    } catch (error) {
      console.error('Error in handlePrevSlide:', error);
      if (error && typeof error === 'object' && 'type' in error) {
        console.error('Caught Event object in handlePrevSlide');
        return;
      }
    }
  };

  const togglePlayPause = () => {
    try {
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error in togglePlayPause:', error);
      if (error && typeof error === 'object' && 'type' in error) {
        console.error('Caught Event object in togglePlayPause');
        return;
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Education
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the vibrant moments that make our school special through these immersive stories
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStoryClick(story)}
                className="cursor-pointer flex-shrink-0"
              >
                <div className="relative">
                  {/* Story Ring */}
                  <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${story.gradient} p-1`}>
                    <div className="w-full h-full rounded-full bg-white p-1">
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <story.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${story.gradient} shadow-lg`}>
                      {story.category}
                    </div>
                  </div>
                </div>
                
                {/* Story Label */}
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">{story.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{story.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={handleCloseStory}
          >
            <div className="relative w-full max-w-sm mx-auto h-full">
              {/* Progress Bars */}
              <div className="absolute top-4 left-4 right-4 z-20 flex space-x-1">
                {selectedStory.content.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: '0%' }}
                      animate={{
                        width: index === currentSlide ? `${progress}%` : index < currentSlide ? '100%' : '0%'
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseStory}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Story Content */}
              <div
                className="w-full h-full relative overflow-hidden rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="absolute inset-0"
                  >
                    {/* Background Image */}
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedStory.content[currentSlide].media})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-20 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{selectedStory.content[currentSlide].overlayText}</h3>
                      <p className="text-sm opacity-90">{selectedStory.content[currentSlide].text}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Areas */}
                <div className="absolute inset-0 flex">
                  <div className="flex-1" onClick={handlePrevSlide} />
                  <div className="flex-1" onClick={handleNextSlide} />
                </div>

                {/* Story Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-white">
                      <Heart className="w-6 h-6" />
                      <span className="text-sm">120</span>
                    </button>
                    <button className="flex items-center space-x-1 text-white">
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-sm">45</span>
                    </button>
                  </div>
                  
                  <button onClick={togglePlayPause} className="text-white">
                    {isPlaying ? (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-1 h-4 bg-white mr-1"></div>
                        <div className="w-1 h-4 bg-white"></div>
                      </div>
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EducationStorySection; 