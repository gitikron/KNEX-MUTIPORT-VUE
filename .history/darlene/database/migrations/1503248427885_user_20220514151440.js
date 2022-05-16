'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
    up() {
        this.create('users', (table) => {
            table.increments('id').primary();
            table.string('email', 255).unique();
            table.string('password', 255)
            table.string('userTokenId', 255).unique();
            table.string('Profilename', 255).unique();
            table.string('displayImg', 255).unique();
            table.string('fullName', 255).notNullable().unique();
            table.string('form', 255).notNullable();
            table.timestamps(true, true);
        })
    }

    down() {
        this.drop('users')
    }
}

module.exports = UserSchema