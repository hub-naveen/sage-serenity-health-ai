
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">HealthMama</h4>
            <p className="text-sm text-muted-foreground">
              AI-powered health & fitness platform for your wellness journey
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/risk-predictor" className="hover:text-primary transition-colors">
                  Risk Predictor
                </Link>
              </li>
              <li>
                <Link to="/trainer" className="hover:text-primary transition-colors">
                  Personal Trainer
                </Link>
              </li>
              <li>
                <Link to="/diet-planner" className="hover:text-primary transition-colors">
                  Diet Planner
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="hover:text-primary transition-colors">
                  Health Assistant
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-4">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} HealthMama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
