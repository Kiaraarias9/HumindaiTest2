import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Chen",
    role: "CEO, Metro Realty Group",
    company: "Metro Realty",
    content: "HumindAI transformed our lead qualification process. We're now processing 3x more leads with the same team size, and our conversion rates have increased by 45%.",
    rating: 5,
    avatar: "SC",
    stats: {
      metric: "Lead Processing",
      improvement: "+300%"
    }
  }, {
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "Pinnacle Properties",
    content: "The workflow automation they implemented saves us 20 hours per week on administrative tasks. Our agents can now focus on what they do best - closing deals.",
    rating: 5,
    avatar: "MR",
    stats: {
      metric: "Time Saved",
      improvement: "20 hrs/week"
    }
  }, {
    name: "Jessica Wang",
    role: "Managing Partner",
    company: "Elite Real Estate",
    content: "Their AI assistant handles our initial client inquiries flawlessly. Response times improved from hours to minutes, and client satisfaction is at an all-time high.",
    rating: 5,
    avatar: "JW",
    stats: {
      metric: "Response Time",
      improvement: "98% faster"
    }
  }, {
    name: "David Thompson",
    role: "CTO, PropertyFlow",
    company: "PropertyFlow",
    content: "The integration was seamless and the support exceptional. HumindAI didn't just implement technology - they revolutionized how we operate.",
    rating: 5,
    avatar: "DT",
    stats: {
      metric: "Efficiency Gain",
      improvement: "+250%"
    }
  }];
  return;
};
export default Testimonials;