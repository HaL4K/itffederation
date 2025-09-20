"use client";

import About from "@/ui/About";
import Contacts from "@/ui/Contacts";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Hero from "@/ui/Hero";
import Masters from "@/ui/Masters";
import Services from "@/ui/Services";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false, easing: "ease-out-cubic" });
  });
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Masters />
      <Contacts />
      <Footer />
    </>
  );
}
