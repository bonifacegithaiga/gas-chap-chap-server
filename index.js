const express = require("express");
const mysql =require("mysql");
const app = express ();
const pool = mysql.createPool({
     host:"localhost",
     user: "root",
     password:"password",
     database: "gas_chap_chap"                     
})
const name = "boniface githaiga";

app.get("/", (req, res ) => res.send("hello "+ name));

app.get("/api/gas", (req, res) => {
    pool.query("SELECT id, name FROM gas", (error, rows) =>{
        if (error) {
            return res.status(500).json({error});
        }
        res.json(rows);
    });  
});
app.listen(9000, () => console.log("App listening on port 9000"));