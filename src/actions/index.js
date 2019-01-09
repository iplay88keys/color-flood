export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const CREATE_BOARD = 'CREATE_BOARD';

export const squareClicked = (position) => ({
  type: SQUARE_CLICKED,
  position,
});

export const createBoard = () => ({
  type: CREATE_BOARD,
});
