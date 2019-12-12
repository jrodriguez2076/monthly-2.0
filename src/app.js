import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

import NavSection from './components/NavSection';

const title = 'Welcome to the next step';

function Welcome() {
  return (
    <div>
      <NavSection></NavSection>
      <h1>{title}</h1>
      <p>now we will start with the actual design</p>
    </div>
  )
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('app')
);