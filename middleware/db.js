/*requiring mssql node modules */
 var sql = require("mssql");
var method = db.prototype;

function db() {
    /*
    	creating MySql database connection
	*/

      // config for your database
      var config = {
          user: 'aguaichat',
          password: 'aguaichat',
          server: 'foxglove.arvixe.com',
          database: 'aguaichat'
      };
      var conn = new sql.Connection(config);
        return conn.connect().then(function () {
          return conn;
         })
         .catch(function (err) {
             console.log(err);
         });
}
method.getcon = function() {
	return "kumar";
};

module.exports = db;
