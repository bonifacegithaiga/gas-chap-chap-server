require("dotenv").config();
const express = require("express");
const mysql =require("mysql");
const app = express ();
const pool = mysql.createPool({
     host:process.env.DB_HOST,
     user:process.env.DB_USER,
     password:process.env.DB_PASSWORD,
     database:  process.env.DB_DATABASE                  
})
// const name = "boniface githaiga";

// app.get("/", (req, res ) => res.send("hello "+ name));

app.get("/api/gas", (req, res) => {
    pool.query("SELECT * FROM gas", (error, rows) =>{
        if (error) {
            return res.status(500).json({error});
        }
        res.json(rows);
        console.log(rows)
    });  
});
app.listen(9000, () => {console.log("App listening on port 9000")});