const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get("/", async (req, res, next) => {
    try {
        res.json(await db("accounts").select())
    } catch (err) {
        next(err)
    }
})

server.get("/:id", async (req, res, next) => {
    try {
        res.json(await db("accounts").where("id", req.params.id).select())
    } catch (err){
        next(err)
    }
})


module.exports = server;