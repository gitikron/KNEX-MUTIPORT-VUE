/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('user', table => {
            table.increments('id').primary();
            table.string('userTokenId', 255)
            table.string('Profilename', 255)
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