import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Courses from "@/components/course/Courses";
import Teachers from "@/components/teachers/Teachers";
import Result from "@/components/result/Result";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import Order from "@/components/order/Order";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Cookie from "@/components/cookie/Cookie";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Result />
      <Testimonials />
      <FAQ />
      <Order />
      <Contact />
      <Footer />
      <Cookie />
    </>
  );
}