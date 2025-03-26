"use client";

import "@/styles/globals.css";
import { Footer, Header } from "@/components/layouts";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const DURATION = 1;
const DELAY = 1;

export default function RootLayout({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.01,
      duration: 3,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", (e) => {
      console.log("Scroll event:", e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

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
        <AnimatePresence mode="popLayout">
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION,
              ease: [0.87, 0.13, 0, 1],
              delay: DELAY,
            }}
          >
            <Header />
            {children}
            <Footer />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
