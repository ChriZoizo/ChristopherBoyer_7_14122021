const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'groupomania_db_dev'
  })

exports.getAllUsers = (req, res) => {
  connection.query('SELECT * from user LIMIT 1', (err, rows) => {
    if (err) throw err
    console.log('The data from user table are: \n', rows)
    res.status(200).json({ message: 'The data from USER table are: \n', rows })
  })
}

exports.getOneUser = (req, res) => {
  id = req.params.id
  connection.query('SELECT * FROM user WHERE id = id', (err, row) => {
    if (err) throw err
    res.status(200).json({ row })
    console.log(row)
  })
}
