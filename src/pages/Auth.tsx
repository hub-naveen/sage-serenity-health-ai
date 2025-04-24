
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, mode: "login" | "register") => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);

      // For demonstration purposes only
      if (mode === "login") {
        const email = (event.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

        if (email === "personalaccdinesh@gmail.com") {
          toast({
            title: "Admin Login Success",
            description: "Redirecting to admin dashboard...",
          });
          // Redirect would happen here
        } else if (email === "itzmenavin07@gmail.com") {
          toast({
            title: "Doctor Login Success",
            description: "Redirecting to doctor dashboard...",
          });
          // Redirect would happen here
        } else {
          toast({
            title: "User Login Success",
            description: "Redirecting to dashboard...",
          });
          // Redirect would happen here
        }
      } else {
        toast({
          title: "Registration Successful",
          description: "Please check your email to complete registration.",
        });
      }
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container max-w-md mx-auto py-12">
        <div className="space-y-6 bg-card p-8 rounded-lg shadow-sm border">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome to HealthMama</h1>
            <p className="text-muted-foreground">
              Sign in to your account or create a new one
            </p>
          </div>

          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-6">
              <form onSubmit={(e) => handleSubmit(e, "login")}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="text-sm text-primary underline-offset-4 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
              <div className="text-center text-sm">
                <p className="text-muted-foreground">
                  Demo Accounts
                </p>
                <p className="text-xs text-muted-foreground">
                  Admin: personalaccdinesh@gmail.com / admin@1234
                </p>
                <p className="text-xs text-muted-foreground">
                  Doctor: itzmenavin07@gmail.com / doctor@1234
                </p>
              </div>
            </TabsContent>

            <TabsContent value="register" className="space-y-6">
              <form onSubmit={(e) => handleSubmit(e, "register")}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      required
                      autoComplete="new-password"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-primary underline-offset-4 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Auth;
