
import React, { useState } from 'react';
import { ExternalLink, CheckCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Enterprise Banking Platform Transformation",
      industry: "Financial Services",
      technologies: ["Selenium", "Java", "Jenkins", "Cucumber", "JMeter"],
      type: "Automation",
      description: "Led end-to-end testing for a major banking platform transformation, ensuring flawless migration of critical financial systems.",
      challenges: [
        "Legacy system integration with modern microservices architecture",
        "Strict regulatory compliance requirements",
        "Zero downtime deployment requirements",
        "Complex data migration validation"
      ],
      approach: [
        "Implemented risk-based testing approach focusing on critical functions",
        "Designed automated regression suite covering 2000+ test cases",
        "Created performance test scenarios simulating 100,000+ concurrent users",
        "Established parallel testing environments for legacy and new systems"
      ],
      results: [
        "Zero critical defects in production launch",
        "Reduced testing cycle from 4 weeks to 5 days",
        "Achieved 99.8% test automation coverage for regression",
        "Improved system performance by 40% through early issue identification"
      ],
      testimonial: {
        quote: "The QA strategy was instrumental in our successful platform migration. What could have been a disaster turned into a showcase of excellent quality engineering.",
        author: "Sarah Johnson, CTO",
        company: "Global Banking Corp"
      }
    },
    {
      title: "Healthcare Patient Portal Security Overhaul",
      industry: "Healthcare",
      technologies: ["OWASP ZAP", "Burp Suite", "Python", "Selenium", "Docker"],
      type: "Security",
      description: "Conducted comprehensive security testing and remediation for a patient portal handling sensitive medical data.",
      challenges: [
        "HIPAA compliance requirements",
        "Legacy codebase with minimal documentation",
        "Integration with multiple third-party healthcare systems",
        "Limited testing window due to urgent security concerns"
      ],
      approach: [
        "Conducted thorough threat modeling and risk assessment",
        "Implemented automated security scanning in CI/CD pipeline",
        "Performed manual penetration testing on critical pathways",
        "Developed custom security test framework for healthcare-specific vulnerabilities"
      ],
      results: [
        "Identified and remediated 37 security vulnerabilities",
        "Achieved 100% HIPAA compliance for patient data handling",
        "Implemented continuous security testing reducing future risks",
        "Zero security incidents in the 18 months following implementation"
      ],
      testimonial: {
        quote: "The thoroughness of the security testing uncovered issues we weren't even aware of. The methodical approach to remediation gave us complete confidence in our system's security.",
        author: "Dr. Michael Chen",
        company: "HealthFirst Systems"
      }
    },
    {
      title: "E-commerce Platform Performance Optimization",
      industry: "Retail",
      technologies: ["Gatling", "Grafana", "ELK Stack", "AWS", "New Relic"],
      type: "Performance",
      description: "Resolved critical performance bottlenecks for a major e-commerce platform experiencing scalability issues during peak shopping seasons.",
      challenges: [
        "Handling 200x normal traffic during flash sales",
        "Complex microservices architecture with 30+ services",
        "Third-party payment processor integration issues",
        "Mobile and web platform performance parity"
      ],
      approach: [
        "Created realistic user journey simulations for performance testing",
        "Implemented distributed load testing across multiple regions",
        "Developed real-time performance monitoring dashboards",
        "Conducted systematic component-level and integration performance testing"
      ],
      results: [
        "Improved checkout flow response time by 73%",
        "Eliminated cart abandonment due to performance issues",
        "Enabled platform to handle 500,000 concurrent users",
        "Reduced infrastructure costs by 35% through optimization"
      ],
      testimonial: {
        quote: "Our Black Friday sales increased by 43% year-over-year, largely due to the performance improvements that eliminated the previous year's site crashes. An exceptional job of performance testing and optimization.",
        author: "Alex Rivera",
        company: "Global Retail Solutions"
      }
    },
    {
      title: "Mobile Banking App Test Automation Framework",
      industry: "Financial Services",
      technologies: ["Appium", "TestNG", "Allure", "Browserstack", "Jenkins"],
      type: "Mobile",
      description: "Designed and implemented a comprehensive test automation framework for a mobile banking application supporting iOS and Android platforms.",
      challenges: [
        "Supporting multiple device types and OS versions",
        "Biometric authentication testing",
        "Offline functionality validation",
        "Secure transaction testing"
      ],
      approach: [
        "Implemented page object model architecture for maintainability",
        "Created device farm integration for parallel testing",
        "Developed custom testing utilities for biometric simulation",
        "Established automated visual testing for UI consistency"
      ],
      results: [
        "Reduced testing time from 2 weeks to 1 day per release",
        "Achieved 90% test automation coverage across platforms",
        "Detected 98% of issues before user acceptance testing",
        "Enabled weekly release cycles instead of quarterly"
      ],
      testimonial: {
        quote: "The test automation framework transformed our release process. What was once a bottleneck is now a competitive advantage allowing us to deliver new features faster than our competitors.",
        author: "Jennifer Smith",
        company: "Mobile Banking Innovations"
      }
    }
  ];
  
  const technologies = [
    "All",
    "Selenium",
    "Appium",
    "Cypress",
    "JMeter",
    "Jenkins",
    "Java",
    "Python",
    "Security"
  ];

  return (
    <section id="portfolio" className="py-20 bg-platinum/10 dark:bg-navy/30 pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Project Portfolio</h2>
        
        <div className="mb-8">
          <Tabs defaultValue="All">
            <TabsList className="grid grid-cols-3 md:grid-cols-9 bg-transparent">
              {technologies.map((tech, index) => (
                <TabsTrigger 
                  key={index} 
                  value={tech}
                  className="data-[state=active]:bg-teal data-[state=active]:text-white"
                >
                  {tech}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`glass-card border-none overflow-hidden transition-all duration-300 hover:shadow-lg ${activeProject === index ? 'ring-2 ring-teal' : ''}`}
            >
              <CardContent className="p-0">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-navy dark:text-platinum">{project.title}</h3>
                    <ChevronRight 
                      className={`text-teal transition-transform duration-300 ${activeProject === index ? 'rotate-90' : ''}`} 
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum rounded">
                      {project.industry}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-teal/20 text-teal rounded">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-navy/80 dark:text-platinum/80 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="inline-block px-2 py-1 text-xs font-medium bg-navy/5 dark:bg-platinum/5 text-navy/70 dark:text-platinum/70 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {activeProject === index && (
                  <div className="p-6 border-t border-navy/10 dark:border-platinum/10 bg-navy/5 dark:bg-platinum/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium text-navy dark:text-platinum mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-navy/80 dark:text-platinum/80 text-sm">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-navy dark:text-platinum mb-3">Approach</h4>
                        <ul className="space-y-2">
                          {project.approach.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-navy/80 dark:text-platinum/80 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-navy dark:text-platinum mb-3">Results</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-navy/80 dark:text-platinum/80 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 p-4 bg-navy/10 dark:bg-platinum/10 rounded-lg">
                      <p className="italic text-navy/80 dark:text-platinum/80 mb-2 text-sm">
                        "{project.testimonial.quote}"
                      </p>
                      <p className="text-right text-sm text-navy/70 dark:text-platinum/70">
                        — {project.testimonial.author}, {project.testimonial.company}
                      </p>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline" className="text-teal border-teal hover:bg-teal hover:text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
