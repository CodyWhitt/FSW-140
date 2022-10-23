const mysql = require('mysql')

//Connect to DB
const db = mysql.createConnection({
    user     : 'root',
    password : '123456',
    database : 'avengers'
});

// export default db;
module.exports = db