module.exports = {
    user: 'postgres',
    password: '2711',
    host: 'localhost',
<<<<<<< HEAD
    port: '5432', //localhost db port
=======
    port: '5000', //localhost db port
>>>>>>> master
    database: 'CovidManager',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
};