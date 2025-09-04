import About from "@/ui/About";
import Contacts from "@/ui/Contacts";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Hero from "@/ui/Hero";
import Masters from "@/ui/Masters";
import Services from "@/ui/Services";

export default function Home() {
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
