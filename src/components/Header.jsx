import React from "react";

const NPL = require("../image/NPL.jpg");

export default function Header() {
  React.useEffect(() => {}, []);

  return (
    <div className="HeaderWrapper">
      <div className="Headerimagewrapper">
        <img src={NPL} width="80%" alt={""} />
      </div>
      <div className="Headertextwrapper">NPL Season 3</div>
    </div>
  );
}
