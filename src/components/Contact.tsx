
import React from 'react';
import { Mail, Phone, Linkedin, Calendar, ArrowRight, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-navy pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="glass-card border-none rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Get in Touch</h3>
              <p className="text-navy/80 dark:text-platinum/80 mb-6">
                Let's discuss how we can work together to elevate your software quality and deliver exceptional user experiences.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-navy/60 dark:text-platinum/60">Email</p>
                    <p className="text-navy dark:text-platinum">john.doe@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-navy/60 dark:text-platinum/60">Phone</p>
                    <p className="text-navy dark:text-platinum">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-navy/60 dark:text-platinum/60">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/johndoe" 
                      className="text-navy dark:text-platinum hover:text-teal dark:hover:text-teal transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card border-none rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-navy dark:text-platinum">Quick Actions</h3>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-navy/5 dark:bg-platinum/5 rounded-lg hover:bg-navy/10 dark:hover:bg-platinum/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-teal" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-navy dark:text-platinum">Schedule a Consultation</p>
                    <p className="text-sm text-navy/60 dark:text-platinum/60">Book a 30-minute discovery call</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal" />
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-navy/5 dark:bg-platinum/5 rounded-lg hover:bg-navy/10 dark:hover:bg-platinum/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-teal" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-navy dark:text-platinum">Download Resume</p>
                    <p className="text-sm text-navy/60 dark:text-platinum/60">Get my detailed CV (PDF)</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-card border-none rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-navy dark:text-platinum">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-navy dark:text-platinum">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-navy/5 dark:bg-platinum/5 border-navy/10 dark:border-platinum/10 focus-visible:ring-teal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-navy dark:text-platinum">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-navy/5 dark:bg-platinum/5 border-navy/10 dark:border-platinum/10 focus-visible:ring-teal"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-sm font-medium text-navy dark:text-platinum">
                    Inquiry Type
                  </label>
                  <Select>
                    <SelectTrigger className="bg-navy/5 dark:bg-platinum/5 border-navy/10 dark:border-platinum/10 focus:ring-teal">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="project">Project Consultation</SelectItem>
                      <SelectItem value="contract">Contract Work</SelectItem>
                      <SelectItem value="audit">QA Audit</SelectItem>
                      <SelectItem value="training">Team Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-navy dark:text-platinum">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or inquiry..." 
                    className="bg-navy/5 dark:bg-platinum/5 border-navy/10 dark:border-platinum/10 focus-visible:ring-teal min-h-[150px]"
                  />
                </div>
                
                <div>
                  <Button className="w-full bg-teal hover:bg-teal/90 text-white">
                    Send Message
                  </Button>
                  <p className="text-center text-sm text-navy/60 dark:text-platinum/60 mt-2">
                    I typically respond within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
