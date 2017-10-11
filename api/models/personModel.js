'use strict'

var mongoose = require('mongoose');
var Schema 	= mongoose.Schema;

var PersonSchema = new Schema({

	first_name: {
		type: String,
		Required: 'Please enter your first name'
	},
	last_name: {
		type: String,
		Required: 'Please enter your last name'
	},
	contact_number: {
		type: Number,
		Required: 'Please enter your contact number'
	}

});

module.exports = mongoose.model('People', PersonSchema);