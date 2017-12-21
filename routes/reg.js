var express = require('express');
var router = express.Router();

 router.get('/', function(req, res, next){
	 console.log('asdf');
	res.render('reg');
});

router.post('/', function(req, res, next){
	//var post = req.body;
	//console.log(post);
	
	var Users = require('../models/users').Users;

	var email = req.body.email;
	var password = req.body.password;
	
	var users = new Users ({
		email: email,
		password: password
	});

	users.save(function(err, user){
		console.log(arguments);
		req.session.user = user._id;
	});

});
 
module.exports = router;
