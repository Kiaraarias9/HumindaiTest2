import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Brain, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ai-collaboration.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-accent">
                <Zap className="h-4 w-4" />
                <span>AI-Powered Business Optimization</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Augment Human
                </span>
                <br />
                <span className="text-foreground">Intelligence with AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                HumindAI helps companies reduce expenses and optimize operations by implementing 
                AI-powered workflows tailored to each business. We enhance human work, never replace it.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3x</div>
                <div className="text-sm text-muted-foreground">Faster Workflows</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">500+</div>
                <div className="text-sm text-muted-foreground">Processes Optimized</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative">
              <img src={heroImage} alt="AI-Human Collaboration" className="w-full h-auto rounded-2xl shadow-elegant" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">AI Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 animate-float" style={{
              animationDelay: '1.5s'
            }}>
                <div className="text-xs font-medium text-accent">Efficiency: +247%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;