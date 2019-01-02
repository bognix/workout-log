exports.up = function(knex, Promise) {
	return knex.schema.createTable('machines', function(t) {
		t.increments('id').unsigned().primary();

		t.string('name').notNull();
		t.text('description').nullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('machines');
};
