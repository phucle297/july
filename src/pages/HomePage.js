import React from "react";
import { Navigate } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";

export default function HomePage() {
  return (
    <>
      <Navigate to="/yoga" />
      <Carousel />
    </>
  );
}
