const initialData = {
  gameName: "Football",
  playerName: "Messi",
  userName: "Pratik",
};
function gamesReducer(state = initialData, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        gameName: action.payload,
      };
    case "CHANGE_PLAYER_NAME":
      return {
        ...state,
        playerName: action.payload,
      };
    case "CHANGE_USERNAME":
      return {
        ...state,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
}
export default gamesReducer;
