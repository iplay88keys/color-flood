import React from 'react';
import PropTypes from 'prop-types';

const NewGame = (props) => {
  return (
    <div id={ "newGame" }>
      <button
        onMouseUp={ () => {
          props.createBoard();
        } }
      >
        New Game
      </button>
    </div>
  );
};

NewGame.propTypes = {
  createBoard: PropTypes.func.isRequired,
};

export default NewGame;
