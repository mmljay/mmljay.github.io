
import React from 'react';
import { CheckCircle, Award, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-platinum/10 dark:bg-navy/30 pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Professional Summary</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                With over 10 years of experience in Quality Assurance, I've dedicated my career to ensuring software 
                meets the highest standards of excellence. I specialize in designing comprehensive test strategies, 
                building robust automation frameworks, and implementing CI/CD testing pipelines that catch issues 
                before they impact users.
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
                <span className="text-teal font-semibold">"</span> My mission is to transform quality assurance from a 
                final checkpoint into an integrated part of the development lifecycle that drives value and enables 
                innovation. I am committed to empowering teams to build quality into their products from the start, 
                rather than inspecting it in at the end. <span className="text-teal font-semibold">"</span>
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
          
          <div>
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Key Achievements</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-teal" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-navy dark:text-platinum">Transformation Leader</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Led the transformation of testing practices at a Fortune 500 company, reducing testing time by 60% 
                      while increasing coverage by 35%.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-teal" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-navy dark:text-platinum">Automation Architect</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Designed and implemented a custom test automation framework that saved $1.2M annually in testing costs 
                      and reduced release cycles by 40%.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-teal" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-navy dark:text-platinum">Quality Champion</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Established a center of excellence for QA, training over 50 professionals and implementing standards 
                      that reduced post-release defects by 97%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Education & Certifications</h3>
              
              <div className="relative border-l-2 border-teal pl-6 pb-2 space-y-6">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-teal"></div>
                  <div>
                    <h4 className="text-lg font-medium text-navy dark:text-platinum flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-teal" />
                      M.S. Computer Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">Stanford University, 2010-2012</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-teal"></div>
                  <div>
                    <h4 className="text-lg font-medium text-navy dark:text-platinum flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-teal" />
                      B.S. Software Engineering
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">MIT, 2006-2010</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-teal"></div>
                  <div>
                    <h4 className="text-lg font-medium text-navy dark:text-platinum">ISTQB Certified Test Manager</h4>
                    <p className="text-gray-600 dark:text-gray-400">Advanced Level, 2014</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-teal"></div>
                  <div>
                    <h4 className="text-lg font-medium text-navy dark:text-platinum">AWS Certified DevOps Engineer</h4>
                    <p className="text-gray-600 dark:text-gray-400">Professional, 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
