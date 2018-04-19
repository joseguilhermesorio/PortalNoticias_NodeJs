module.exports.form_add_noticia = function(app,req,res){
	res.render('admin/form_add_noticia', {validacao: {}, noticias:{}})
}

module.exports.noticias_salvar = function(app,req,res){
	var noticias = req.body;

		//Validações de campos
		req.assert('titulo','O titulo é obrigatório').notEmpty();
		req.assert('resumo', 'O resumo é obrigatório').notEmpty();
		req.assert('resumo','O resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor', 'O campo Autor é obrigatório').notEmpty();
		req.assert('data_noticia','O campo data deve ser preenchido').notEmpty();

		var erros = req.validationErrors();

		if(erros){
			res.render('admin/form_add_noticia',{validacao: erros, noticias: noticias});
			return;
		}

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.noticiasModel;


		noticiasModel.salvarNoticia(noticias, connection,function(error,result){
			res.redirect('/noticias');
	})
}
