import cors from "cors";
import express from "express";
import tarefasRoutes from './route/tarefas-routes.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req, res)=>{
    res.send("OK")
})
app.use(tarefasRoutes);


const port = 4000;

app.listen(port, () => {console.log("ta executando..")})