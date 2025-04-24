
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/ui/hero-section";
import CardFeature from "@/components/ui/card-feature";
import { Activity, Calendar, MessageSquare, FileText, Scan, Clipboard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "Risk Predictor",
      description: "AI-powered health risk assessment based on your personal data and medical history.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Personal Trainer",
      description: "Customized workout plans tailored to your fitness level, goals, and preferences.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Diet Planner",
      description: "Personalized nutrition plans that help you achieve your health and wellness goals.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Health Assistant",
      description: "24/7 AI chatbot providing instant health advice and answering your questions.",
    },
    {
      icon: <Scan className="h-8 w-8 text-primary" />,
      title: "OCR Scanner",
      description: "Scan and analyze prescriptions and medical reports for easy digital storage.",
    },
    {
      icon: <Clipboard className="h-8 w-8 text-primary" />,
      title: "Health Records",
      description: "Secure storage and management of all your medical records in one place.",
    },
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Your AI Health Partner for a Better Tomorrow"
        subtitle="HealthMama combines advanced AI technology with health expertise to provide personalized wellness guidance."
        primaryButtonText="Get Started"
        primaryButtonLink="/auth"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        className="bg-cream dark:bg-accent/20"
      />

      <section className="py-16 px-4 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover all the ways HealthMama can help you achieve your health and wellness goals with our AI-powered platform.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <CardFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-slide-in"
              style={{animationDelay: `${index * 0.1}s`}}
            />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Personalized Health Guidance</h2>
              <p className="text-muted-foreground mb-6">
                Our AI system analyzes your health data to provide tailored recommendations for diet, exercise, and lifestyle changes that can improve your overall wellness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-6 w-6 mr-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                  <span>Personalized health assessments</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 mr-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                  <span>AI-powered risk prediction</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 mr-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                  <span>Secure health data storage</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 mr-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                  <span>Connect with qualified doctors</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/auth">Join HealthMama</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary via-accent to-pink rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span className="text-xl font-bold">Coming Soon: AI Health Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple steps to get started with HealthMama and take control of your health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
            <p className="text-muted-foreground">Sign up and complete your health profile with basic information.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Get Personalized Plan</h3>
            <p className="text-muted-foreground">Our AI analyzes your data and creates customized health recommendations.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
            <p className="text-muted-foreground">Monitor your health improvements and adjust your plan as needed.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Health Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join thousands of users who have already improved their health with HealthMama's AI-powered guidance.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/auth">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
