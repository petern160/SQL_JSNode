
const firstName = process.argv[2]
const lastName = process.argv[3]
const birthDate = process.argv[4]

const settings = require("./settings"); // settings.json

var knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password :  settings.password,
      database : settings.database,
    }
  });

  

//   knex.select('*').from('famous_people')
//   .where('first_name', arg)
//   .orWhere('last_name', arg)
//   .asCallback(function(err, rows) {
//     if (err) return console.error(err);
//     console.log(rows)
//   })
//   .finally(function() {
//     knex.destroy();
//   })

   knex('famous_people').insert({ 
    'first_name': firstName ,
     'last_name': lastName ,
     'birthdate': birthDate 
    })
    .finally(function() {
            knex.destroy();
          })







