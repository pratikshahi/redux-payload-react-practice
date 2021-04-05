import React from "react";
import { useDispatch } from "react-redux";
function Comp3() {
  const dispatch = useDispatch();
  function changeUserName() {
    const user = {
      userName: "shahi",
      userId: "12",
      userEmail: "shahipr0@gmail.com",
    };
    dispatch({ type: "CHANGE_USERNAME", payload: user });
  }
  return (
    <div>
      <h1>This is comp 3</h1>
      <button onClick={changeUserName}>Change userName</button>
    </div>
  );
}
export default Comp3;
