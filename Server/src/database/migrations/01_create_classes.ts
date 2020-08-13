import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable() //Não pode ser vazio / nulo
            .references('id') //Referencia ao id
            .inTable('users') //Na tabela users
            .onUpdate('CASCADE') //Fala o que vai acontecer com esse id quase ele seja alterado na tabela principal (muda o id aqui tambem)
            .onDelete('CASCADE') //Case seja deletado tudo que tem esse id some junto (apagar tudo o que perdence aquele id)
    });
} //Cria uma tabela ou altera um campo

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
} // Volta algo que não deu certo