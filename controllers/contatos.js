module.exports = function(app) {

	var ContatoController = {
		index: function(req, res) {

			res.render('contatos/index', req.session);
		}
	};
	return ContatoController;
};