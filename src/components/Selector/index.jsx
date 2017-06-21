import React from 'react';
import './Selector.scss';

export class Selector extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      month: 0
    };
  }

  render () {
    const { month } = this.state;

    return (
      <div className="date py6 typ--h4">
        <span
          className="date__decrement fa fa-caret-left p1"
          onClick={ () => this.setState({ month: month - 1 }) }
        />
        <span className="date__month">{ month }</span>
        <span
          className="date__increment fa fa-caret-right p1"
          onClick={ () => this.setState({ month: month + 1 }) }
        />
      </div>
    );
  }
}

export default Selector;
