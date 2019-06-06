const express = require("express");
const app = express ();
const name = "boniface githaiga";

app.get("/", (req, res ) => res.send("hello "+ name));
app.listen(9000, () => console.log("App listening on port 9000"));