const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'groupomania_db_dev'
  })
  
  connection.connect(err => {
    if (err) throw err
    console.log('MySQL server connection is OK !')
})