import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = require('./data.js');

function Box(props) {
  return (
    <div className="box">
      {props.value}
    </div>
  );
}

class Grid extends React.Component {
  renderBox(i) {
    return (
          <Box
            value={i}
          />
    );
  }
  render() {
    return (
      <div>
        <div className="grid-row">
          {this.renderBox('Jon Doe')}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
);