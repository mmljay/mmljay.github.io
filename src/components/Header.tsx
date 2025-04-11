
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-montserrat font-bold text-navy dark:text-platinum">
          <span className="text-teal">QA</span>Guardian
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-navy/80 dark:text-platinum/80 hover:text-teal dark:hover:text-teal transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-4 bg-transparent border-navy/20 dark:border-platinum/20"
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-platinum" /> : <Moon className="h-4 w-4 text-navy" />}
          </Button>
        </nav>
        
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="mr-2 bg-transparent border-navy/20 dark:border-platinum/20"
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-platinum" /> : <Moon className="h-4 w-4 text-navy" />}
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-navy dark:text-platinum">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-navy shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 font-medium text-navy dark:text-platinum hover:text-teal dark:hover:text-teal"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
