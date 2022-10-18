const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    user     : 'root',
    password : '123456',
    database : 'avengers'
})


//Connect
db.connect((err) => {
    if(err){
        console.log(err)
    }
    console.log('MySql Connected...')
})

const app = express()

app.get('/additem')


// // Create DB
// app.get('/createdb', (req, res) => {
//         let sql = 'CREATE DATABASE nodemysql'
//         db.query(sql, (err, result) => {
//             if(err) console.log(err)
//             console.log(result)
//             res.send('Database created...')
//         }) 
// })

// // Create table
// app.get('/createpoststable', (req,res) => {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), BODY VARCHAR(255), PRIMARY KEY (id)'
//     db.query(sql, (err, result) => {
//         if (err) console.log(err)
//         res.send('Posts table created')
//     })
// })

app.listen('3000', ()=> {
  console.log('server started on port 3000')
})   