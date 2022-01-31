import React from "react";
import AboutYoga from "../components/AboutYoga/AboutYoga";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import YogaCarousel from "../components/YogaCarousel/YogaCarousel";

export default function YogaPage() {
  return (
    <>
      <YogaCarousel />
      <AboutYoga />
      <WhyChooseUs />
    </>
  );
}
