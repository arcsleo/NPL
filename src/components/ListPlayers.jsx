import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";

const Asuras = require("../image/Asuras.jpeg");
const Eagles = require("../image/Eagles.jpeg");
const Garage = require("../image/Garage.jpeg");
const Warriors = require("../image/Warriors.jpeg");

export default function ListPlayers() {
  const [ListPlayerDetails, setListPlayerDetails] = React.useState([]);
  const [captains, setcaptains] = React.useState([]);

  const getPlayers = () => {
    const playersRef = collection(db, "Players");
    getDocs(playersRef)
      .then((response) => {
        const players = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        players.forEach((value) => {
          if (value.data.Teamname === "Garage Strikers") {
            value.data.Teamlogo = Garage;
          } else if (value.data.Teamname === "WarriorZ") {
            value.data.Teamlogo = Warriors;
          } else if (value.data.Teamname === "EAGLES") {
            value.data.Teamlogo = Eagles;
          } else if (value.data.Teamname === "Mangalaseri ASURAS") {
            value.data.Teamlogo = Asuras;
          }
        });
        setListPlayerDetails(players);
        console.log(players);
      })
      .catch((error) => console.log(error.message));
  };

  const getCaptains = () => {
    const playersRef = collection(db, "Players");
    getDocs(playersRef)
      .then((response) => {
        const players = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        players.forEach((value) => {
          if (value.data.Teamname === "Garage Strikers") {
            value.data.Teamlogo = Garage;
          } else if (value.data.Teamname === "WarriorZ") {
            value.data.Teamlogo = Warriors;
          } else if (value.data.Teamname === "EAGLES") {
            value.data.Teamlogo = Eagles;
          } else if (value.data.Teamname === "Mangalaseri ASURAS") {
            value.data.Teamlogo = Asuras;
          }
        });
        setcaptains(players);
      })
      .catch((error) => console.log(error.message));
  };

  React.useEffect(() => {
    // getPlayers();
    // setInterval(() => {
    //   getPlayers();
    // }, 50000);
    getCaptains();
    getPlayers();
    setInterval(() => {
      // getPlayers();
    }, 10000);
  }, []);

  return (
    <div className="playerdetailsmainwrapper">
      {/* <h4 className="playerdetailstitle">Player Details</h4> */}
      <h4 className="playerdetailstitle">CAPTAINS</h4>
      <div className="playercardmainbox">
        {captains.map((value) => {
          return (
            value.data.Grade === "Captain" && (
              <div
                className="cardBox captaincover"
                style={{
                  backgroundImage: `url(${value.data.Teamlogo})`,
                }}
              >
                <div className="captaincardinner">
                  {/* <img alt={""} src={allrounder} /> */}
                  <div className="cardImageWrapper">
                    <img
                      alt={""}
                      src={value.data.Image}
                      className="cardimage"
                    />
                  </div>
                  <div className="carduserName captainnames">
                    {value.data.Name}
                  </div>
                  <div className="cardusersold captainnames">
                    Team Name: {value.data.Teamname}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      {/* <h4 className="playerdetailstitle">Sold Players</h4> */}
      <h4 className="playerdetailstitle">PLAYERS</h4>
      <div className="playercardmainbox">
        {ListPlayerDetails.map((value) => {
          return (
            value.data.Grade === "Grade - A+" && (
              // value.data.Teamname !== "" &&
              <div className="cardBox">
                {/* <img alt={""} src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img alt={""} src={value.data.Image} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  {/* Sold to {value.data.Teamname} */}
                </div>
                <div className="carduserNameAmount">
                  {/* Amount: {value.data.Amount} */}
                  Strength: {value.data.Position}
                </div>
              </div>
            )
          );
        })}
      </div>
      {/* <h4 className="playerdetailstitle">Grade - A</h4> */}
      <div className="playercardmainbox">
        {ListPlayerDetails.map((value) => {
          return (
            value.data.Grade === "Grade - A" && (
              // value.data.Teamname !== "" &&
              <div className="cardBox">
                {/* <img alt={""} src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img alt={""} src={value.data.Image} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  {/* Sold to {value.data.Teamname} */}
                </div>
                <div className="carduserNameAmount">
                  {/* Amount: {value.data.Amount} */}
                  Strength: {value.data.Position}
                </div>
              </div>
            )
          );
        })}
      </div>
      {/* <h4 className="playerdetailstitle">Grade - B</h4> */}
      <div className="playercardmainbox">
        {ListPlayerDetails.map((value) => {
          return (
            value.data.Grade === "Grade - B" && (
              // value.data.Teamname !== "" &&
              <div className="cardBox">
                {/* <img alt={""} src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img alt={""} src={value.data.Image} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  {/* Sold to {value.data.Teamname} */}
                </div>
                <div className="carduserNameAmount">
                  {/* Amount: {value.data.Amount} */}
                  Strength: {value.data.Position}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
