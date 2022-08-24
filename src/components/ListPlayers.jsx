import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function ListPlayers() {
  const [ListPlayerDetails, setListPlayerDetails] = React.useState([]);

  const getPlayers = () => {
    const playersRef = collection(db, "Players");
    getDocs(playersRef)
      .then((response) => {
        const players = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
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
    setInterval(function () {
      getPlayers();
    }, 10000);
  }, []);

  return (
    <div className="playerdetailsmainwrapper">
      <h4 className="playerdetailstitle">Player Details</h4>
      <h4 className="playerdetailstitle">Captains</h4>
      <div className="playercardmainbox">
        {ListPlayerDetails.map((value) => {
          return (
            value.data.Grade === "Captain" && (
              <div className="cardBox">
                {/* <img alt={""} src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img alt={""} src={value.data.Image} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  Team Name: {value.data.Teamname}
                </div>
              </div>
            )
          );
        })}
      </div>
      <h4 className="playerdetailstitle">Sold Players</h4>
      <div className="playercardmainbox">
        {ListPlayerDetails.map((value) => {
          return (
            value.data.Grade === "Grade - A+" &&
            value.data.Teamname !== "" && (
              <div className="cardBox">
                {/* <img alt={""} src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img alt={""} src={value.data.Image} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  Sold to {value.data.Teamname}
                </div>
                <div className="carduserNameAmount">
                  Amount: {value.data.Amount}
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
            value.data.Grade === "Grade - A" &&
            value.data.Teamname !== "" && (
              <div className="cardBox">
                {/* <img alt={""} src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img alt={""} src={value.data.Image} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  Sold to {value.data.Teamname}
                </div>
                <div className="carduserNameAmount">
                  Amount: {value.data.Amount}
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
            value.data.Grade === "Grade - B" &&
            value.data.Teamname !== "" && (
              <div className="cardBox">
                {/* <img alt={""} src={allrounder} /> */}
                <div className="cardImageWrapper">
                  <img alt={""} src={value.data.Image} className="cardimage" />
                </div>
                <div className="carduserName">{value.data.Name}</div>
                <div className="cardusersold">
                  Sold to {value.data.Teamname}
                </div>
                <div className="carduserNameAmount">
                  Amount: {value.data.Amount}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
