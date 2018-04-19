module.exports.home = function(app,req,res){

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.noticiasModel;

	noticiasModel.getUltimasNoticias(connection,function(error,results){
		res.render('home/index',{noticias: results});
	});
}
