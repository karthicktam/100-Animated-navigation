// Dribbble link: https://dribbble.com/shots/2427219-Header-Navigation-Day-053-dailyui -->
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [openNav, setNav] = useState(true);

  const navArr = ["Home", "Works", "About", "Contact"];

  const clickHandler = () => {
    setNav(!openNav);
  };

  return (
    <nav className={openNav ? "active" : ""}>
      <ul>
        {navArr.map((el) => (
          <li key={el}>
            <p>{el}</p>
          </li>
        ))}
      </ul>
      <button className="icon" onClick={clickHandler}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
}
