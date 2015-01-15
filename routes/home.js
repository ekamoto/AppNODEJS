module.exports = function(app) {

	console.log("Rota home ok");
	var home = app.controllers.home;

	var bodyParser = require('body-parser');
	var urlencodedParser = bodyParser.urlencoded({ extended: false });
	
	app.get('/', home.index);
	app.post('/entrar', urlencodedParser, home.login);
	app.get('/sair', home.logout);
};