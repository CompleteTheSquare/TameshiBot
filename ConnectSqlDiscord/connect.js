var mysql = require ("mysql");

var connection = mysql.createConnection({
    user:"root",
    password:[InsertPasswordHere],
    database: "pokemonDB",
    insecureAuth : true
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM PokemonTable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});