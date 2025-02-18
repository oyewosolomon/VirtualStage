import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote 
} from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Event Director",
      company: "TechCorp International",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      quote: "VirtualStage transformed our annual conference. We connected 50,000 attendees across 25 countries seamlessly. The real-time translation feature was a game-changer for our global audience.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Education",
      company: "Global Learning Institute",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "The platform's reliability and interactive features have revolutionized our virtual classrooms. Student engagement has increased by 40%, and the technical support is outstanding.",
      rating: 5
    },
    {
      name: "Emma Watson",
      role: "Festival Director",
      company: "WorldStage Music Festival",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      quote: "Hosting our first virtual music festival seemed daunting, but VirtualStage made it incredible. 100,000 concurrent viewers enjoyed perfect streaming quality with zero issues.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "CEO",
      company: "Trade Connect",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      quote: "The platform's ability to handle our virtual trade show with 75,000 participants was impressive. The networking features and interactive booths exceeded our expectations.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex(current => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex(current => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="bg-purple-50 py-24" id='testimonial'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Industry
            <span className="text-purple-600"> Leaders</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience with VirtualStage
            and how it has transformed their virtual events.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-white" />
          </div>

          {/* Main Carousel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="relative">
                <div className="min-h-[200px]">
                  <div className="mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 italic mb-8">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[activeIndex].role}
                      </div>
                      <div className="text-sm text-purple-600">
                        {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Logos Grid */}
              <div className="grid grid-cols-2 gap-3">
              {[
                "https://logo.clearbit.com/google.com",
                "https://logo.clearbit.com/tesla.com",
                "https://logo.clearbit.com/amazon.com",
                "https://logo.clearbit.com/microsoft.com"
              ].map((url, index) => (
                <div 
                  key={index}
                  className=" flex items-center h-30 w-10 place-items-center justify-center"
                >
                  <img
                    src={url} // Use the URL from the array
                    alt="Company logo"
                    className="h-50 w-full"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'w-6 bg-purple-600' 
                    : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;