import React from 'react';
import Draggable from 'vendor/Draggable';
import ThrowProps from 'vendor/ThrowPropsPlugin';
import './Ouija.scss';

export class Ouija extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    Draggable.create(this.piece, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: this.gameboard,
      throwProps: true
    });
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

export default Ouija;
