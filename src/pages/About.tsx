
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Chief Medical Officer",
      bio: "Board-certified physician with 15+ years of experience in preventive medicine.",
    },
    {
      name: "Alex Johnson",
      role: "AI Research Lead",
      bio: "PhD in Machine Learning with focus on healthcare applications and predictive analytics.",
    },
    {
      name: "Sarah Williams",
      role: "Nutrition Specialist",
      bio: "Registered dietitian specializing in personalized nutrition plans and dietary assessments.",
    },
    {
      name: "Michael Chen",
      role: "Fitness Expert",
      bio: "Certified personal trainer with expertise in developing personalized workout programs.",
    },
  ];

  return (
    <MainLayout>
      <section className="py-16 px-4 bg-cream dark:bg-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About HealthMama</h1>
            <p className="text-lg mb-8">
              HealthMama is an AI-powered health and fitness platform dedicated to
              providing personalized wellness guidance and support to help you achieve
              your health goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              HealthMama was founded with a simple but powerful mission: to make
              personalized healthcare accessible to everyone through the power of
              artificial intelligence.
            </p>
            <p className="mb-6">
              We believe that everyone deserves access to high-quality health guidance
              that's tailored to their unique needs, goals, and circumstances. By
              combining advanced AI technology with evidence-based medical knowledge,
              we're making that vision a reality.
            </p>
            <p>
              Our platform analyzes your health data to provide customized
              recommendations, predict potential health risks, and guide you on your
              journey to better health.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary via-accent to-pink rounded-lg"></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background border-t border-b">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="h-24 w-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-center text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Technology
          </h2>
          <p className="text-lg mb-8 text-center">
            HealthMama leverages cutting-edge AI and machine learning to provide
            personalized health guidance.
          </p>

          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Risk Prediction</h3>
              <p>
                Our advanced algorithms analyze your health data to identify potential
                health risks and provide preventive recommendations tailored to your
                specific profile.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Personalized Fitness & Nutrition</h3>
              <p>
                We generate customized workout and meal plans based on your goals,
                preferences, and health status, adapting as your needs change.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Secure Health Records</h3>
              <p>
                Your health data is stored securely using blockchain technology,
                ensuring privacy while allowing seamless integration with healthcare
                providers when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Health?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of users who are already benefiting from HealthMama's
            personalized health guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/auth">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
