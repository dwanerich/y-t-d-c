import React from 'react';
import take2Logo from '../img/take-two-wide.png';

export const Header = () => {
  return (
    <div className="header">
      <center style={{ background: 'black' }}>
        <img
          src={take2Logo}
          alt="Take Two Logo"
          style={{ width: '33%',
        backgroundColor: 'black'}}
        />
      </center>
      <div class="section-center">

      </div>
    </div>
  );
};
