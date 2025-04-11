import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-platinum/10 dark:bg-navy/30 pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <div>
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Professional Summary</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                With over 6 years of experience in Quality Assurance, I help teams deliver reliable and high-quality software through thorough testing and collaboration. My expertise includes developing test strategies, building stable automation frameworks, and identifying issues early in the development cycle.
                I have worked in industries such as fintech, e-commerce, and enterprise applications, gaining insights into both user needs and system reliability. I specialize in manual testing for web and mobile applications, and have experience with test automation using Cypress and API testing with Postman.
                For me, quality is about building trust in the product and ensuring that quality is considered at every step of the development process.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My expertise spans across various domains including fintech, healthcare, e-commerce, and enterprise 
                applications. I believe that quality is not just about finding defects, but about creating a culture 
                where quality is built into every stage of the development process.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Personal Mission</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                <span className="text-teal font-semibold">"</span> My mission is to integrate quality assurance into the development lifecycle, making it a driving force that adds value and supports innovation. I am dedicated to helping teams build quality into their products from the outset, ensuring it is a foundational element rather than a final checkpoint.<span className="text-teal font-semibold">"</span>
              </p>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-3 text-navy dark:text-platinum">Quality Philosophy</h4>
                <ul className="space-y-2">
                  {[
                    'Shift-left testing to identify issues early',
                    'Risk-based approach to maximize testing efficiency',
                    'Automation as an enabler, not a replacement for thinking',
                    'Continuous feedback loops for ongoing improvement',
                    'Quality metrics that matter to business outcomes'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
