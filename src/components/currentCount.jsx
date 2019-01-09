import React from 'react';
import PropTypes from 'prop-types';

const CurrentCount = (props) => {
  return (
    <div id={ "currentCount" }>
      <div>
        { props.gameState.currentCount + "/" + props.gameState.maxMoves }
      </div>
    </div>
  );
};

CurrentCount.propTypes = {
  gameState: PropTypes.shape({
    currentCount: PropTypes.number.isRequired,
    maxMoves: PropTypes.number.isRequired,
  }).isRequired,
};

export default CurrentCount;
