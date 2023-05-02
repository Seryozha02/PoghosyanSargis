import { useState } from "react";
import { Link } from "react-router-dom";
import { practicalMaterials } from "./NavItems";
import "./DropDownPrct.css";

function DropDownPrtc() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <ul
        className={
          dropDown ? "allPracticalMaterialsClicked" : "allPracticalMaterials"
        }
        onClick={() => setDropDown(!dropDown)}
      >
        {practicalMaterials.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropDown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropDownPrtc;
