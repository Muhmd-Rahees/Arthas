import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [activeCheck, setActiveCheck] = useState(false);

  const handleClick = (index) => {
    setActiveCheck(index === activeCheck ? false : index);
  };

  return (
    <div className="root_div">
      <div className="root_content">
        <div className="header_left">
          A<span className="header_left__section">RTHAS</span>
        </div>
        <div className="header_right">
          <ul className="ul">
            {["About  ", "Pricing  ", "Support  "].map((data, index) => (
              <li
                className={`list ${activeCheck === index ? "active" : ""}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {data}
                <span className="drop-down-arrow">
                    {activeCheck === index ? <IoIosArrowDown/> : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
