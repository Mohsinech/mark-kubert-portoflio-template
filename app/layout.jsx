"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import "@/styles/globals.css";
import { Footer, Header } from "@/components/layouts";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

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

  return (
    <html lang="en">
      <head>
        {/* Change the title with your actual name & slug */}
        <title>Mark Kubert — Creative web developer</title>
        {/* change Favicon src, find: `/public/favicon.ico` */}
        <link rel="icon" type="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="I'm Mark Kuber, a freelance web developer. Check out this modern, responsive portfolio template built with Next.js, Tailwind CSS, and Lenis for smooth scrolling. Perfect for creative professionals looking to showcase their work online."
        />
      </head>
      <body>
        <>
          <Header lenisRef={lenisRef} />
          {children}
          <Footer lenisRef={lenisRef} />
        </>
      </body>
    </html>
  );
}
