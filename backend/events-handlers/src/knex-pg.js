// Initialize Knex with PG

const knex = require('knex')({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['public'],
    pool: { min: 0, max: 7 },
});

export default knex;



