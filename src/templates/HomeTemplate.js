import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { DONE_LOADING, START_LOADING } from "../redux/types/LoadingType";

export default function HomeTemplate(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "July";
    setTimeout(() => {
      dispatch({ type: DONE_LOADING });
    }, 1000);
    dispatch({ type: START_LOADING });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
