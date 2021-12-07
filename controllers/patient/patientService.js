const  pool = require('./config/db.config');
const  models = require('./models');



const patient = (req, res, next) => {
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}
