import { ReactNode } from "react";

import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";

import "./MainLayout.css";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="main-container">
      <Header />
      <main className="content-container" data-testid="main-container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
