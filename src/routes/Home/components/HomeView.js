import React from 'react'
import DuckImage from 'routes/Home/assets/Duck.jpg'
import { connect } from 'react-redux';
import { setClass } from 'utils/responsiveHelpers';
import './HomeView.scss'

export const HomeView = ({ breakpoint }) => (
  <div className={ setClass({ default: 'py6', mobileLg: 'py3' }, breakpoint) }>
    <h4 className="typ--center">Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(HomeView)
