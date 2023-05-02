import { theoreticalMaterials } from "./NavItems.jsx";
import "./DropDownthtc.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function DropDownthtc() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <ul
        className={
          dropDown ? "allTheoreticalMaterialsClicked" : "allTheoreticalMaterials"
        }
        onClick={() => setDropDown(!dropDown)}
      >
        {theoreticalMaterials.map((item) => {
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

export default DropDownthtc;
