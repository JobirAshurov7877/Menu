import "./Header.scss";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <ul className="navlist">
        <li>
          <a href="" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Pages
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Portfoilo
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Blog
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Shop
          </a>
        </li>
      </ul>
      <div className="navbar_toggle_btn" onClick={()=>setShowSidebar(true)}>
        <HiOutlineBars3BottomRight />
      </div>
      <div className={`sideBar ${showSidebar ? "showSidebar" : ""}`}>
        <div className="sideBar-wrap">
          <div className="close-menu">
            <AiOutlineClose className="close-icon"  onClick={()=>setShowSidebar(false)}/>
          </div>
          <div className="logo">Logo</div>
          <div className="info">
            <p>
              Laurent Fine dining,
              <br />
              <a
                href="https://www.google.com/maps/place/Iron+Chef+House/@40.6988193,-73.9964619,17z/data=!4m13!1m7!3m6!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNew+York,+NY,+USA!3b1!8m2!3d40.7127753!4d-74.0059728!3m4!1s0x89c25a37d80442e1:0x191a68ea3b55b3b7!8m2!3d40.6972497!4d-73.9926215?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                107 Duncan Avenue, New York
              </a>
              <br />
              <a href="tel:914-309-7030"> 914-309-7030, </a>
              <br />
              Open: 09:00 am – 01:00 pm
            </p>
          </div>
          <div className="side-bar-link">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Trip Advisor</a>
          </div>
        </div>
      </div>
      <div className="line-top"></div>
    </div>
  );
};

export default Header;
