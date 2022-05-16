/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('stock', table => {
            table.increments('id').primary();
            table.string('product', 255).notNullable().unique();
            table.string('img', 255).notNullable().unique();
            table.string('type', 255).notNullable();
            table.integer('amount', 255).notNullable().defaultTo(0)
            table.string('unit', 255).notNullable();
            table.integer('price', 255).notNullable().defaultTo(0)
            table.timestamps(true, true);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("stock")
};