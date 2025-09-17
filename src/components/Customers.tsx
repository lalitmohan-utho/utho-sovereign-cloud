import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const customerLogos = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "CloudStart", logo: "CS" },
  { name: "InnovateLab", logo: "IL" },
  { name: "ScaleForce", logo: "SF" },
  { name: "DevMatrix", logo: "DM" },
  { name: "MetricPro", logo: "MP" },
  { name: "SynergyTech", logo: "ST" }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechCorp Solutions",
    role: "CTO",
    quote: "Utho's infrastructure helped us scale from 10K to 1M users seamlessly. The transparent pricing and local support make all the difference for Indian businesses.",
    rating: 5
  },
  {
    name: "Priya Sharma", 
    company: "DataFlow Analytics",
    role: "DevOps Lead",
    quote: "Migration was effortless with Utho's expert team. Our costs dropped by 40% while performance improved significantly. Best IaaS decision we've made.",
    rating: 5
  },
  {
    name: "Amit Patel",
    company: "CloudStart Innovations", 
    role: "Founder & CEO",
    quote: "Data sovereignty was crucial for our fintech startup. Utho's India-based infrastructure ensures compliance while delivering enterprise-grade reliability.",
    rating: 5
  }
];

export function CustomerLogos() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of businesses that rely on Utho's infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {customerLogos.map((customer, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-smooth"
            >
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">{customer.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses that have transformed their infrastructure with Utho
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-hero transition-smooth">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-accent/30 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}