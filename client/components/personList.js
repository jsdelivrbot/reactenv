
import React, { Component } from 'react';
import PersonListItem from './personListItem';

class PersonList extends Component {

	constructor(props) {
	  	super(props);

	  	this.state = { 
	  		person: [] 
	  	};

	  	fetch('http://localhost:3000/person').then((response) => {
	  		return response.json();
	  	}).then((data) => {
	  		console.log(data);
	  		// const todoItems = data.map(todo => {
	  		// 	return todo;
	  		// });
	  		this.setState({person: data});
	  	}).catch((err) => {
	  		throw new Error(err);
	  	});
	}

	render() {

		const items = this.state.person.map((item) => {
			return <PersonListItem key={item._id} item={item} />
		});

		return( 
			<table className="table">
				<tbody>
					{items}
				</tbody>
			</table>
		)
	}
	
}

export default PersonList;