import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
  <Family  lastName="Toazza">
    <Member name="Milene" />
    <Member name="Christian" />
  </Family>
  , document.getElementById('app'));
