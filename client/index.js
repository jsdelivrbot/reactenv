/* 
    ./client/index.js
*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import PersonList from './components/personList'
import PersonListSingle from './components/personListSingle'
import PersonListAdd from './components/personListAdd'

const Person = () => (
  <Switch>
    <Route exact path='/person' component={PersonList}/>
    <Route path='/person/:number' component={PersonListSingle}/>
  </Switch>
)

const Home = () => (
	<div>
		<h1>Hello World</h1>
    <PersonList />
	</div>
)

// const Add = () => (

// )

const Main = () => (
	<main>
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/person' component={Person}/>      
	      <Route path='/add' component={PersonListAdd}/>      
	    </Switch>
	  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/person'>View All People</Link></li>
        <li><Link to='/add'>Add A Person</Link></li>
      </ul>
    </nav>
  </header>
)

class App extends Component {

  render() {
    return (
     <div style={{backgroundColor: '#fff'}}>
     	<Header />
     	<Main />
      </div>);
  }
}

ReactDOM.render((
	<BrowserRouter>
		<App />	
	</BrowserRouter>		
), document.getElementById('root'));