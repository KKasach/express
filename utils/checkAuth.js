module.exports = function(reg, res, next) {
	if(!reg.session.user){
		return redirect('/reg');
	}
	next();
};
	


