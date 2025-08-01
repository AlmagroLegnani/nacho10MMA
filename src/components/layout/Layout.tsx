import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen p flex flex-col bg-zinc-950 text-white py-7">
      <Header  />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}