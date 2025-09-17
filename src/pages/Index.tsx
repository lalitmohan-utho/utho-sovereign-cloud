import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid, DatacenterLocations } from "@/components/Features";
import { CustomerLogos, Testimonials } from "@/components/Customers";
import { 
  Rocket, 
  DollarSign, 
  Play, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Monitor,
  BarChart3,
  Shield,
  Settings
} from "lucide-react";
import heroImage from "@/assets/hero-cloud.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(33, 65, 123, 0.9), rgba(14, 116, 144, 0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              🇮🇳 Made in India for the World
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Utho: India's #1 <br />
              <span className="gradient-accent bg-clip-text text-transparent">
                IaaS Service Providers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
              Enterprise-grade infrastructure, 100% data sovereignty, and transparent pricing—built in India for the world.
            </p>
            
            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Experience the power of Utho, one of the most trusted IaaS service providers in India. 
                From compute and storage to advanced networking and security, our platform delivers 
                the scalability and reliability modern businesses need. Get predictable pricing, 
                instant deployment, and 24×7 expert support—so you can focus on building great 
                applications while we handle the infrastructure.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://utho.com/pricing', '_blank')}
              >
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                Launch Your Free Trial
                <span className="text-sm opacity-90">(no credit card required)</span>
              </Button>
              <Button 
                variant="pricing" 
                size="xl"
                onClick={() => window.open('https://utho.com/pricing', '_blank')}
              >
                <DollarSign className="w-5 h-5" />
                View Full IaaS Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Console Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Seamless Cloud Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our intuitive console designed for developers and enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      One-click VM & Kubernetes deployment
                    </h3>
                    <p className="text-muted-foreground">
                      Deploy infrastructure in seconds with our streamlined interface
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Real-time monitoring dashboards
                    </h3>
                    <p className="text-muted-foreground">
                      Track performance, usage, and costs with beautiful analytics
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Integrated billing insights & alerts
                    </h3>
                    <p className="text-muted-foreground">
                      Never get surprised by costs with transparent billing
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Role-based access & API tokens
                    </h3>
                    <p className="text-muted-foreground">
                      Secure team collaboration with granular permissions
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="accent" size="lg" className="group">
                <Monitor className="w-5 h-5" />
                Sign In to Console
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Laptop Mockup for Platform Demo Video */}
            <div className="relative">
              <div className="relative mx-auto max-w-2xl">
                {/* Laptop Base */}
                <div className="relative bg-muted-foreground rounded-t-2xl p-2 shadow-hero">
                  {/* Screen */}
                  <div className="bg-background rounded-lg overflow-hidden shadow-inner aspect-video">
                    {/* Video Placeholder - Replace with actual video embed */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-lg font-semibold text-foreground">Platform Demo Video</p>
                        <p className="text-sm text-muted-foreground">(Video will be embedded here)</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Bottom */}
                <div className="bg-muted-foreground h-4 rounded-b-3xl shadow-lg relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-8 h-2 bg-muted rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datacenter Locations */}
      <DatacenterLocations />

      {/* Features */}
      <FeatureGrid />

      {/* Best IaaS Providers Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Best IaaS Providers in India
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              When selecting the best IaaS providers in India, businesses look beyond raw compute power. 
              They need reliability, compliance with Indian data laws, and the ability to scale instantly. 
              Utho delivers all three with distributed Tier III & IV data centers, enterprise-grade hardware, 
              and automatic scaling so your workloads perform at their best.
            </p>
            
            <p className="text-muted-foreground">
              As one of the top IaaS service providers, Utho offers advanced networking, instant snapshots, 
              automated backups, and integrated monitoring. Our transparent billing and easy-to-use console 
              mean you always know your costs and can adapt resources on demand—without vendor lock-in or 
              long-term contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <CustomerLogos />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing Link Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="p-12 shadow-hero">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              See All Plans & Pricing
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare compute, storage, and bandwidth options—from startup-friendly 
              instances to high-memory enterprise nodes.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://utho.com/pricing', '_blank')}
            >
              🔗 Go to IaaS Pricing Page
            </Button>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building on India's #1 IaaS Platform
          </h2>
          <p className="text-xl mb-12 text-background/80 max-w-2xl mx-auto">
            Scale your applications with predictable costs and sovereign infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://utho.com/pricing', '_blank')}
            >
              Start Free Trial
            </Button>
            <Button 
              variant="pricing" 
              size="xl"
              onClick={() => window.open('https://utho.com/pricing', '_blank')}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
