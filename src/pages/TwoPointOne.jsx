import "./TwoPointOne.css"
import image13 from "../images/image13.png";
import image14 from "../images/image14.png";
import image15 from "../images/image15.png";
import image16 from "../images/image16.png";
import image17 from "../images/image17.png";
import image18 from "../images/image18.png";
import image19 from "../images/image19.png";
import image20 from "../images/image20.png";

function TwoPointOne() {
    return(
        <div className="phtcBg">
      <div className="secondPage">
        <h4>
          Տիպային խնդիրների լուծումներ՝ բացատրություններով, ցուցումներ:
        </h4>
        <text className="textsForSecondPage">
          <img src={image13} alt="" />
          <br />
          <hr style={{height: '5px', backgroundColor: 'black'}}></hr>
          <img src={image14} alt="" />
          <br />
          <img src={image15} alt="" />
          <br />
          <hr style={{height: '5px', backgroundColor: 'black'}}></hr>
          <img src={image16} alt="" />
          <br />
          <hr style={{height: '5px', backgroundColor: 'black'}}></hr>
          <img src={image17} alt="" />
          <br />
          <img src={image18} alt="" />
          <br />
          <hr style={{height: '5px', backgroundColor: 'black'}}></hr>
          <img src={image19} alt="" />
          <br />
          <hr style={{height: '5px', backgroundColor: 'black'}}></hr>
          <img src={image20} alt="" />
          <br />
        </text>
        </div>
        </div>

    )
}

export default TwoPointOne;