import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  Target, 
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield
} from "lucide-react";
import businessTeamImage from "@/assets/business-ai-team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Human-Centric Approach",
      description: "We believe AI should augment human capabilities, not replace them. Our solutions enhance what people do best."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that drive real business results."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build long-term partnerships through honest communication, reliable delivery, and ethical AI practices."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every solution we develop is focused on delivering measurable improvements to your bottom line."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & AI Strategist",
      bio: "15+ years in AI and enterprise solutions. Former VP of AI at Fortune 500 company.",
      avatar: "AC"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Machine Learning Lead",
      bio: "PhD in Computer Science. Expert in neural networks and automation systems.",
      avatar: "SR"
    },
    {
      name: "Michael Kim",
      role: "Head of Client Success",
      bio: "10+ years in real estate technology. Specialized in workflow optimization.",
      avatar: "MK"
    },
    {
      name: "Emma Thompson",
      role: "Lead AI Engineer",
      bio: "Former Google AI researcher. Expert in natural language processing and automation.",
      avatar: "ET"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm font-medium text-accent">
                  <Brain className="h-4 w-4" />
                  <span>About HumindAI</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Pioneering the Future
                  </span>
                  <br />
                  <span className="text-foreground">of AI-Human Collaboration</span>
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Founded with the vision of creating AI that enhances human potential, 
                  HumindAI has become the trusted partner for businesses seeking to optimize 
                  operations while preserving the human touch that drives success.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src={businessTeamImage}
                alt="HumindAI Team"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-primary/10 border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To democratize AI technology by making it accessible, practical, and beneficial 
                  for businesses of all sizes. We're committed to creating solutions that amplify 
                  human intelligence rather than replace it, fostering a future where technology 
                  and humanity work in perfect harmony.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent/10 border-accent/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading force in ethical AI implementation, setting the standard 
                  for how artificial intelligence can enhance business operations while 
                  preserving human creativity, empathy, and decision-making. We envision a 
                  world where AI empowers every professional to achieve their highest potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-accent mb-4">
              <Users className="h-4 w-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Experts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of AI specialists, engineers, and business strategists 
              brings decades of combined experience to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <Award className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven expertise and innovative approach 
            can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;