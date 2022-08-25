import React from "react";
// import logo from "./logo.svg";
import ListPlayers from "./components/ListPlayers";
import EditPlayers from "./components/EditPlayers";
// import reportWebVitals from "./reportWebVitals";
import AddPlayers from "./components/AddPlayers";
import ShowPlayers from "./components/ShowPlayers";
import "./App.css";

export default function App() {
  const [selectedTab, setSelectedTab] = React.useState("");

  React.useEffect(() => {
    if (window.location.href.split("page=")[1] === "Players") {
      setSelectedTab("View Players");
    } else if (window.location.href.split("page=")[1] === "Edit") {
      setSelectedTab("Edit Players");
    } else if (window.location.href.split("page=")[1] === "Add") {
      setSelectedTab("Edit Players");
    } else if (window.location.href.split("page=")[1] === "Show") {
      setSelectedTab("Show Players");
    } else if (window.location.href.split("page=")[1] === "Add") {
      setSelectedTab("Create Players");
    }
  }, []);

  return (
    <div className="App mainWrapper">
      <div className="selectionboxHead">
        {/* <div
          className="selectionbox"
          onClick={() => setSelectedTab("Create Players")}
        >
          Create Players
        </div>
        <div
          className="selectionbox"
          onClick={() => setSelectedTab("View Players")}
        >
          View Players
        </div> */}
        {/* <div
          className="selectionbox"
          onClick={() => setSelectedTab("Edit Players")}
        >
          Edit Players
        </div> */}
      </div>
      {selectedTab === "Create Players" && <AddPlayers />}
      {selectedTab === "View Players" && <ListPlayers />}
      {selectedTab === "Edit Players" && <EditPlayers />}
      {selectedTab === "Show Players" && <ShowPlayers />}
    </div>
  );
}
