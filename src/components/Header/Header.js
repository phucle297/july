import { isVisible } from "@testing-library/user-event/dist/utils";
import { Dropdown, Menu, Space } from "antd";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const menu = (
  <Menu style={{ backgroundColor: "#f4ede6" }}>
    <Menu.Item key="0">
      <NavLink
        rel="noopener noreferrer"
        style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "1rem",
          fontWeight: "bold",
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
          fontFamily: "'EB Garamond', serif",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        to="/yoga"
      >
        Yoga
      </NavLink>
    </Menu.Item>
  </Menu>
);

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [layout, setLayout] = useState(false);
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
    <header className="header py-5 transition-all duration-300 ease-out shadow-xl">
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
          <i className="fas fa-bars text-gray-900"></i>
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
            "grid mt-5 z-20 md:mt-0 grid-cols-1 md:grid-cols-5 lg:px-24 xl:px-44 place-items-center w-full" +
            (navbarOpen ? " shadow-lg rounded-b-lg " : " ")
          }
          style={{ backgroundColor: "#f4ede6" }}
        >
          <NavLink to="/" className="nav-link col-span-1">
            Trang chủ
          </NavLink>
          <a className="nav-link col-span-1">Về chúng tôi</a>
          <a className=" col-span-1"></a>
          <Space direction="vertical" className="nav-link col-span-1">
            <Space wrap>
              <Dropdown overlay={menu} placement="bottomCenter">
                <a className="">Dịch vụ</a>
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
