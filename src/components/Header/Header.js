import React, { memo } from "react";
import { Menu, Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";
import "./Header.css";
const menu = (
  <Menu>
    <Menu.Item key="1">
      <NavLink
        to="/apartment"
        rel="noopener noreferrer"
        className="header-nav-link text-sm"
      >
        Căn hộ cho thuê
      </NavLink>
    </Menu.Item>
    <Menu.Item key="2">
      <NavLink
        to="/yoga"
        rel="noopener noreferrer"
        className="header-nav-link text-sm"
      >
        Yoga
      </NavLink>
    </Menu.Item>
  </Menu>
);

function Header() {
  const [mobile, setMobile] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
      setVisible(false);
    } else {
      setMobile(false);
      setVisible(true);
    }
    window.onresize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
        setVisible(false);
      } else {
        setMobile(false);
        setVisible(true);
      }
    };
  }, [window.innnerWidth]);
  return (
    <header className="header py-5">
      <NavLink to="/" id="logo" className={mobile ? "logo-mobile" : ""}>
        <img src="https://d2652gz3oy7d9s.cloudfront.net/Logo/july.png" alt="" />
      </NavLink>
      <div className="container mx-auto bg-white w-full rounded-b-lg">
        <nav
          className={
            "grid mt-10 md:mt-0 grid-cols-1 md:grid-cols-5 lg:px-24 xl:px-44 place-items-center" +
            (visible ? " visible" : " hidden")
          }
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
        <button className="controller" onClick={() => setVisible(!visible)}>
          <i
            className={"fa fa-bars bars" + (visible ? " hidden" : " visible")}
          ></i>
          <i
            className={"fa fa-times times" + (visible ? " visible" : " hidden")}
          ></i>
        </button>
      </div>
    </header>
  );
}

export default memo(Header);
