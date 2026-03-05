import Header from "@/components/marketplace/Header";
import Footer from "@/components/marketplace/Footer";
import AnimatedBackground from "@/components/marketplace/AnimatedBackground";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-background relative">
    <AnimatedBackground />
    <div className="relative z-10">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

export default PageLayout;
