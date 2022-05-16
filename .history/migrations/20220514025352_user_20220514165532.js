/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('user', table => {
            table.increments('id').primary();
            table.string('user_id', 255)
            table.string('display', 255)
            table.string('img', 255)
            table.string('fullName', 255)
            table.string('form', 255)
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