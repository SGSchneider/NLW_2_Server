import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite 3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,

})


export default db;