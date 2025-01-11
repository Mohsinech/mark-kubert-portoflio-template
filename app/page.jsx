import {
  About,
  Expertise,
  Hero,
  Services,
  Testimonials,
  Work,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Expertise />
      <Services />
      <Testimonials />
    </main>
  );
}
