const express = require("express");
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})


//post data from register
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

//get data from db
app.get('/houses', (req, res) => {
    const sql = "SELECT * FROM houses";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})

app.post('/houses', (req, res) => {
    const sql = "INSERT INTO houses (`name`,`barangay`,`zone`, `municipal`, `province`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.name,
        req.body.barangay,
        req.body.zone,
        req.body.municipal,
        req.body.province
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Login success");
        } else {
            return res.json("no record");
        }
    })
})


app.listen(8081, ()=> {
    console.log("listening");
})