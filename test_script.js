const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const name = 'Rudd'
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE first_name  = $1::text OR last_name = $1::text`, [name],  (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }



     result.rows.forEach(person => (
       
    
         console.log(person.first_name + ' '+ person.birthdate)
     ))
    client.end();
  });
});


process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });
  var args = process.argv.slice(2);
// calls famous_people
// client.connect((err) => {
//     if (err) {
//       return console.error("Connection Error", err);
//     }
//     client.query("SELECT * FROM famous_people",  (err, result) => {
//       if (err) {
//         return console.error("error running query", err);
//       }
//        result.rows.forEach(person => (
//            console.log(person.first_name)
//        ))
//       client.end();
//     });
//   });