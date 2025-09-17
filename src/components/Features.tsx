import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  Zap, 
  Shield, 
  Headphones, 
  Unlock,
  MapPin,
  Server,
  Activity
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Predictable Pricing",
    description: "Pay-as-you-go with no hidden fees. Transparent billing you can trust."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Dedicated CPU and 3000+ IOPS block storage for lightning-fast applications."
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Enterprise encryption, VPC isolation, and DDoS protection built-in."
  },
  {
    icon: Headphones,
    title: "24×7 Local Support",
    description: "Human-first assistance from India-based experts whenever you need it."
  },
  {
    icon: Unlock,
    title: "Open & Flexible",
    description: "API-driven platform with no vendor lock-in. Your data, your choice."
  }
];

const locations = [
  {
    city: "Noida",
    tier: "Tier III",
    icon: Server
  },
  {
    city: "Mumbai", 
    tier: "Tier IV",
    icon: Server
  },
  {
    city: "Bangalore",
    tier: "Tier III", 
    icon: Server
  },
  {
    city: "Hyderabad",
    tier: "Tier III",
    icon: Server
  }
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Utho for IaaS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for Indian businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-hero transition-smooth group">
              <div className="gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DatacenterLocations() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Deploy Anywhere in India—With Complete Data Sovereignty
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All facilities feature redundant power, NVMe SSD storage, and 99.99% uptime SLA
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-hero transition-smooth group">
              <div className="gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <location.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {location.city}
              </h3>
              <p className="text-accent font-semibold">
                {location.tier}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}