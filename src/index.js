import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = require('./data.js');

function Box(props) {
	return (
		<div className="box">
			<h2 className="name">{props.person.name}</h2>
			<span className="age">Age: {props.person.age}</span>
			<span className="category">Category: {props.person.category}</span>
		</div>
	);
}

class Grid extends React.Component {
  render() {
		var namesList = data.data.map(function(person){
			    return (
			        <Box person={person} />
				);
			});
		return (
			<div>{ namesList }</div>
		);
	}
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
);