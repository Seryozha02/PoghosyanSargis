import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownPrtc from "./DropDownPrct";
import DropDownthtc from "./DropDownthtc";
import "./NavBar.css";
import { navItems } from "./NavItems.jsx";
import DropDownTests from "./DropDownTests";

function NavBar() {
  const [showingDropDown, setShowingDropDown] = useState(false);
  const [showingDropDownPrtc, setShowingDropDownPrtc] = useState(false)
  const [showingDropDownTests, setShowingDropDownTest] = useState(false)
  
  return (
    <>
      <nav className="navbar">
        <ul className="allNavItems">
          {navItems.map((item) => {
            if (item.title === "Տեսական նյութեր") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowingDropDown(true)}
                  onMouseLeave={() => setShowingDropDown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {showingDropDown && <DropDownthtc />}
                </li>
              );
            } else if (item.title === "Գործնական նյութեր") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowingDropDownPrtc(true)}
                  onMouseLeave={() => setShowingDropDownPrtc(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {showingDropDownPrtc && <DropDownPrtc />}
                </li>
              );
            }else if (item.title === "Թեստեր") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowingDropDownTest(true)}
                  onMouseLeave={() => setShowingDropDownTest(false)}
                >
                  <Link to={item.path} >{item.title}</Link>
                  {showingDropDownTests && <DropDownTests />}
                </li>
              );
            }
             else {
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
