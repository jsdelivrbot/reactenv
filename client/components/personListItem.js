//
import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import PersonList from './personList'
import PersonListSingle from './personListSingle'

const path = require('path');

// const Tasks = () => (
//   <Switch>
//     <Route exact path='/tasks' component={TodoList}/>
//     <Route path='/tasks/:number' component={TodoListSingle}/>
//   </Switch>
// )

const PersonListItem = (props) => {
	return (
		
		<tr>
			<td><Link to={`/person/${props.item._id}`}>{props.item._id}</Link></td>
			<td>{props.item.first_name}</td>
			<td>{props.item.last_name}</td>
			<td>{props.item.contact_number}</td>
			<td><a href={`/person`}>Add</a>&nbsp;<a href={{}}>Delete</a></td>
		</tr>
		
	)
}

export default PersonListItem;