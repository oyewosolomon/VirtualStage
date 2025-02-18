import React, { useState, useEffect } from 'react';
import { Globe2, Users, MonitorPlay, Gauge } from 'lucide-react';

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      if (count < 1000) {
        setCount(prev => Math.min(prev + 50, 1000));
      }
    }, 50);
    return () => clearInterval(interval);
  }, [count]);

  const stats = [
    { icon: MonitorPlay, value: '1000+', label: 'Monthly Events' },
    { icon: Users, value: '100k+', label: 'Concurrent Users' },
    { icon: Globe2, value: '40+', label: 'Languages' },
    { icon: Gauge, value: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24">
  
        <div className={`mt-24 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Where Virtual Events 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Come Alive
            </span>
          </h1>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Host immersive virtual events for up to 100,000 concurrent users with real-time translation in 40+ languages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-medium hover:bg-purple-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-purple-900 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-white p-4 rounded-lg backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all">
                <stat.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;