import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function AddPlayers() {
  const [name, setname] = React.useState("");
  const [image, setimage] = React.useState("");
  const [grade, setgrade] = React.useState("");
  const [base64, setbase64] = React.useState("");
  const [position, setposition] = React.useState("");
  const getbase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setbase64(reader.result);
    };
  };
  const convert = () => {
    let base64ToString = Buffer.from(base64, "base64").toString();
    setimage(base64ToString);
  };
  const submitClick = (e) => {
    e.preventDefault();
    const playersRef = collection(db, "Players");
    addDoc(playersRef, {
      Name: name,
      Grade: grade,
      Image: base64,
      Amount: 0,
      Teamname: "",
      Position: position,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="addplayercontent">
      <div className="AddPlayerWrapper">
        <div className="addplayerbox">
          <div className="playertext">Player Name</div>
          <input
            type="text"
            className="addplayerfield"
            name=""
            id=""
            onChange={(e) => setname(e.currentTarget.value)}
          />
        </div>
        <div className="addplayerbox">
          <div className="playertext">Player Image</div>
          <input
            className="addplayerfield"
            type="file"
            onChange={(e) => getbase64(e.currentTarget.files[0])}
          />
        </div>
        <div className="addplayerbox">
          <div className="playertext">Player Grade</div>
          <input
            type="text"
            className="addplayerfield"
            name=""
            id=""
            onChange={(e) => setgrade(e.currentTarget.value)}
          />
        </div>
        <div className="addplayerbox">
          <div className="playertext">Player Position</div>
          <input
            type="text"
            className="addplayerfield"
            name=""
            id=""
            onChange={(e) => setposition(e.currentTarget.value)}
          />
        </div>
        <div className="submitbuttonadd">
          <button onClick={(e) => submitClick(e)}>Submit</button>
        </div>
      </div>
      <div className="addplayerimagewrapper">
        <img src={base64} className="addplayerimage" />
      </div>
    </div>
  );
}
