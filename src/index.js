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
  		const that = this;
		var personList = data.data.sort(function(personA,personB){
				switch(that.props.sortedBy) {
				    case 'az':
				        return personA.name.localeCompare(personB.name);
				        break;
				    case 'priority':
				        return personA.priority - personB.priority;
				        break;
				    default:
				        return -1;
				}
			}).filter(function(person){
				if( '' === that.props.filteredBy ) {
					return true;
				}
				return person.category === that.props.filteredBy
			}).map(function(person){
			    return (
			        <Box person={person} key={person.name} />
				);
			});
		return (
			<div className="grid">{ personList }</div>
		);
	}
}

class Filterset extends React.Component {
	render() {
		return (
			<form className="filterset">
				<Filter />
				<Sorter />
			</form>
		);
	}
}

class Filter extends React.Component {
	render() {
		var categories = data.data.reduce(function(carry, item){
			if(item.category && !~carry.indexOf(item.category)) { carry.push(item.category); }
			return carry;
		}, [] );
		var inputList = categories.sort().map(function(category){
			return (
				<div key={category}>
					<input 
						type="radio" 
						key={"radio-"+category}
					 	name="category"
					 	value={"category"+category} />
					<label
						htmlFor={"category"+category}
						key={"label-"+category} >
					Category {category}
					</label>
				</div>
			);
		});
		return (
			<fieldset className="filter">
				{inputList}
			</fieldset>
		);
	}
}

class Sorter extends React.Component {
	render() {
		return (
			<div className="sorter">
				<span>Sort By </span>
				<select>
					<option value="featured" key="featured">Featured</option>
					<option value="az" key="az">A - Z</option>
					<option value="priority" key="priority">Priority</option>
				</select>
			</div>
		);
	}
}

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredBy: '',
			sortedBy: ''
		};
	}
	handleFilter(newFilter) {
		this.setState({
			filteredBy: newFilter,
			sortedBy: this.state.sortedBy
		})
	}
	handleSort(newSort) {
		this.setState({
			filteredBy: this.state.filteredBy,
			sortedBy: newSort
		})
	}
	render() {
		return (
			<div className="content">
				<Filterset />
				<hr />
				<Grid 
				filteredBy={this.state.filteredBy}
				sortedBy={this.state.sortedBy} />
			</div>
		);
	}
}

ReactDOM.render(
  <Content />,
  document.getElementById('root')
);