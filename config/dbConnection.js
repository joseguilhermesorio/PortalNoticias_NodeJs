var mysql = require('mysql');

var connMysql = function(){
	return	mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: '1q2w3e4r!Q@W#E$R',
				database: 'portal_noticias'
			});
	}


module.exports = function(){
	return connMysql;
}