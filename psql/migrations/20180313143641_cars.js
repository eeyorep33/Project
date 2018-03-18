
exports.up = function (knex, Promise) {
      return knex.schema.createTableIfNotExists('cars', (table) => {
            table.increments('id').primary();
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
            table.string('make').notNullable();
            table.string('model').notNullable();
            table.integer('year').notNullable();
            table.integer('dealer_id').notNullable();
            table.foreign('dealer_id').references('dealers.id')

      })
};

exports.down = function (knex, Promise) {
      return knex.schema.dropTable('cars');
};
