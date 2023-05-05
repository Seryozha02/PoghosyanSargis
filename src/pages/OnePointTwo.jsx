import "./OnePointTwo.css"
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import image12 from "../images/image12.png";


function OnePointTwo() {
  return (
    <div className="background">
      <div className="firstPage">
        <text className="textsForFirstPage">
          <p>
            <b>ԵՌԱՆԿՅՈՒՆՆԵՐԻ ՆՄԱՆՈՒԹՅԱՆ ԵՐԵՔ ՀԱՅՏԱՆԻՇՆԵՐ</b>
          </p>
          <br />
          <img src={image8} alt="" />
          <hr style={{ height: "5px", backgroundColor: "black" }}></hr>
          <br />
          <p>
            <b>ՆՄԱՆ ԵՌԱՆԿՅՈՒՆՆԵՐ։ ԱՌՆՉՈԻԹՅՈՒՆՆԵՐԸ ՏԱՐՐԵՐԻ ՄԻՋԵՎ</b>
          </p>
          <br />
          <img src={image9} alt="" />
          <br />
          <p>
            <b>Նշանակումները։</b>
          </p>
          <br />
          <img src={image10} alt="" />
          <hr style={{ height: "5px", backgroundColor: "black" }}></hr>
          <br />
          <img src={image11} alt="" />
          <hr style={{ height: "5px", backgroundColor: "black" }}></hr>
          <br />
          <img src={image12} alt="" />
          <br />
        </text>
        <br />
      </div>
    </div>
  );
}

export default OnePointTwo;
