module.exports.noticia = function(app,req,res){
	var connection = app.config.dbConnection();//Caminho da conexao com o banco
	var noticiasModel = new app.app.models.noticiasModel;//Caminho da conexao com a query

	var id_noticia = req.query;

	console.log(id_noticia);

	noticiasModel.getNoticia(connection, id_noticia, function(error,results){
		res.render('noticias/noticia',{noticia:results});
	});
}

module.exports.noticias = function(app,req,res){
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.noticiasModel;

	noticiasModel.getNoticias(connection,function(error,results){
		res.render('noticias/noticias', {noticias: results});
	});
}
