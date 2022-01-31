import { Dropdown, Menu, Space } from "antd";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".header");
  let navLinks = document.querySelectorAll(".nav-link");
  let navAntd = document.querySelector(".nav-link-ant");
  let headerNav = document.querySelector(".header-nav");
  if (window.scrollY > 60) {
    navbarFixed.classList.add("header--sticky");
    navLinks.forEach((link) => {
      link.classList.add("nav-link--scroll");
    });
    navAntd.style.cssText = "color:black";
    navAntd.onmouseover = function () {
      navAntd.style.color = "rgb(5 104 59)";
    };
    navAntd.onmouseout = function () {
      navAntd.style.color = "black";
    };
    if (window.innerWidth < 768) headerNav.style.backgroundColor = "white";
  } else {
    navbarFixed.classList.remove("header--sticky");
    navLinks.forEach((link) => {
      link.classList.remove("nav-link--scroll");
    });
    navAntd.style.cssText = "color:white;";
    navAntd.onmouseover = function () {
      navAntd.style.color = "rgba(255, 255, 255, 0.7)";
    };
    navAntd.onmouseout = function () {
      navAntd.style.color = "white";
    };
    headerNav.style.backgroundColor = "transparent";
  }
};

const menu = (
  <Menu
    style={{
      backgroundColor: "white",
      borderRadius: "6px",
      padding: "10px 3px",
    }}
  >
    <Menu.Item key="0">
      <NavLink
        rel="noopener noreferrer"
        style={{
          fontWeight: "bold",
          borderRadius: "10px",
        }}
        to="/apartment"
      >
        Căn hộ cho thuê
      </NavLink>
    </Menu.Item>
    <Menu.Item key="1">
      <NavLink
        rel="noopener noreferrer"
        style={{
          fontWeight: "bold",
        }}
        to="/yoga"
      >
        Yoga
      </NavLink>
    </Menu.Item>
  </Menu>
);

function Header(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [layout, setLayout] = useState(window.innerWidth < 768 ? true : false);
  useEffect(() => {
    window.onload = () => {
      setNavbarOpen(false);
      window.innerWidth < 768 ? setLayout(true) : setLayout(false);
    };
    window.onresize = () => {
      setNavbarOpen(false);
      window.innerWidth < 768 ? setLayout(true) : setLayout(false);
    };
  }, [navbarOpen, layout]);
  return (
    <header className={"header py-5 transition-all duration-300 ease-out "}>
      <NavLink to="/" id="logo" className=" left-16 md:left-1/2">
        <img src="https://d2652gz3oy7d9s.cloudfront.net/Logo/july.png" alt="" />
      </NavLink>
      <div
        className="relative flex justify-end md:w-auto md:static md:block md:justify-start"
        style={navbarOpen ? { flexBasis: "60vw" } : {}}
      >
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i
            className={
              "fas fa-bars text-gray-900" + (navbarOpen ? " hidden" : " block")
            }
          ></i>
          <i
            className={
              "fas fa-times text-gray-900" + (navbarOpen ? " block" : " hidden")
            }
          ></i>
        </button>
      </div>
      <div
        className={
          "mx-auto w-full rounded-b-lg md:block" +
          (navbarOpen ? " shadow-lg rounded-b-lg block" : " hidden")
        }
      >
        <nav
          className={
            "header-nav grid mt-5 z-20 md:mt-0 grid-cols-1 md:grid-cols-5 lg:px-24 xl:px-44 place-items-center w-full" +
            (navbarOpen ? " shadow-lg rounded-b-lg " : " ") +
            (layout && navbarOpen ? " backdrop-blur-sm" : "")
          }
        >
          <NavLink to="/" className="nav-link col-span-1">
            Trang chủ
          </NavLink>
          <a className="nav-link col-span-1">Về chúng tôi</a>
          <a className=" col-span-1"></a>
          <Space direction="vertical" className=" col-span-1">
            <Space wrap>
              <Dropdown
                overlay={menu}
                placement="bottomCenter"
                // trigger={["click"]}
                arrow={["true"]}
              >
                <a className=" nav-link-ant">Dịch vụ</a>
              </Dropdown>
            </Space>
          </Space>
          <a className="nav-link col-span-1">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);
