import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users,
  ArrowRight,
  Building2,
  Home,
  Target,
  Zap,
  CheckCircle,
  BarChart3,
  Award
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Metro Realty Group: Lead Processing Revolution",
      client: "Metro Realty Group",
      industry: "Real Estate",
      size: "50+ Agents",
      challenge: "Manual lead qualification taking 4+ hours per lead, missing opportunities",
      solution: "AI-powered lead scoring and automated qualification workflows",
      results: [
        { metric: "Lead Processing Speed", value: "300% faster", icon: Clock },
        { metric: "Conversion Rate", value: "+45%", icon: TrendingUp },
        { metric: "Time Saved", value: "20 hrs/week", icon: Users },
        { metric: "Revenue Increase", value: "$500K/year", icon: DollarSign }
      ],
      description: "Implemented intelligent lead scoring system that automatically qualifies prospects based on 15+ data points, routes high-value leads to top agents, and nurtures others through automated sequences.",
      technologies: ["Natural Language Processing", "Predictive Analytics", "CRM Integration", "Email Automation"],
      testimonial: "HumindAI transformed our lead qualification process. We're now processing 3x more leads with the same team size, and our conversion rates have increased by 45%.",
      clientRole: "CEO, Metro Realty Group",
      image: "case-study-1"
    },
    {
      title: "Pinnacle Properties: Workflow Automation Success",
      client: "Pinnacle Properties",
      industry: "Commercial Real Estate",
      size: "100+ Employees",
      challenge: "Disconnected systems causing data silos and manual administrative work",
      solution: "End-to-end workflow automation connecting all business systems",
      results: [
        { metric: "Administrative Time", value: "-80%", icon: Clock },
        { metric: "Data Accuracy", value: "99.5%", icon: Target },
        { metric: "Process Speed", value: "5x faster", icon: Zap },
        { metric: "Cost Savings", value: "$300K/year", icon: DollarSign }
      ],
      description: "Created unified automation platform that connects CRM, accounting, document management, and communication tools, eliminating manual data entry and ensuring real-time synchronization.",
      technologies: ["API Integration", "Process Automation", "Data Synchronization", "Document Management"],
      testimonial: "The workflow automation saves us 20 hours per week on administrative tasks. Our agents can now focus on what they do best - closing deals.",
      clientRole: "Operations Director, Pinnacle Properties",
      image: "case-study-2"
    },
    {
      title: "Elite Real Estate: AI Customer Service",
      client: "Elite Real Estate",
      industry: "Luxury Real Estate",
      size: "25+ Agents",
      challenge: "Slow response times to client inquiries affecting customer satisfaction",
      solution: "AI-powered customer service assistant with 24/7 availability",
      results: [
        { metric: "Response Time", value: "98% faster", icon: Clock },
        { metric: "Customer Satisfaction", value: "+60%", icon: Users },
        { metric: "Inquiry Handling", value: "24/7 coverage", icon: Target },
        { metric: "Agent Productivity", value: "+40%", icon: TrendingUp }
      ],
      description: "Deployed intelligent customer service AI that handles initial inquiries, schedules appointments, provides property information, and escalates complex queries to appropriate agents.",
      technologies: ["Conversational AI", "Natural Language Understanding", "Calendar Integration", "Knowledge Base"],
      testimonial: "Their AI assistant handles our initial client inquiries flawlessly. Response times improved from hours to minutes, and client satisfaction is at an all-time high.",
      clientRole: "Managing Partner, Elite Real Estate",
      image: "case-study-3"
    },
    {
      title: "PropertyFlow: Enterprise Process Optimization",
      client: "PropertyFlow",
      industry: "Property Management",
      size: "500+ Properties",
      challenge: "Complex property management processes with high error rates and delays",
      solution: "Comprehensive AI-driven process optimization and automation platform",
      results: [
        { metric: "Error Reduction", value: "-95%", icon: Target },
        { metric: "Processing Time", value: "-70%", icon: Clock },
        { metric: "Efficiency Gain", value: "+250%", icon: Zap },
        { metric: "Operational Cost", value: "-$1.2M/year", icon: DollarSign }
      ],
      description: "Implemented enterprise-grade AI platform that optimizes maintenance scheduling, automates tenant communications, streamlines lease processing, and provides predictive analytics for property performance.",
      technologies: ["Machine Learning", "Predictive Analytics", "Process Mining", "Enterprise Integration"],
      testimonial: "The integration was seamless and the support exceptional. HumindAI didn't just implement technology - they revolutionized how we operate.",
      clientRole: "CTO, PropertyFlow",
      image: "case-study-4"
    }
  ];

  const industries = [
    { name: "Real Estate", count: "25+ Projects", icon: Home },
    { name: "Property Management", count: "15+ Projects", icon: Building2 },
    { name: "Commercial Real Estate", count: "10+ Projects", icon: Target },
    { name: "Enterprise Services", count: "20+ Projects", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-accent">
              <Award className="h-4 w-4" />
              <span>Case Studies</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Real Results
              </span>
              <br />
              <span className="text-foreground">from Real Clients</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how leading companies across industries have transformed their 
              operations and achieved remarkable growth with our AI solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$5M+</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Processes Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground">Proven success across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={industry.name}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <industry.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div 
                key={study.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="bg-gradient-secondary/50 border-border/50 hover:shadow-elegant transition-all duration-500">
                  <CardHeader className="pb-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <Badge variant="outline" className="text-primary border-primary/30">
                        {study.industry}
                      </Badge>
                      <Badge variant="outline" className="text-accent border-accent/30">
                        {study.size}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                      {study.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground">
                      {study.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-destructive">The Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">Our Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div>
                      <h4 className="text-lg font-semibold mb-6 text-foreground">Key Results</h4>
                      <div className="grid md:grid-cols-4 gap-6">
                        {study.results.map((result, idx) => (
                          <Card key={idx} className="bg-card/50 border-border/50 text-center">
                            <CardContent className="p-6">
                              <result.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                              <div className="text-2xl font-bold text-primary mb-1">
                                {result.value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {result.metric}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-primary-foreground">
                              {study.client.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <blockquote className="text-foreground italic mb-3">
                              "{study.testimonial}"
                            </blockquote>
                            <cite className="text-sm text-muted-foreground">
                              {study.clientRole}
                            </cite>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <div className="text-center pt-6 border-t border-border">
                      <Button className="bg-gradient-primary hover:shadow-glow group">
                        Learn More About This Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-24 bg-gradient-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <BarChart3 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Proven Track Record of <span className="bg-gradient-primary bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our clients consistently achieve remarkable improvements in efficiency, 
              cost reduction, and overall business performance.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-muted-foreground">Average Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">3x</div>
                <div className="text-muted-foreground">Productivity Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-glow mb-2">95%</div>
                <div className="text-muted-foreground">Error Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Automated Operations</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Start Your Success Story
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Download Full Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;