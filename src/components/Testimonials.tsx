
import React from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "John's methodical approach to quality assurance transformed our development process. His ability to anticipate edge cases and identify potential issues before they reached production was nothing short of remarkable.",
      author: "Emily Rodriguez",
      position: "CTO",
      company: "TechSolutions Inc."
    },
    {
      quote: "Working with John was a game-changer for our product quality. His test automation framework reduced our regression testing time by 80% while improving coverage. The ROI on his expertise was immediate and substantial.",
      author: "Michael Chang",
      position: "VP of Engineering",
      company: "InnovateSoft"
    },
    {
      quote: "John doesn't just find bugs; he helps prevent them. His strategic shift-left testing approach integrated QA into our development process from day one, resulting in fewer defects and faster delivery cycles.",
      author: "Sarah Johnson",
      position: "Product Manager",
      company: "FinTech Solutions"
    },
    {
      quote: "In 15 years of software development, I've never worked with a more thorough and effective QA professional. John's attention to detail and technical expertise make him a true quality guardian for any software project.",
      author: "David Miller",
      position: "Senior Software Architect",
      company: "Enterprise Systems"
    },
    {
      quote: "John's performance testing expertise was crucial for our high-traffic e-commerce platform. He identified and helped resolve scaling issues that would have been catastrophic during our peak season.",
      author: "Jennifer Lee",
      position: "Director of Digital",
      company: "Global Retail Group"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-platinum/10 dark:bg-navy/30 pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testimonials</h2>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="glass-card border-none h-full rounded-xl p-6 relative">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-teal/20" />
                    
                    <p className="text-navy/80 dark:text-platinum/80 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div>
                      <p className="font-semibold text-navy dark:text-platinum">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-navy/70 dark:text-platinum/70">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-teal text-white hover:bg-teal/90" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-teal text-white hover:bg-teal/90" />
          </Carousel>
        </div>
        
        <div className="mt-20">
          <div className="glass-card border-none rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 text-navy dark:text-platinum">Let's Collaborate</h3>
                <p className="text-navy/80 dark:text-platinum/80">
                  Ready to elevate your software quality? Let's discuss how my expertise can benefit your project.
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:col-span-2 justify-end">
                <div className="text-center">
                  <p className="text-sm text-navy/60 dark:text-platinum/60 mb-1">Project Availability</p>
                  <div className="px-4 py-2 rounded-full bg-teal/10 text-teal font-medium">
                    Limited Spots for Q2 2023
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-medium rounded-lg hover:bg-teal/90 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
