module.exports = function(app) {

	var chatController = {
		index: function(req, res) {
			res.redirect('/');
		}
	};
	return chatController;

}