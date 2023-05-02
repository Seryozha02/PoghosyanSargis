import "./TwoPointTwo.css"
import image21 from "../images/image21.png";
import image22 from "../images/image22.png";
import image23 from "../images/image23.png";
import image24 from "../images/image24.png";



function TwoPointTwo() {
  return (
    <div>
      <p style={{ fontWeight: "bold", textAlign: "center" }}>ԳԼՈՒԽ 2</p>
      <h3 style={{ textAlign: "center" }}>
        Միջին դպրոցում եռանկյունների նմանություն թեմայի կիրառումն ու ուսուցումը
      </h3>
      <br />
      <div className="secondPage">
        <text className="textsForSecondPage">
          <h4>
            2.2 Առաջադրված նմանատիպ խնդիրներ, հարցեր, տեսական և գործնական
            գիտելիքների ամրապնդման համար
          </h4>
          <br />
          <img src={image21} alt="" />
          <hr style={{ height: "5px", backgroundColor: "black" }}></hr>
          <br />
          <img src={image22} alt="" />
          <hr style={{ height: "5px", backgroundColor: "black" }}></hr>
          <br />
          <img src={image23} alt="" />
          <hr style={{ height: "5px", backgroundColor: "black" }}></hr>
          <br />
          <img src={image24} alt="" />
          <br />
        </text>
        <br />
        <text className="textsForSecondPage">
          <p>
            <b> Երկրորդ գլխի ամփոփում</b>
          </p>
          <br />
          Երկրորդ գլխում ուսումնասիրվել է եռանկյունների նմանություն թեմայի
          վերաբերյալ առավել կարևոր պարզ և բարդ խնդիրներ, դրանց տարբեր տիպերը և
          տրվել են մանրամասն լուծումներ, կողմնորոշիչ մեթոդական ցուցումներ:
          Առաջադրվել են նմանատիպ տեսական և գործնական նշանակություն ունեցող
          խնդիրներ՝ ինքնուրույն աշխատանքի համար:
        </text>
      </div>
    </div>
  );
}

export default TwoPointTwo;
