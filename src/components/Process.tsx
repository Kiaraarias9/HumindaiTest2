import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Target, 
  Cog, 
  TrendingUp, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import workflowImage from "@/assets/workflow-automation.jpg";

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current processes and identify optimization opportunities through comprehensive business assessment.",
      details: [
        "Process mapping and documentation",
        "Bottleneck identification",
        "ROI potential assessment",
        "Technology stack evaluation"
      ]
    },
    {
      icon: Target,
      number: "02", 
      title: "Strategy & Planning",
      description: "Develop a customized AI implementation roadmap aligned with your business objectives and operational requirements.",
      details: [
        "Custom solution design",
        "Implementation timeline",
        "Resource allocation planning",
        "Success metrics definition"
      ]
    },
    {
      icon: Cog,
      number: "03",
      title: "Implementation & Integration",
      description: "Deploy AI solutions seamlessly into your existing systems with minimal disruption to daily operations.",
      details: [
        "System integration and setup",
        "AI model training and testing",
        "User training and onboarding",
        "Quality assurance and validation"
      ]
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and support to ensure maximum performance and ongoing improvements.",
      details: [
        "Performance monitoring",
        "Continuous optimization",
        "24/7 technical support",
        "Regular updates and enhancements"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium text-accent mb-4">
            <Cog className="h-4 w-4" />
            <span>Our Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Concept to Execution
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step methodology ensures successful AI implementation 
            that delivers measurable results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-accent-foreground">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        
                        {/* Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex justify-center mt-6">
                        <ArrowRight className="h-6 w-6 text-primary/30" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <img 
                src={workflowImage}
                alt="AI Workflow Automation"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl" />
              
              {/* Floating Process Indicators */}
              <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Process Analysis</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-medium text-accent">Optimization: Active</div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xs font-medium text-primary-glow">Results: +340% Efficiency</div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;