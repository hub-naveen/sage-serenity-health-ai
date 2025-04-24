
import React from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Database, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const adminModules = [
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      icon: <Users className="h-6 w-6 text-primary" />,
      link: "/admin/users",
      count: 1254
    },
    {
      title: "Content Management",
      description: "Manage platform content and resources",
      icon: <Database className="h-6 w-6 text-primary" />,
      link: "/admin/content",
      count: 86
    },
    {
      title: "Role Management",
      description: "Manage user roles and permissions",
      icon: <Shield className="h-6 w-6 text-primary" />,
      link: "/admin/permissions",
      count: 3
    },
    {
      title: "System Settings",
      description: "Configure system settings and preferences",
      icon: <Settings className="h-6 w-6 text-primary" />,
      link: "/admin/settings",
      count: null
    },
  ];

  const recentActivities = [
    { user: "Dr. Johnson", action: "Updated patient record", time: "2 hours ago" },
    { user: "Admin", action: "Added new health module", time: "1 day ago" },
    { user: "Dr. Smith", action: "Created new treatment plan", time: "2 days ago" },
    { user: "System", action: "Backup completed", time: "3 days ago" },
    { user: "Admin", action: "Updated system settings", time: "5 days ago" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Admin. Manage your platform from here.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Users</CardTitle>
              <CardDescription>Platform registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,254</div>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-500">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Active Doctors</CardTitle>
              <CardDescription>Registered healthcare providers</CardDescription>
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
              <CardTitle>Health Modules</CardTitle>
              <CardDescription>Active platform features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">6</div>
              <p className="text-sm text-muted-foreground">All modules active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>System Status</CardTitle>
              <CardDescription>Platform health</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <div className="text-xl font-medium">Operational</div>
              </div>
              <p className="text-sm text-muted-foreground">All systems normal</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Administration Modules</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {adminModules.map((module, index) => (
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
                  <Link to={module.link}>Manage</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system events and user actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
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
              <Button className="w-full">Add New User</Button>
              <Button variant="outline" className="w-full">System Backup</Button>
              <Button variant="secondary" className="w-full">View Reports</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
