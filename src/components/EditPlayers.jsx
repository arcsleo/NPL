import React from "react";
import { collection, doc, updateDoc, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";

export default function EditPlayers() {
  const [name, setname] = React.useState("");
  const [id, setid] = React.useState("");
  const [base64, setbase64] = React.useState("");
  const [grade, setgrade] = React.useState("");
  const [position, setposition] = React.useState("");
  const [amount, setamount] = React.useState("");
  const [search, setsearch] = React.useState("");
  const [Teamname, setTeamname] = React.useState([]);
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

  const searchData = () => {
    ListPlayerDetails.forEach((value) => {
      if (value.data.Name.includes(search)) {
        setid(value.id);
        setname(value.data.Name);
        setgrade(value.data.Grade);
        setposition(value.data.Position);
        setbase64(value.data.Image);
      }
    });
  };

  const getbase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setbase64(reader.result);
    };
  };

  const submitClick = (e) => {
    e.preventDefault();
    const playersRef = doc(db, "Players", id);
    updateDoc(playersRef, {
      Name: name,
      Grade: grade,
      Image: base64,
      Amount: amount,
      Teamname: Teamname,
      Position: position,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  React.useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className="addplayercontent">
      <div className="AddPlayerWrapper">
        <div className="addplayerbox">
          <div className="playertext">Search Player Name</div>
          <input
            type="text"
            className="addplayerfield"
            name=""
            id=""
            onChange={(e) => setsearch(e.currentTarget.value)}
          />
          <button onClick={() => searchData()}>Search</button>
        </div>
        <div className="addplayerbox">
          <div className="playertext">Player Name</div>
          <input
            type="text"
            className="addplayerfield"
            name=""
            id=""
            value={name}
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
            value={grade}
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
            value={position}
            className="addplayerfield"
            name=""
            id=""
            onChange={(e) => setposition(e.currentTarget.value)}
          />
        </div>
        <div className="addplayerbox">
          <div className="playertext">Team Name</div>
          <input
            type="text"
            className="addplayerfield"
            name=""
            id=""
            onChange={(e) => setTeamname(e.currentTarget.value)}
          />
        </div>
        <div className="addplayerbox">
          <div className="playertext">Amount</div>
          <input
            type="text"
            className="addplayerfield"
            name=""
            id=""
            onChange={(e) => setamount(e.currentTarget.value)}
          />
        </div>
        <div className="submitbuttonadd">
          <button onClick={(e) => submitClick(e)}>Submit</button>
        </div>
      </div>
      <div className="addplayerimagewrapper">
        <img alt={""} src={base64} className="addplayerimage" />
      </div>
    </div>
  );
}
