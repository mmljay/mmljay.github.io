
import React from 'react';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-platinum py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              <span className="text-teal">QA</span>Guardian
            </h3>
            <p className="text-platinum/80 mb-6 max-w-md">
              Elevating software excellence through meticulous testing strategy and execution.
              Dedicated to helping organizations deliver flawless software products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-platinum/10 flex items-center justify-center text-platinum hover:bg-teal hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-platinum/10 flex items-center justify-center text-platinum hover:bg-teal hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-platinum/10 flex items-center justify-center text-platinum hover:bg-teal hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-platinum/10 flex items-center justify-center text-platinum hover:bg-teal hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-platinum">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-platinum/80 hover:text-teal transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="text-platinum/80 hover:text-teal transition-colors">Skills</a>
              </li>
              <li>
                <a href="#portfolio" className="text-platinum/80 hover:text-teal transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#methodology" className="text-platinum/80 hover:text-teal transition-colors">Methodology</a>
              </li>
              <li>
                <a href="#testimonials" className="text-platinum/80 hover:text-teal transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-platinum/80 hover:text-teal transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-platinum">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-platinum/80 hover:text-teal transition-colors">Download Resume</a>
              </li>
              <li>
                <a href="#" className="text-platinum/80 hover:text-teal transition-colors">QA Blog</a>
              </li>
              <li>
                <a href="#" className="text-platinum/80 hover:text-teal transition-colors">Testing Resources</a>
              </li>
              <li>
                <a href="#" className="text-platinum/80 hover:text-teal transition-colors">Automation Samples</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-platinum/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-platinum/60 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-platinum/60 hover:text-teal transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-platinum/60 hover:text-teal transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
