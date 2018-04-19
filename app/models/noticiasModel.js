function Noticias(){

}

Noticias.prototype.getNoticia = function(conexao,id_noticia, retorno){
	conexao.query('select * from noticias where id = '+ id_noticia.id, retorno);
}

Noticias.prototype.getNoticias = function(conexao,retorno){
	conexao.query('select * from noticias order by data_noticia DESC', retorno);
}

Noticias.prototype.salvarNoticia = function(noticia,conexao,retorno){
	conexao.query('insert into noticias set ?', noticia, retorno);
}

Noticias.prototype.getUltimasNoticias = function(conexao,retorno){
	conexao.query('Select * from noticias order by data_noticia DESC limit 5',retorno);
}

module.exports = function(){
	return Noticias;
}
