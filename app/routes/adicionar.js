module.exports = function(app){
	app.get('/adicionar', function(req,res){
		app.app.controllers.adicionar.form_add_noticia(app,req,res);
	});

	app.post('/noticias/salvar', function(req,res){
		app.app.controllers.adicionar.noticias_salvar(app,req,res);
	});

}