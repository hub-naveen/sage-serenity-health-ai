
import React from "react";
import DoctorLayout from "@/components/layout/DoctorLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Clipboard, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Doctor = () => {
  const doctorModules = [
    {
      title: "Patient Management",
      description: "View and manage your patients",
      icon: <Users className="h-6 w-6 text-primary" />,
      link: "/doctor/patients",
      count: 48
    },
    {
      title: "Medical Reports",
      description: "Access and create patient reports",
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: "/doctor/reports",
      count: 124
    },
    {
      title: "Treatment Plans",
      description: "Create and monitor treatment plans",
      icon: <Clipboard className="h-6 w-6 text-primary" />,
      link: "/doctor/treatment-plans",
      count: 36
    },
    {
      title: "Appointments",
      description: "Manage your schedule and appointments",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      link: "/doctor/appointments",
      count: 12
    },
    {
      title: "Messages",
      description: "Patient communications and queries",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      link: "/doctor/messages",
      count: 8
    },
  ];

  const upcomingAppointments = [
    { patient: "Sarah Johnson", time: "Today, 10:00 AM", reason: "Follow-up Consultation" },
    { patient: "Michael Smith", time: "Today, 11:30 AM", reason: "Initial Assessment" },
    { patient: "Emma Davis", time: "Today, 2:15 PM", reason: "Treatment Review" },
    { patient: "David Wilson", time: "Tomorrow, 9:00 AM", reason: "Lab Results Discussion" },
  ];

  return (
    <DoctorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Dr. Navin. Manage your patients and appointments.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Patients</CardTitle>
              <CardDescription>Under your care</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">48</div>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-500">+3</span> new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Today's Appointments</CardTitle>
              <CardDescription>Scheduled consultations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Next: 10:00 AM</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Pending Reports</CardTitle>
              <CardDescription>Requiring review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7</div>
              <p className="text-sm text-muted-foreground">
                <span className="text-amber-500">2 urgent</span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>New Messages</CardTitle>
              <CardDescription>Unread patient queries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
              <p className="text-sm text-muted-foreground">From 3 patients</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Doctor's Tools</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {doctorModules.map((module, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  {module.icon}
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {module.count !== null && (
                  <div className="text-2xl font-bold">{module.count}</div>
                )}
                <Button asChild className="w-full">
                  <Link to={module.link}>Access</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your schedule for the next days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{appointment.patient}</p>
                      <p className="text-sm text-muted-foreground">{appointment.reason}</p>
                    </div>
                    <div className="text-sm text-right">
                      <p>{appointment.time}</p>
                      <Button variant="ghost" size="sm" className="mt-1">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cream dark:bg-accent/20 border-none">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">New Appointment</Button>
              <Button variant="outline" className="w-full">Create Report</Button>
              <Button variant="secondary" className="w-full">Message Patient</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DoctorLayout>
  );
};

export default Doctor;
