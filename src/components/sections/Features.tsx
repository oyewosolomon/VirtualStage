import React, { useState } from 'react';
import { 
  Users, Globe2, Mic, Video, MessageSquare, 
  BarChart3, Shield, Puzzle, ChevronRight 
} from 'lucide-react';

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Users,
      title: "Massive Scale Events",
      description: "Host up to 100,000 concurrent users with zero lag. Perfect for conferences, concerts, and global summits.",
      details: [
        "Load balancing across global servers",
        "Automatic scaling based on attendance",
        "Real-time performance monitoring"
      ]
    },
    {
      icon: Globe2,
      title: "Real-Time Translation",
      description: "Break language barriers with instant translation in 40+ languages. Connect audiences worldwide.",
      details: [
        "AI-powered live translation",
        "Subtitle customization",
        "Regional content adaptation"
      ]
    },
    {
      icon: Mic,
      title: "Interactive Sessions",
      description: "Engage your audience with polls, Q&As, breakout rooms, and virtual networking spaces.",
      details: [
        "Live polling and surveys",
        "Breakout room management",
        "Virtual networking lounges"
      ]
    },
    {
      icon: Video,
      title: "HD Streaming",
      description: "Deliver crystal-clear 4K video and high-fidelity audio to viewers across the globe.",
      details: [
        "Adaptive bitrate streaming",
        "Multi-camera support",
        "Screen sharing capabilities"
      ]
    },
    {
      icon: MessageSquare,
      title: "Engagement Tools",
      description: "Keep audiences engaged with chat, reactions, and interactive elements.",
      details: [
        "Moderated chat rooms",
        "Live reactions and emojis",
        "Virtual hand raising"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track engagement, attendance, and interaction metrics in real-time.",
      details: [
        "Real-time analytics",
        "Custom report generation",
        "Engagement tracking"
      ]
    }
  ];

  return (
    <div className="bg-white py-24" id='features'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Powerful Features for 
            <span className="text-purple-600"> Virtual Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to host successful virtual events at any scale. 
            From intimate workshops to massive global conferences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer
                ${activeFeature === index 
                  ? 'bg-purple-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-50 hover:bg-purple-50'}`}
              onClick={() => setActiveFeature(index)}
            >
              <feature.icon 
                className={`w-12 h-12 mb-6 transition-colors
                  ${activeFeature === index ? 'text-white' : 'text-purple-600'}`}
              />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className={`mb-6 ${activeFeature === index ? 'text-purple-100' : 'text-gray-600'}`}>
                {feature.description}
              </p>
              <ul className={`space-y-3 ${activeFeature === index ? 'block' : 'hidden'}`}>
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center p-1 rounded-full bg-purple-50 mb-8">
            <Shield className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 text-sm font-medium">99.9% Uptime Guarantee</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-colors">
              Explore All Features
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;