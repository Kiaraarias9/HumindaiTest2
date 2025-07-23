import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  Phone, 
  Clock,
  CheckCircle,
  Rocket
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  const benefits = [
    "Free AI readiness assessment",
    "Custom implementation roadmap", 
    "ROI projections and timeline",
    "Risk-free consultation"
  ];

  return (
    <section className="py-24 bg-gradient-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main CTA */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-accent">
                <Rocket className="h-4 w-4" />
                <span>Ready to Get Started?</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Today
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Join leading companies who've already reduced costs by 40% and 
                increased efficiency by 300% with our AI solutions.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10 group"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now: (555) 123-4567
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@humindai.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Contact Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Newsletter Signup */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground">
                    Get the latest AI insights and industry updates delivered to your inbox.
                  </p>
                </div>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground text-center mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-accent/10 border-accent/20 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-2xl font-bold text-accent mb-2">Need Immediate Help?</div>
                <p className="text-muted-foreground mb-4">
                  Speak with our AI specialists directly
                </p>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Talk to Expert Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;