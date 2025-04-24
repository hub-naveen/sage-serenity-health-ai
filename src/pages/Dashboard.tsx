
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, MessageSquare, FileText, Scan, Clipboard } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const healthModules = [
    {
      title: "Risk Predictor",
      description: "Analyze your health risks based on your data",
      icon: <Activity className="h-6 w-6 text-primary" />,
      link: "/risk-predictor"
    },
    {
      title: "Personal Trainer",
      description: "Get customized workout plans",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      link: "/trainer"
    },
    {
      title: "Diet Planner",
      description: "Personalized nutrition recommendations",
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: "/diet-planner"
    },
    {
      title: "Health Assistant",
      description: "Chat with our AI health assistant",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      link: "/chatbot"
    },
    {
      title: "OCR Scanner",
      description: "Scan and analyze medical documents",
      icon: <Scan className="h-6 w-6 text-primary" />,
      link: "/ocr-scanner"
    },
    {
      title: "Health Records",
      description: "Access and manage your health records",
      icon: <Clipboard className="h-6 w-6 text-primary" />,
      link: "/records"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome to your Health Dashboard</h1>
          <p className="text-muted-foreground">
            Track your health metrics and access personalized wellness tools.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Health Score</CardTitle>
              <CardDescription>Your current wellness rating</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-4">
                <div className="h-24 w-24 rounded-full border-8 border-primary flex items-center justify-center">
                  <span className="text-2xl font-bold">82</span>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground">Good condition</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Activity Streak</CardTitle>
              <CardDescription>Days of consecutive activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-4">
                <div className="h-24 w-24 rounded-full border-8 border-accent flex items-center justify-center">
                  <span className="text-2xl font-bold">14</span>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Next Check-up</CardTitle>
              <CardDescription>Scheduled appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-4">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <p className="font-medium">May 15, 2025</p>
                <p className="text-sm text-muted-foreground">10:30 AM</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Health Modules</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {healthModules.map((module, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  {module.icon}
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={module.link}>Access {module.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-cream dark:bg-accent/20 border-none">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Need Professional Advice?</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with healthcare professionals for personalized guidance.
                </p>
                <Button variant="default">Find a Doctor</Button>
              </div>
              <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageSquare className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
