module.exports = function(app) {
	console.log("Rota cadastro ok");
	
	var cadastro = app.controllers.cadastro;
	app.get('/cadastro', cadastro.index);
};
