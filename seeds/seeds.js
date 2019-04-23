
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('milestones').del()
    .then(function () {
      // Inserts seed entries
      return knex('milestones').insert([
        {id: 1, description: 'went to the moon'},
        {id: 2, description: 'won a gold medal'},
        {id: 3, description: 'best actor award'}
      ]);
    });
};
