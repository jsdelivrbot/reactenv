
import React, { Component } from 'react'

function createNewProfile(profile) {
    const formData = new FormData();
    formData.append('first_name', profile.firstName);
    formData.append('last_name', profile.lastName);
    formData.append('email', profile.email);
    return fetch('http://localhost:3000/person', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
}

class PersonListAdd extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			firstName: '',
			lastName: '',
			contactNumber: ''
		};

		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });

	    // console.log(this.state);
	}

	handleSubmit(event) {

		const formData = new FormData(document.getElementById('add-person-form'));

		// console.log(formData);
	    formData.append('firstName', this.state.firstName);
	    formData.append('lastName', this.state.lastName);
	    formData.append('contactNumber', this.state.contactNumber);

	    const data = {
	    	"first_name": this.state.firstName,
	    	"last_name": this.state.lastName,
	    	"contact_number": this.state.contactNumber
	    }

	    var formBody = [];
		for (var property in data) {
		  var encodedKey = encodeURIComponent(property);
		  var encodedValue = encodeURIComponent(data[property]);
		  formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

	 //    for (var value of formData.values()) {
		//    console.log(value); 
		// }

	    // console.log(JSON.stringify(data));

	    fetch('http://localhost:3000/person', {
	        method: 'POST',
	        headers: new Headers({'Accept': 'application/x-www-form-urlencoded, application/json, application/xml, text/plain, text/html, *.*','Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}),
	        body: formBody
	    })

		alert('A name was submitted: ' + this.state.firstName);
		event.preventDefault();
	}

	// createNewProfile(profile)
 //   .then((json) => {
 //       // handle success
 //    })
 //   .catch(error => error);

	render() {
		return (
	      <form id="add-person-form" onSubmit={this.handleSubmit}>
	        <label>
	          First Name:
	          <input
	            name="firstName"
	            type="text"
	            value={this.state.firstName}
	            onChange={this.handleInputChange} />
	        </label>
	        <br />
	        <label>
	          Last Name:
	          <input
	            name="lastName"
	            type="text"
	            value={this.state.lastName}
	            onChange={this.handleInputChange} />
	        </label>
	        <br />
	        <label>
	          Contact Number:
	          <input
	            name="contactNumber"
	            type="number"
	            value={this.state.contactNumber}
	            onChange={this.handleInputChange} />
	        </label>

	        <input type="submit" value="Submit" />
	      </form>
	    );
	}

}

export default PersonListAdd;