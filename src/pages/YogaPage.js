import React from "react";
import AboutYoga from "../components/AboutYoga/AboutYoga";
import Certificate from "../components/Certificate/Certificate";
import Statistics from "../components/Statistics/Statistics";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import YogaCarousel from "../components/YogaCarousel/YogaCarousel";

export default function YogaPage() {
  return (
    <>
      <YogaCarousel />
      <AboutYoga />
      <WhyChooseUs />
      <Statistics />
      <Certificate />
    </>
  );
}
