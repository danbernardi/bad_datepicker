import React from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import Draggable from 'vendor/Draggable';
import ThrowPropsPlugin from 'vendor/ThrowPropsPlugin';
import GSAP from 'react-gsap-enhancer';
import './Redacted.scss';
import Letters from 'components/Letters';
import Numbers from 'components/Numbers';

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
    this.dragboard = Draggable.create(this.planchette, {
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
  }

  checkForOverlappingSquares () {
    const overlappingSquares = [];

    this.gameboard.querySelectorAll('.selection').forEach((item) => {
      if (this.dragboard[0].hitTest(item, '80%')) {
        overlappingSquares.push(item);
        TweenMax.to(item, 0.2, { fill: '#8D2C3B' });
        this.queue = item.getAttribute('id');
      } else {
        TweenMax.to(item, 0.2, { fill: '#1C1D13' });
      }
    });
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
            <div className="gameboard" ref={ el => { this.gameboard = el; } } style={ { backgroundImage: `url(${require('assets/img/ouijablank.jpg')})` } }>
              <Letters />
              <Numbers />
            </div>
            <div ref={ el => { this.planchette = el; } } className="planchette">
              <div className="peephole" />
            </div>

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
