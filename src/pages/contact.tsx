import Hero from "@/module/hero";
import React from "react";
import bannerImg from "@/assets/images/contact.jpg";
import ContactForm from "@/layout/contact_us/contactForm";
import Address from "@/layout/contact_us/address";

const ContactUs = () => {
  return (
    <>
      <Hero bannerImg={bannerImg} title="<span>Contact Us</span>" />
      <ContactForm />
      <Address />
    </>
  );
};

export default ContactUs;
