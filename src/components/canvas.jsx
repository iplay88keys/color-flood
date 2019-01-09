import React from 'react';
import PropTypes from 'prop-types';
import { gameHeight, gameWidth } from "../utils/constants";
import Squares from "./squares";
import Border from "./border";

const Canvas = (props) => {
  const viewBox = [0, 0, gameWidth, gameHeight];

  return (
    <svg
      id="color-flood-canvas"
      preserveAspectRatio="xMidYMid meet"
      height="100%"
      width="100%"
      viewBox={ viewBox }
    >
      <Squares gameState={ props.gameState } squareClicked={ props.squareClicked }/>
      <Border/>
    </svg>
  );
};

Squares.propTypes = {
  gameState: PropTypes.shape({
    squares: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  squareClicked: PropTypes.func.isRequired,
};

export default Canvas;
