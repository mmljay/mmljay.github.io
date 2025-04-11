
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Skills = () => {
  const skillCategories = [
    {
      name: 'Testing Methodologies',
      skills: [
        { name: 'Manual Testing', level: 95 },
        { name: 'Exploratory Testing', level: 90 },
        { name: 'Risk-based Testing', level: 95 },
        { name: 'Behavior-driven Testing', level: 85 },
        { name: 'Test-driven Development', level: 80 },
      ]
    },
    {
      name: 'Test Automation',
      skills: [
        { name: 'Selenium WebDriver', level: 90 },
        { name: 'Cypress', level: 85 },
        { name: 'Appium', level: 80 },
        { name: 'TestCafe', level: 75 },
        { name: 'Playwright', level: 80 },
      ]
    },
    {
      name: 'Performance Testing',
      skills: [
        { name: 'JMeter', level: 85 },
        { name: 'LoadRunner', level: 80 },
        { name: 'Gatling', level: 70 },
        { name: 'k6', level: 75 },
        { name: 'Locust', level: 65 },
      ]
    },
    {
      name: 'API Testing',
      skills: [
        { name: 'Postman', level: 95 },
        { name: 'SoapUI', level: 85 },
        { name: 'RestAssured', level: 80 },
        { name: 'Karate DSL', level: 75 },
        { name: 'Pact (Contract Testing)', level: 70 },
      ]
    },
    {
      name: 'DevOps & CI/CD',
      skills: [
        { name: 'Jenkins', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'CircleCI', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 70 },
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'C#', level: 70 },
      ]
    },
  ];

  const technologies = [
    'Selenium Grid', 'TestNG', 'JUnit', 'Cucumber', 'Pytest',
    'Mocha', 'Chai', 'Jest', 'AWS', 'Azure DevOps',
    'Grafana', 'Elasticsearch', 'Kibana', 'Terraform',
    'JIRA', 'TestRail', 'qTest', 'Zephyr', 'Allure',
    'XRay', 'Git', 'Swagger', 'GraphQL', 'OWASP ZAP'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-navy pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Core Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card border-none overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-navy/80 dark:text-platinum/80 font-medium">{skill.name}</span>
                        <span className="text-teal text-sm">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="glass-card border-none rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Additional Technical Proficiencies</h3>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum">
                <span className="techdot"></span>
                {tech}
              </span>
            ))}
          </div>
          
          <Separator className="my-6 bg-navy/10 dark:bg-platinum/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-navy dark:text-platinum">Testing Approach</h4>
              <ul className="space-y-2">
                {[
                  'Analytical problem-solving mindset',
                  'Detail-oriented with focus on edge cases',
                  'Systematic test case design and execution',
                  'Root cause analysis expertise',
                  'Compliance and security-focused testing'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-navy/80 dark:text-platinum/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-navy dark:text-platinum">Soft Skills</h4>
              <ul className="space-y-2">
                {[
                  'Clear technical communication',
                  'Stakeholder management expertise',
                  'Cross-functional team collaboration',
                  'Requirements analysis and clarification',
                  'Mentoring and team leadership'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-navy/80 dark:text-platinum/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
