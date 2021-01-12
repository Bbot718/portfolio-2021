const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "password",
   database: "portfolio2021"
});



app.get('/', (req, res) => {
   const sqlInsert = "INSERT INTO `Test` (`Name`) VALUES ('whatevs');"   
   db.query(sqlInsert, (err, result) => {
      if (err) throw err;
      console.log("Connected!");
   });
})

app.listen(3006, () => {
   console.log('running on port 3006');
})

