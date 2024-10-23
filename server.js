import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"

const server = express()

const PORT = process.env.PORT || 8080

const ready = ()=> console.log("Server ready in port :"+PORT);

server.use(express.json())   //permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({ extended: true }))// permite por medio de la url recibir peticiones de parametros y querys
server.use(cors()) //seguridad
server.use(morgan('dev'))//registro de las peticiones

//Router

server.use("/api",indexRouter)

server.listen(PORT,ready)