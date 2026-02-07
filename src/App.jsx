import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flowcharts from "./components/Flowcharts";
import Metrics from "./components/Metrics";
import Benefits from "./components/Benefits";

import Platforms from "./components/Platforms";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import React from "react";
import react from "react";
export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Flowcharts />
      <Metrics />
      <Benefits />

      <Platforms />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
