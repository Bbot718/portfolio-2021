const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

let numberOfProjects;



const db = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "password",
   database: "portfolio2021"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//Get Menu
app.get('/api/menu', (req, res) => {
   const sqlSelect = "SELECT * FROM Menu";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})

//Get All Projects
app.get('/api/project', (req, res) => {
   const sqlSelect = "SELECT * FROM Projects ORDER BY id DESC";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})

//Get All Projects
app.get('/api/tag', (req, res) => {
   const sqlSelect = "SELECT * FROM Project_Tag INNER JOIN Tag ON Project_Tag.tag_num = Tag.Tag_num";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})


//Get All exhibition
app.get('/api/exhibition', (req, res) => {
   const sqlSelect = "SELECT * FROM exhibiton ORDER BY date DESC";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})

//Get All Location
app.get('/api/location', (req, res) => {
   const sqlSelect = "SELECT * FROM exhibition_location INNER JOIN location ON exhibition_location.location_num = location.id";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   })
})

db.query("SELECT * FROM Projects ORDER BY id DESC", function(err, results) {
   for(let i = 0; i < results.length; i++){

      app.get('/api/exhibition_' + i, (req, res) => {
         const sqlSelect = "SELECT * FROM exhibition_project INNER JOIN exhibiton ON exhibiton.id = exhibition_project.exhibition_num WHERE exhibition_project.project_num =" + i + " ORDER BY exhibiton.date DESC";
         db.query(sqlSelect, (err, result) => {
            res.send(result);
         })
      })

      //Get specific Tag
      app.get('/api/project_'+ i, (req, res) => {
         const sqlSelect = "SELECT * FROM Projects WHERE id = " + i;
         db.query(sqlSelect, (err, result) => {
            res.send(result);
         })
      })

      //Get specific Menu
      app.get('/api/tag_'+ i, (req, res) => {
         const sqlSelect = "SELECT * FROM Tag INNER JOIN Project_Tag ON Tag.Tag_num = Project_Tag.tag_num WHERE  Project_Tag.project_num = " + i;
         db.query(sqlSelect, (err, result) => {
            res.send(result);
         })
      })
   }
});







app.listen(3006, () => {
   console.log('running on port 3006');
})

