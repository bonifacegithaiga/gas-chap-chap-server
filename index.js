require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/api/home", (req, res) => {
    pool.query("select image_url,type_of_gas,price FROM gas", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
        console.log(rows)
    });
});
app.get("/api/customer", (req, res) => {
    pool.query("insert into clients (location,username,phone_no,gas_id) values ('kayole','jane',0700500879,1)", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows)
    });

});
app.get("/api/order", (req, res) => {
    pool.query("select g.image_url,g.type_of_gas,g.weight,c.username FROM gas AS g join clients AS c ON g.gas_id=c.gas_id", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        else {
            return res.json(rows)
        }
    });

})
app.get("/api/admin", (req, res) => {
    pool.query("", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        else {
            return res.json(rows)
        }
    });

})

app.listen(9000, () => { console.log("running server") })
