import React from "react";
import AboutYoga from "../components/AboutYoga/AboutYoga";
import Trainer from "../components/Trainer/Trainer";
import YogaCarousel from "../components/YogaCarousel/YogaCarousel";

export default function YogaPage() {
  return (
    <>
      <YogaCarousel />
      <AboutYoga />
      <Trainer />
    </>
  );
}
