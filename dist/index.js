import cors from "cors";
import express from "express";
import tarefasRoutes from './route/tarefas-routes.js';
var app = express();
app.use(express.json());
app.use(cors());
app.get('/health', function (req, res) {
    res.send("OK");
});
app.use(tarefasRoutes);
var port = 4000;
app.listen(port);
