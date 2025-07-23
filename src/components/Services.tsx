import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Workflow, 
  TrendingUp, 
  Bot, 
  ArrowRight, 
  Zap,
  Target,
  Settings
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Automations",
      description: "Custom AI workflows tailored to your specific business needs and processes.",
      features: [
        "Document processing automation",
        "Intelligent data extraction",
        "Smart decision routing",
        "Predictive analytics"
      ],
      color: "text-primary"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and optimize your operational efficiency.",
      features: [
        "Process optimization",
        "Task automation",
        "Integration setup",
        "Performance monitoring"
      ],
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Analyze and enhance your business processes for maximum efficiency.",
      features: [
        "Process mapping",
        "Bottleneck identification",
        "Efficiency improvements",
        "Cost reduction strategies"
      ],
      color: "text-primary-glow"
    },
    {
      icon: Bot,
      title: "AI Assistants & Dashboards",
      description: "Intelligent interfaces that provide insights and automate decision-making.",
      features: [
        "Custom AI assistants",
        "Real-time dashboards",
        "Business intelligence",
        "Automated reporting"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium text-accent mb-4">
            <Settings className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Solutions
            </span>
            {" "}for Every Business Need
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating AI-powered solutions that enhance human capabilities 
            and drive measurable business results for real estate agencies and enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary/10 ${service.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <Zap className="h-3 w-3 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary/10 rounded-3xl p-8 border border-primary/20 animate-fade-in">
          <Target className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can be customized to meet your specific needs 
            and drive unprecedented growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;