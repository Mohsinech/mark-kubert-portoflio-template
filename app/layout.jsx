"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import "@/styles/globals.css";
import { Footer, Header } from "@/components/layouts";
import Preloader from "@/components/preloader/Preloader";
import gsap from "gsap";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  //
  useEffect(() => {
    gsap.fromTo(".next_load", { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en">
      <head>
        <title>Mark Kubert — Creative web developer</title>
        <link rel="icon" type="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="I'm Mark Kuber, a freelance web developer. Check out this modern, responsive portfolio template built with Next.js, Tailwind CSS, and Lenis for smooth scrolling. Perfect for creative professionals looking to showcase their work online."
        />
      </head>
      <body>
        {isLoading ? (
          <Preloader onComplete={handlePreloaderComplete} />
        ) : (
          <main className="next_load">
            <Header lenisRef={lenisRef} />
            {children}
            <Footer lenisRef={lenisRef} />
          </main>
        )}
      </body>
    </html>
  );
}
