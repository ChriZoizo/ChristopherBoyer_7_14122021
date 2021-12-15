const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mysql = require('mysql')
const path = require('path')
const bodyParser = require("body-parser")
const userRoutes = require('../../P7_christopher_boyer/backend/routes/user')

dotenv.config()

const app = express()

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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






/*------------*/

/* Fonction TESTING */

/*  app.use((req,res, next) => {
     console.log(Date.now())
  next()
}) 
 */


/* Fonction test db user */

/* app.use((req, res) => {
    connection.query('SELECT * from user LIMIT 1', (err, rows) => {
      if (err) throw err
    console.log('The data from user table are: \n', rows) 
      res.status(200).json({ message: 'The data from USER table are: \n', rows}) 
    })
  }) */


/*------------*/






   /* chemin static pour Multer (images) */
   app.use(
       '/images',
       express.static(path.join(__dirname, 'images'))
     ) 


     app.use('/users', userRoutes)

module.exports = app
