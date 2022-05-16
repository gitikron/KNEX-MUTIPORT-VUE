/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('user', table => {
            table.increments('id').primary();
            table.string('userTokenId', 255).unique();
            table.string('Profilename', 255).unique();
            table.string('displayImg', 255);
            table.string('fullName', 255).notNullable().unique();
            table.string('form', 255).notNullable();
            table.timestamps(true, true);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable("user")
};