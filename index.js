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

app.get("/api/gaschapchapdisplay",(req, res) => {
    pool.query("select image_url,type_of_gas FROM gas", (error , rows) => {
        if (error) {
            return res.status(500).json({error});
        }
        res.json(rows);
        console.log(rows)
    });
});


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
app.post("/api/admin", (req, res) =>{const {weight,type_of_gas,price,image_url} = req.body;
if(!weight||!type_of_gas||!price){
    return res.status(400).json({ error: "invalid payload"});
}

pool.query(
    "INSERT INTO gas (weight,type_of_gas,price,image_url) VALUES (?,?,?,?)",
    [weight,type_of_gas,price,image_url],
    (error, results) =>{
        if (error){
            return res.status(500).json({error});
        }

        res.json(results.insertId);

    }
);
});
// app.post("/api/customer", (req, res) => {
//     const{name,location,phone_no} =req.body;
// if(!name||!location||!phone_no){
//     return res.status(400).json({error: "invalid payload"});
// }
//     pool.query(
//         "INSERT INTO client (name,location,phone_no) VALUES (?,?,?)",
//         [name,location,phone_no],
//         (error, results) =>{
//         if (eror){
//             return res.status(500).json({error});
//         }
//         res.json(results.insertId);
//         })
app.post("/api/customer",(req,res)=>{
    const {username,location,phone_no,gas_id}=req.body;
    if(!username||!location||!phone_no||!gas_id){
        return res.status(400).json({error:"Invalid payload"});
    }
     pool.query("INSERT INTO clients(username,location,phone_no,gas_id) VALUES (?,?,?,?)",[username,location,phone_no,gas_id],(error,results)=>{
        if(error){
            return res.status(500).json({error});
        }
        res.json(results.insertId);

    })
})

app.put("/api/admin/:id", (req, res) => {
    const gas= req.body;
    const id=[req.params.id];

    if (!gas.type_of_gas||!gas.weight||!gas.price) {
        return res.status(400).json({ error: "Invalid paylooad"});

    }

    pool.query(
        "UPDATE gas SET type_of_gas =?,weight=?,price=? WHERE gas_id = ?",
        [gas.type_of_gas,gas.weight,gas.price, id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error});
            }
            res.json(results.changedRows);
        }
    );
});
app.listen(9000,()=>{
    console.log("bonnie is happy");
})



