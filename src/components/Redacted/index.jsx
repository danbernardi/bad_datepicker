import React from 'react';
import { TimelineMax, TweenMax, Power3 } from 'gsap';
import Draggable from 'vendor/Draggable';
import ThrowPropsPlugin from 'vendor/ThrowPropsPlugin';
import GSAP from 'react-gsap-enhancer';
import './Redacted.scss';

export class Redacted extends React.Component {
  constructor (props) {
    super(props);

    this.resultsArray = [];
    this.resultString = '';
    this.queue = '';
  }

  componentDidMount () {
    this.generateDraggable();
  }

  generateDraggable () {
    this.dragboard = Draggable.create(this.piece, {
      type: 'x,y',
      edgeResistance: 0.65,
      dragResistance: 0.35,
      throwResistance: 1000,
      bounds: this.gameboard,
      throwProps: true,
      onThrowUpdate: () => {
        this.checkForOverlappingSquares.bind(this)();
      },
      onDragEnd: () => {
        if (this.tween) {
          const tl = new TimelineMax().add(this.tween);
          this.animation = this.addAnimation(tl);
        }
      }
    });

    const self = this;

    setInterval(function () {
      const influenece = Math.random();
      self.dragboard[0].dragResistance = influenece;
    }, 200);

    setInterval(function () {
      function influence (endValue) {
        return Math.round(endValue / 50) * 100;
      };

      self.dragboard[0].snap = (endValue) => { console.log(endValue); return influence(endValue); };
    }, 6000);
  }

  checkForOverlappingSquares () {
    const overlappingSquares = [];

    this.gameboard.querySelectorAll('.square').forEach((item) => {
      if (this.dragboard[0].hitTest(item, '50%')) {
        overlappingSquares.push(item);
        TweenMax.to(item, 0.2, { background: 'pink' });
        this.queue = item.innerText;
      } else {
        TweenMax.to(item, 0.2, { background: 'transparent' });
      }
    });
  }

  spiritTakesControl () {
    const spiritX = Math.random();
    const spiritY = Math.random();
    TweenMax.to(this.piece, 2, { x: spiritX, y: spiritY, ease: Power3.easeInOut });
  }

  logResult () {
    const textElem = document.createElement('span');
    textElem.innerText = this.queue;

    this.resultsArray.push(textElem);

    this.resultsArray.forEach(result => {
      this.results.appendChild(result);
    });
  }

  clearResults () {
    this.results.innerHTML = '';
    this.resultsArray = [];
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
              <div className="square">&nbsp;</div>
              <div className="square">A</div>
              <div className="square">B</div>
              <div className="square">C</div>
              <div className="square">&nbsp;</div>
              <div className="square">D</div>
              <div className="square">E</div>

              <div className="square">F</div>
              <div className="square">G</div>
              <div className="square">H</div>
              <div className="square">I</div>
              <div className="square">J</div>

              <div className="square">K</div>
              <div className="square">L</div>
              <div className="square">M</div>
              <div className="square">N</div>
              <div className="square">O</div>

              <div className="square">P</div>
              <div className="square">Q</div>
              <div className="square">R</div>
              <div className="square">S</div>
              <div className="square">T</div>

              <div className="square">U</div>
              <div className="square">V</div>
              <div className="square">W</div>
              <div className="square">&nbsp;</div>
              <div className="square">X</div>
              <div className="square">Y</div>
              <div className="square">Z</div>

              <div className="square">&nbsp;</div>
              <div className="square">&nbsp;</div>
              <div className="square">&nbsp;</div>
              <div className="square">&nbsp;</div>
              <div className="square">&nbsp;</div>
              <div className="square">&nbsp;</div>

              <div className="square">0</div>
              <div className="square">1</div>
              <div className="square">2</div>
              <div className="square">3</div>
              <div className="square">4</div>
              <div className="square">5</div>
              <div className="square">6</div>
              <div className="square">7</div>
              <div className="square">8</div>
              <div className="square">9</div>
            </div>
            <span ref={ el => { this.piece = el; } } className="piece" />

            <div className="controls">
              <button className="btn mb2" onClick={ () => this.logResult() }>Log</button>
              <button className="btn" onClick={ () => this.clearResults() }>Clear</button>
            </div>

            <div className="results" ref={ el => { this.results = el; } } />
          </div>
        </div>
      </div>
    );
  }
}

export default GSAP()(Redacted);
