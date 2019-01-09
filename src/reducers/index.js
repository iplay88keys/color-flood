import {
  SQUARE_CLICKED, CREATE_BOARD
} from '../actions';
import createBoard from "./createBoard";
import squareClicked from "./squareClicked"

const initialGameState = {
  squares: [],
  currentCount: 0,
  maxMoves: 25,
};

const initialState = {
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SQUARE_CLICKED:
      return squareClicked(state, action.position);
    case CREATE_BOARD:
      return createBoard(initialGameState);
    default:
      return state;
  }
}

export default reducer;
