import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Workflow, 
  TrendingUp, 
  Bot, 
  ArrowRight, 
  Zap,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Shield,
  Cog,
  BarChart3,
  MessageSquare,
  FileText,
  Calendar
} from "lucide-react";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Automations",
      subtitle: "Custom Intelligence Solutions",
      description: "Tailored AI workflows that understand your business context and automate complex decision-making processes.",
      features: [
        "Document processing & analysis",
        "Intelligent data extraction",
        "Smart routing & categorization", 
        "Predictive analytics & insights",
        "Natural language processing",
        "Computer vision solutions"
      ],
      benefits: [
        "90% reduction in processing time",
        "99.5% accuracy rates",
        "24/7 automated operations",
        "Scalable to any volume"
      ],
      pricing: "Starting at $2,500/month",
      color: "primary"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      subtitle: "Streamlined Operations",
      description: "End-to-end automation of your business processes, from lead capture to deal closure.",
      features: [
        "Lead qualification automation",
        "CRM integration & sync",
        "Email & communication workflows",
        "Task assignment & tracking",
        "Report generation & distribution",
        "Cross-platform integrations"
      ],
      benefits: [
        "50% faster deal processing",
        "Zero manual data entry",
        "Consistent process execution",
        "Real-time status tracking"
      ],
      pricing: "Starting at $1,800/month",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      subtitle: "Efficiency Enhancement",
      description: "Comprehensive analysis and optimization of your existing processes using AI-driven insights.",
      features: [
        "Process mapping & analysis",
        "Bottleneck identification",
        "Performance optimization",
        "Cost reduction strategies",
        "Efficiency metrics tracking",
        "Continuous improvement loops"
      ],
      benefits: [
        "40% cost reduction average",
        "3x productivity improvement",
        "Reduced error rates",
        "Enhanced team satisfaction"
      ],
      pricing: "Starting at $3,200/month",
      color: "primary-glow"
    },
    {
      icon: Bot,
      title: "AI Assistants & Dashboards",
      subtitle: "Intelligent Interfaces",
      description: "Custom AI assistants and real-time dashboards that provide instant insights and automate interactions.",
      features: [
        "Conversational AI assistants",
        "Real-time business dashboards",
        "Automated reporting systems",
        "Client interaction automation",
        "Performance monitoring tools",
        "Custom analytics platforms"
      ],
      benefits: [
        "24/7 customer support",
        "Instant data insights",
        "Automated decision support",
        "Enhanced user experience"
      ],
      pricing: "Starting at $2,000/month",
      color: "accent"
    }
  ];

  const additionalServices = [
    {
      icon: MessageSquare,
      title: "AI Chat Solutions",
      description: "Intelligent chatbots for customer service and lead qualification"
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Automated document processing and content extraction"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "AI-powered analytics and reporting for better decision making"
    },
    {
      icon: Shield,
      title: "AI Compliance",
      description: "Ensuring your AI solutions meet industry standards and regulations"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "30-minute consultation to understand your needs",
      duration: "Free"
    },
    {
      step: "02", 
      title: "Technical Assessment",
      description: "Detailed analysis of your current systems and processes",
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "Solution Design",
      description: "Custom AI solution blueprint and implementation plan",
      duration: "1 week"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Deployment and integration with your existing systems",
      duration: "2-8 weeks"
    },
    {
      step: "05",
      title: "Training & Support",
      description: "Team training and ongoing optimization support",
      duration: "Ongoing"
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
              <Cog className="h-4 w-4" />
              <span>Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Solutions
              </span>
              <br />
              <span className="text-foreground">Tailored for Your Success</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From automation to optimization, our comprehensive AI services are designed 
              to transform your business operations and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                View Pricing Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center text-${service.color}`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Features Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="font-semibold text-foreground">{service.pricing}</span>
                    </div>
                    <Button className="bg-gradient-primary hover:shadow-glow group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Visual/Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="bg-gradient-secondary border-border/50 hover:shadow-elegant transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="text-center space-y-4">
                        <service.icon className={`h-16 w-16 text-${service.color} mx-auto`} />
                        <h4 className="text-xl font-bold">{service.title}</h4>
                        <p className="text-muted-foreground">{service.subtitle}</p>
                        
                        <div className="grid grid-cols-3 gap-4 pt-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">Fast</div>
                            <div className="text-xs text-muted-foreground">Implementation</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-accent">Smart</div>
                            <div className="text-xs text-muted-foreground">AI Technology</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-glow">Scalable</div>
                            <div className="text-xs text-muted-foreground">Solutions</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Additional <span className="bg-gradient-primary bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services to address specific business needs and industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-accent mb-4">
              <Clock className="h-4 w-4" />
              <span>Implementation Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              From <span className="bg-gradient-primary bg-clip-text text-transparent">Concept to Launch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 5-step process ensures smooth implementation and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                <Badge variant="outline" className="text-accent border-accent/30">
                  {step.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's schedule a free consultation to discuss your specific needs 
            and create a custom AI solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Calendar className="mr-2 h-4 w-4" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <FileText className="mr-2 h-4 w-4" />
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;