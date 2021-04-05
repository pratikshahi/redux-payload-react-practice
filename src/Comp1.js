import React from "react";
import { useSelector } from "react-redux";
import gamesReducer from "./gamesReducer";

function Comp1() {
  const gamesobj = useSelector((state) => state);
  return (
    <div className="ca">
      <h1>Name in gamesReducer is: {gamesobj.gameName}</h1>
      <h1>Name of player is :{gamesobj.playerName}</h1>
    </div>
  );
}
export default Comp1;
