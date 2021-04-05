import React, { useState } from "react";
import { useDispatch } from "react-redux";
function Comp2() {
  const [gameName, setGameName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const dispatch = useDispatch();
  function changeGameName() {
    dispatch({ type: "CHANGE_NAME", payload: gameName });
  }
  function changePlayerName() {
    dispatch({ type: "CHANGE_PLAYER_NAME", payload: playerName });
  }
  return (
    <div className="cb">
      <h1>This is comp 2</h1>
      <input
        type="text"
        placeholder="new game"
        value={gameName}
        onChange={(event) => {
          setGameName(event.target.value);
        }}
      />
      <button onClick={changeGameName}>Change game</button>
      <br />
      <input
        type="text"
        placeholder="new player"
        value={playerName}
        onChange={(event) => {
          setPlayerName(event.target.value);
        }}
      />
      <button onClick={changePlayerName}>Change player</button>
    </div>
  );
}
export default Comp2;
