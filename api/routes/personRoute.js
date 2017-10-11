'use strict'

module.exports = function(app) {

	var manage_a_person = require('../controllers/personController');

	// Routes!

	app.route('/person')
	  .get(manage_a_person.display_all_people)
	  .post(manage_a_person.add_a_person);

	app.route('/person/:personId')
	  .get(manage_a_person.read_a_person)
	  .put(manage_a_person.update_a_person)
	  .delete(manage_a_person.delete_a_person);
};