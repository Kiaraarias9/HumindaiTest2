import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Calendar,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 2 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      description: "Call us directly for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@humindai.com", "support@humindai.com"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Innovation Drive", "San Francisco, CA 94105"],
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Hours", 
      details: ["Mon-Fri: 8AM-6PM PST", "Sat: 9AM-2PM PST"],
      description: "Our business hours"
    }
  ];

  const services = [
    "AI Automations",
    "Workflow Automation", 
    "Process Optimization",
    "AI Assistants & Dashboards",
    "Other/Custom Solution"
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: "2-Hour Response Time",
      description: "Quick responses to all inquiries"
    },
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "No-obligation discovery call"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Meet at your convenience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-accent">
              <MessageSquare className="h-4 w-4" />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Let's Transform
              </span>
              <br />
              <span className="text-foreground">Your Business Together</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to reduce costs, increase efficiency, and optimize your operations? 
              Our AI experts are here to help you achieve your business goals.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="text-center">
                  <reason.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">{reason.title}</div>
                  <div className="text-xs text-muted-foreground">{reason.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                    <Send className="h-6 w-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 2 hours.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project and how we can help..."
                        rows={5}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Quick Actions */}
              <div className="grid gap-4">
                <Card className="bg-gradient-primary/10 border-primary/20 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
                    <p className="text-muted-foreground mb-4">
                      Book a free 30-minute consultation
                    </p>
                    <Button className="bg-gradient-primary hover:shadow-glow">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-accent/10 border-accent/20 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Call Directly</h3>
                    <p className="text-muted-foreground mb-4">
                      Speak with our team right now
                    </p>
                    <Button variant="outline" className="border-accent/30 hover:bg-accent/10">
                      +1 (555) 123-4567
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-foreground">{detail}</p>
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm mt-2">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social/Additional */}
              <Card className="bg-gradient-secondary border-border/50">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Follow Our Work</h3>
                  <p className="text-muted-foreground mb-4">
                    Stay updated with our latest AI innovations
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm">LinkedIn</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">Blog</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Quick answers to common questions about our AI solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">How quickly can you implement AI solutions?</h3>
                  <p className="text-muted-foreground text-sm">
                    Most implementations take 2-8 weeks depending on complexity. 
                    We start with quick wins and build from there.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Do you work with small businesses?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! We have solutions for businesses of all sizes, 
                    from startups to enterprise organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">What kind of ROI can we expect?</h3>
                  <p className="text-muted-foreground text-sm">
                    Our clients typically see 40% cost reduction and 3x productivity 
                    improvements within the first 6 months.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Do you provide ongoing support?</h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely. We offer 24/7 support, regular optimization, 
                    and continuous improvements to ensure peak performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;