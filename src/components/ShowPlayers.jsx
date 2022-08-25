import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function ShowPlayers() {
  const [ListPlayerDetails, setListPlayerDetails] = React.useState([]);
  const [search, setsearch] = React.useState("");
  const [T11, setT11] = React.useState(0);
  const [T12, setT12] = React.useState(0);
  const [T21, setT21] = React.useState(0);
  const [T22, setT22] = React.useState(0);
  const [T31, setT31] = React.useState(0);
  const [T32, setT32] = React.useState(0);
  const [T41, setT41] = React.useState(0);
  const [T42, setT42] = React.useState(0);

  const getPlayers = () => {
    const playersRef = collection(db, "Players");
    getDocs(playersRef)
      .then((response) => {
        let temp11 = 0;
        let temp12 = 0;
        let temp21 = 0;
        let temp22 = 0;
        let temp31 = 0;
        let temp32 = 0;
        let temp41 = 0;
        let temp42 = 0;

        const players = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        players.forEach((value) => {
          if (value.data.Teamname === "Mangalaseri ASURAS") {
            temp11 += 1;
            temp12 += value.data.Amount;
          } else if (value.data.Teamname === "EAGLES") {
            temp21 += 1;
            temp22 += value.data.Amount;
          } else if (value.data.Teamname === "WarriorZ") {
            temp31 += 1;
            temp32 += value.data.Amount;
          } else if (value.data.Teamname === "Garage Strikers") {
            temp41 += 1;
            temp42 += value.data.Amount;
          }
        });
        setT11(temp11);
        setT12(100 - temp12);
        setT21(temp21);
        setT22(100 - temp22);
        setT31(temp31);
        setT32(100 - temp32);
        setT41(temp41);
        setT42(100 - temp42);
        setListPlayerDetails(players);
        console.log(players);
      })
      .catch((error) => console.log(error.message));
  };

  React.useEffect(() => {
    // getPlayers();
    // setInterval(() => {
    //   getPlayers();
    // }, 50000);
    getPlayers();
    setInterval(() => {
      getPlayers();
    }, 10000);
  }, []);

  return (
    <div className="playerdetailsmainwrapper">
      {/* <h4 className="playerdetailstitle">Player Details</h4> */}
      <div className="playersearchbox">
        <input
          type="text"
          className="searchplayertext"
          placeholder="Enter Player name"
          onChange={(e) => setsearch(e.currentTarget.value)}
        />
        <button className="searchbutton">Search</button>
      </div>
      <h4 className="playerdetailstitle">CAPTAINS</h4>
      <div className="playercardmainbox">
        {ListPlayerDetails.map((value) => {
          return (
            value.data.Grade === "Captain" && (
              <div className="cardBox">
                {/* <img src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img src={value.data.Image} alt={""} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  Team Name: {value.data.Teamname}
                  <br></br>
                  {value.data.Teamname === "Mangalaseri ASURAS" && (
                    <>
                      No of players selected: {T11}
                      <br></br>
                      <span className="amountvalue">Balance Amount: {T12}</span>
                    </>
                  )}
                  {value.data.Teamname === "EAGLES" && (
                    <>
                      No of players selected: {T21}
                      <br></br>
                      <span className="amountvalue">Balance Amount: {T22}</span>
                    </>
                  )}
                  {value.data.Teamname === "WarriorZ" && (
                    <>
                      No of players selected: {T31}
                      <br></br>
                      <span className="amountvalue">Balance Amount: {T32}</span>
                    </>
                  )}
                  {value.data.Teamname === "Garage Strikers" && (
                    <>
                      No of players selected: {T41}
                      <br></br>
                      <span className="amountvalue">Balance Amount: {T42}</span>
                    </>
                  )}
                </div>
              </div>
            )
          );
        })}
      </div>
      <h4 className="playerdetailstitle">PLAYER DETAILS</h4>
      <div className="playercardmainbox">
        {ListPlayerDetails.map((value) => {
          return (
            value.data.Name.includes(search) &&
            value.data.Teamname === "" && (
              <div className="cardBox">
                <div className="cardImageWrapper">
                  <img src={value.data.Image} alt={""} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  Strength: {value.data.Position}
                  <br></br>
                  Base Price: 5
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
