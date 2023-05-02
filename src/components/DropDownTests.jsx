import { useState } from "react";
import { Link } from "react-router-dom";
import { tests } from "./NavItems";
import "./DropDownTests.css";

function DropDownTests() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <ul
        className={
          dropDown ? "alltestsClicked" : "alltests"
        }
        onClick={() => setDropDown(!dropDown)}
      >
        {tests.map((item) => {
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

export default DropDownTests;
