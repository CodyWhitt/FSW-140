const express = require('express');
const avengerRouter = express.Router();
const db = require('../src/db.js');


avengerRouter
    
    // all data from avengers table http://localhost:9000/avengers/get
    .get('/get', (req, res) => {
        let sql = 'SELECT * FROM avengers.avengers'
        db.query(sql, (err, result) => {
            if(err) console.log(err)
            res.send(result)
        })
    })

module.exports = avengerRouter; 