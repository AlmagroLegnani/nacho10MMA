import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen p flex flex-col bg-zinc-950 text-white py-7">
      <Header  />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}