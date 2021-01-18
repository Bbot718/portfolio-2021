const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "password",
   database: "portfolio2021"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/project', (req, res) => {
   const sqlSelect = "SELECT * FROM Projects ORDER BY id DESC";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})

app.get('/api/tag', (req, res) => {
   const sqlSelect = "SELECT * FROM Project_Tag  INNER JOIN Tag ON Tag.Tag_num = Project_Tag.project_num";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})

app.listen(3006, () => {
   console.log('running on port 3006');
})

