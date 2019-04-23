
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('milestones').del()
    .then(function () {
      // Inserts seed entries
      return knex('milestones').insert([
        { description: 'went to the moon',
        date_achieved: '1993-12-12'},
        
         { description: 'won a gold medal'},
        { description: 'best actor award'}
      ]);
    });
};
