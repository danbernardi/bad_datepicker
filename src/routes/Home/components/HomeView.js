import React from 'react';
import Ouija from 'components/Ouija';
import './HomeView.scss';

export const HomeView = () => (
  <section>
    <div className="datepicker__section">
      <Ouija />
    </div>
  </section>
);

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default HomeView;
