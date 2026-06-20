import Hero from "@/components/home/Hero";
import AvailableCars from "@/components/home/AvailableCars";
import WhyChoose from "@/components/home/WhyChoose";
import HowItWorks from "@/components/home/HowItWorks";
import CustomerReviews from "@/components/home/CustomerReviews";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <AvailableCars />
      <WhyChoose />
      <HowItWorks />
      <CustomerReviews />
      <FAQ />
    </>
  );
}
