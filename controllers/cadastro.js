module.exports = function(app) {
	console.log("Cadastro Controller ok");
	var CadastroController = {
		index: function(req, res) {
			res.render('cadastro/index');
		}
	};
	return CadastroController;
};
