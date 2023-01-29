import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import tarefasRoutes from './route/tarefas-routes.js';
import responsibleRoutes from './route/responsible-routes.js';
import statusRoues from './route/status-routes.js'

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/health', (req, res)=>{
    res.send("OK")
})
app.use(tarefasRoutes);
app.use(responsibleRoutes);
app.use(statusRoues);


const port = process.env.PORT;

app.listen(port, () => {console.log("ta executando..")})