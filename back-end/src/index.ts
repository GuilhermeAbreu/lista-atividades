import cors from 'cors';
import express from "express";
import { ConfigurationSystem } from "./config/Config";
import Routers from "./Routes";

const app = express()
app.use(express.json())
app.use(cors())
app.use(Routers)
app.listen(ConfigurationSystem.portApi, ()=>{
    console.info(`Rodando na Porta ${ConfigurationSystem.portApi}`)
})