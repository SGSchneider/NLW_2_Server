import Knex from 'knex';


export async function up(knex: Knex){
    return knex.schema.createTable('connections', table =>{
        table.increments('id').primary();

        

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('cusers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}