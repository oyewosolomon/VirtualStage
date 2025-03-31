import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

// Define types
type NavItem = {
  id: string;
  label: string;
  href?: string; // Optional href for external links
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems
        .filter(item => !item.href) // Only consider sections that don't have external links
        .map(item => ({
          id: item.id,
          offset: document.getElementById(item.id)?.offsetTop || 0
        }));

      const currentSection = sections.reduce((acc, section) => {
        if (scrollPosition >= section.offset - 100) {
          return section.id;
        }
        return acc;
      }, 'home');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop;
      window.scrollTo({
        top: offset - 80, // Account for navbar height
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const renderNavItem = (item: NavItem) => {
    if (item.href) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative px-2 py-1 transition-colors ${
            isScrolled ? 'text-gray-600 hover:text-purple-600' : 'text-white hover:text-purple-200'
          }`}
        >
          {item.label}
        </a>
      );
    } else {
      return (
        <button
          onClick={() => scrollToSection(item.id)}
          className={`relative px-2 py-1 transition-colors ${
            isScrolled ? 'text-gray-600 hover:text-purple-600' : 'text-white hover:text-purple-200'
          }`}
        >
          {item.label}
          {activeSection === item.id && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-100 transition-transform" />
          )}
        </button>
      );
    }
  };

  const renderMobileNavItem = (item: NavItem) => {
    if (item.href) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-left text-xl py-4 border-b border-gray-100 ${
            activeSection === item.id ? 'text-purple-600 font-medium' : 'text-gray-600'
          }`}
        >
          {item.label}
        </a>
      );
    } else {
      return (
        <button
          onClick={() => scrollToSection(item.id)}
          className={`block w-full text-left text-xl py-4 border-b border-gray-100 ${
            activeSection === item.id ? 'text-purple-600 font-medium' : 'text-gray-600'
          }`}
        >
          {item.label}
        </button>
      );
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Globe className={`w-8 h-8 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                VirtualStage
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <React.Fragment key={item.id}>
                  {renderNavItem(item)}
                </React.Fragment>
              ))}
              <button className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isScrolled 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-white text-purple-600 hover:bg-purple-50'
              }`}>
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container mx-auto px-6 py-24">
          <div className="space-y-6">
            {navItems.map(item => (
              <React.Fragment key={item.id}>
                {renderMobileNavItem(item)}
              </React.Fragment>
            ))}
            <button className="w-full py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;