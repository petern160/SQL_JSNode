
exports.up = function(knex) {
    return knex.schema.createTable('milestones', function(table){
          table.string('description').notNullable();
          table.timestamps('date_achieved');
        })
      
  
};

exports.down = function(knex) {
    
    return  knex.schema.dropTable('milestones')
      
  
};
