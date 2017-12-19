var express = require('express');
var router = express.Router();

var Themas = require('../models/themas').Themas;

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	if(req.params.id){
		var index = req.params.id;
	} else {
		var index = 'welcome';
	}
	
	Themas.findOne({'uri':index}, function(err,ttext){
		if(!ttext){
			ttext = {
				name: 'Добро пожаловать',
				body: 'Извинитеб страница не найдена'
			}
		}
	})
	console.log(index);
  res.render('index', {
	  //title: index
		ttext:ttext,	  
	  });
});

router.post('/', function(req, res, next){
	console.log(reg.body.email);
	console.log(reg.body.password);
	//console.log(reg.body.file);
	res.redirect('/');
});

router.get('/add/:url/:name/:body?', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	//site:8129/add/index/welcome
	if(req.params.name !=''){
		var p_name = req.params.name;
	} else {
		var p_name = 'default name';
	}
	
	if(req.params.url !=''){
		var p_url = req.params.url;
	} else {
		var p_url = 'default url';
	}
	
	if(req.params.body !=''){
		var p_body = req.params.body;
	} else {
		var p_body = 'default body';
	}
	
		var themas = new Themas({
			url: p_url,
			name: p_name,
			body: p_body,
		})
	themas.save(function(err, user, affected){
		console.log('ok');
	});
});

module.exports = router;
