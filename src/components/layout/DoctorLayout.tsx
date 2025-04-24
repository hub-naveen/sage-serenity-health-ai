
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { 
  Home, 
  Settings, 
  Users, 
  FileText, 
  MessageSquare, 
  Calendar,
  Clipboard,
  LogOut, 
  Menu, 
  X
} from "lucide-react";

interface DoctorLayoutProps {
  children: React.ReactNode;
}

const DoctorLayout: React.FC<DoctorLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: "Dashboard", href: "/doctor", icon: Home },
    { name: "Patients", href: "/doctor/patients", icon: Users },
    { name: "Reports", href: "/doctor/reports", icon: FileText },
    { name: "Treatment Plans", href: "/doctor/treatment-plans", icon: Clipboard },
    { name: "Appointments", href: "/doctor/appointments", icon: Calendar },
    { name: "Messages", href: "/doctor/messages", icon: MessageSquare },
    { name: "Settings", href: "/doctor/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Sidebar for desktop */}
      <aside 
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full px-4 py-4">
          <div className="mb-8 flex justify-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent health-mama-gradient">
                HealthMama
              </span>
              <span className="ml-2 px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                DOCTOR
              </span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              const IconComponent = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-md group transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className={`mr-3 h-5 w-5 ${isActive ? "text-primary-foreground" : ""}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center px-2 py-2">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <Users className="h-4 w-4 text-accent-foreground" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Doctor User</p>
                <p className="text-xs text-muted-foreground">itzmenavin07@gmail.com</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start mt-2 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
