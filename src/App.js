import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/canvas';
import NewGame from "./components/newGame";
import CurrentCount from "./components/currentCount";

class App extends Component {
  componentDidMount() {
    // window.onresize = () => {
    //   const gridContainer = document.getElementsByClassName("gridContainer").item(0);
    //   const canvas = document.getElementById("color-flood-canvas");
    //   gridContainer.style.width = `${ canvas.style.width }px`;
    // };
    // window.onresize();

    const canvas = document.getElementById("color-flood-canvas");
    canvas.style.width = `${ canvas.style.height }px`;

    this.props.createBoard();
  }

  render() {
    return (
      <Fragment>
        <div id={ "content" }>
          <div className={ "gridContainer" }>
            <div className={ "title" }>
              Color Flood
            </div>
            <div className={ "informationContainer" }>
              <div className={ "informationLeft" }>
                <NewGame createBoard={ this.props.createBoard }/>
              </div>
              <div className={ "informationRight" }>
                <CurrentCount gameState={ this.props.gameState }/>
              </div>
            </div>
            <div className={ "game" }>
              <Canvas
                gameState={ this.props.gameState }
                squareClicked={ this.props.squareClicked }
                createBoard={ this.props.createBoard }
              />
            </div>
            <div className={ "settings" }></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  gameState: PropTypes.shape({
    squares: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
    })).isRequired,
    currentCount: PropTypes.number.isRequired,
    maxMoves: PropTypes.number.isRequired,
  }).isRequired,
  createBoard: PropTypes.func.isRequired,
  squareClicked: PropTypes.func.isRequired,
};

export default App;
