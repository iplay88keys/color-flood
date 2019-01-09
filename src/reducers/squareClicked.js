import { updateSquares } from "../utils/formulas";

function squareClicked(state, position) {
  if (state.gameState.currentCount === state.gameState.maxMoves) {
    return { ...state }
  }

  let squares = state.gameState.squares;
  let currentCount = state.gameState.currentCount;

  let oldColor = squares[0].color;
  let newColor = squares[position].color;

  if (oldColor !== newColor) {
    squares = updateSquares(squares, 0, oldColor, newColor);
    currentCount = currentCount + 1;
  }

  return {
    ...state,
    gameState: {
      ...state.gameState,
      squares: squares,
      currentCount: currentCount,
    }
  }
}

export default squareClicked;
