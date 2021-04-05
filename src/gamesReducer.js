const initialData = {
  gameName: "Football",
  playerName: "Messi",
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
    default:
      return state;
  }
}
export default gamesReducer;
