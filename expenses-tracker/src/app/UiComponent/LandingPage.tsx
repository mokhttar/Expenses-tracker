import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import PaymentPlan from "./PaymentPlan";
function LandingPage() {
  return (
    <div className=" overflow-hidden">
      <HeroSection />
      <section className="mt-20">
        <AboutUs />
      </section>
      <section className="py-10">
        <PaymentPlan />
      </section>
    </div>
  );
}

export default LandingPage;
