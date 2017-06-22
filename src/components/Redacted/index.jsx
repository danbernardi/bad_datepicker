import React from 'react';
import { TimelineMax, TweenMax, Power3 } from 'gsap';
import Draggable from 'vendor/Draggable';
import ThrowPropsPlugin from 'vendor/ThrowPropsPlugin';
import GSAP from 'react-gsap-enhancer';
import './Redacted.scss';

export class Redacted extends React.Component {
  constructor (props) {
    super(props);
    this.pieceCoords = [null, null];
  }

  componentDidMount () {
    const self = this;

    self.dragboard = Draggable.create(this.piece, {
      type: 'x,y',
      edgeResistance: 0.65,
      dragResistance: 0.35,
      throwResistance: 1000,
      bounds: this.gameboard,
      throwProps: true,
      onThrowComplete: self.checkForOverlappingSquares.bind(self)
    });

    // this.spiritualResistance = setInterval(function () {
    //   const spiritualInfluence = Math.random();
    //   console.log(spiritualInfluence);
    //   self.dragboard[0].dragResistance = spiritualInfluence;
    // }, 3000);

    // setInterval(function () {
    //   console.log(self.dragboard[0]);
    //   function spiritualInfluence (endValue) {
    //     return Math.round(endValue / 50) * 100;
    //   };

    //   self.dragboard[0].snap = (endValue) => { console.log(endValue); return spiritualInfluence(endValue); };
    // }, 6000);
  }

  checkForOverlappingSquares () {
    const overlappingSquares = [];

    this.gameboard.querySelectorAll('.square').forEach((item) => {
      if (this.dragboard[0].hitTest(item)) {
        overlappingSquares.push(item);
        TweenMax.to(item, 0.2, { background: 'pink' });
      } else {
        TweenMax.set(item, { background: 'transparent' });
      }
    });



    console.log(overlappingSquares);
  }

  spiritTakesControl () {
    const spiritX = Math.random();
    const spiritY = Math.random();
    console.log([spiritX, spiritY], this.piece);
    TweenMax.to(this.piece, 2, { x: spiritX, y: spiritY, ease: Power3.easeInOut });
  }

  componenWillUnmount () {
    clearInterval(this.spiritualResistance);
  }

  render () {
    return (
      <div className="layout--flex" style={ { height: '100%' } }>
        <div className="row">
          <div className="ouija">
            <div className="gameboard" ref={ el => { this.gameboard = el; } }>
              <div className="square">1</div>
              <div className="square">2</div>
              <div className="square">3</div>
              <div className="square">4</div>
              <div className="square">5</div>

              <div className="square">6</div>
              <div className="square">7</div>
              <div className="square">8</div>
              <div className="square">9</div>
              <div className="square">10</div>

              <div className="square">11</div>
              <div className="square">12</div>
              <div className="square">13</div>
              <div className="square">14</div>
              <div className="square">15</div>

              <div className="square">16</div>
              <div className="square">17</div>
              <div className="square">18</div>
              <div className="square">19</div>
              <div className="square">20</div>

              <div className="square">21</div>
              <div className="square">22</div>
              <div className="square">23</div>
              <div className="square">24</div>
              <div className="square">25</div>

              <div className="square">26</div>
              <div className="square">27</div>
              <div className="square">28</div>
              <div className="square">29</div>
              <div className="square">30</div>

              <div className="square">31</div>
            </div>
            <span ref={ el => { this.piece = el; } } className="piece" />
          </div>
        </div>
      </div>
    );
  }
}

export default GSAP()(Redacted);
