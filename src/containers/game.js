import { connect } from 'react-redux';
import App from '../App';
import { squareClicked, createBoard } from '../actions/index';

const mapStateToProps = state => ({
  gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  squareClicked: (position) => {
    dispatch(squareClicked(position));
  },
  createBoard: () => {
    dispatch(createBoard());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
