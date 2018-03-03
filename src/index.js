import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = require('./data.js');

function Box(props) {
	return (
		<div className={'box priority' + props.person.priority} >
			<h2 className="name">{props.person.name}</h2>
			<span className="age">Age: {props.person.age}</span>
			<span className="category">Category: {props.person.category}</span>
		</div>
	);
}

class Grid extends React.Component {
  render() {
		var personList = data.data.map(function(person){
			    return (
			        <Box person={person} key={person.name} />
				);
			});
		return (
			<div className="grid">{ personList }</div>
		);
	}
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
);