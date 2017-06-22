import React from 'react';
import Redacted from 'components/Redacted';
import './HomeView.scss';

export const HomeView = () => (
  <section>
    <div className="datepicker__section">
      <Redacted />
    </div>
  </section>
);

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default HomeView;
