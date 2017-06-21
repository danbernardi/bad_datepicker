import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, Power3 } from 'gsap';
import Selector from 'components/Selector';
import './Cooldown.scss';

export class Cooldown extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      month: 0
    };
  }

  render () {
    const { month } = this.state;
    const cooldown = '60%';

    return (
      <div className="layout--flex" style={ { height: '100%' } }>
        <div className="row">
          {/* <h5 className="mb3 col-center typ--center typ--medium-grey" style={ { maxWidth: '50rem' } }>Please select a date, be careful not to overtax our delicate systems. They are prone to overheat.</h5> */}
          
          <div className="meter"><span style={ { width: cooldown } } className="meter__bar" /></div>

          <Selector />
        </div>
      </div>
    );
  }
}

export default GSAP()(Cooldown);
