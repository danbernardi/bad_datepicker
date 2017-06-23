import React from 'react';
import Redacted from 'components/Redacted';
import './HomeView.scss';

export function HomeView () {
  return (
    <section>
      <div className="datepicker__section" style={ { backgroundImage: `url(${require('assets/img/bg2.jpg')})` } }>
        <Redacted />
      </div>
    </section>
  );
}

export default HomeView;
