/*
    ./client/components/App.jsx
*/
import React from 'react';
import TodoList from './todoList';

export default class App extends React.Component {

  constructor(props) {
  	super(props);

  	this.state = { 
  		todos: [] 
  	};
  }

  componentDidMount() {
  	fetch('http://localhost:3000/tasks').then((response) => {
  		return response.json();
  	}).then((data) => {
  		// console.log(data);
  		// const todoItems = data.map(todo => {
  		// 	return todo;
  		// });
  		this.setState({todos: data});
  	}).catch((err) => {
  		throw new Error(err);
  	});
  }

  render() {
    return (
     <div style={{backgroundColor: '#fff'}}>
        <h1>Hello World</h1>
        <TodoList todos={this.state.todos} />
      </div>);
  }
}