import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./services/routes";

dotenv.config();

const app = express();

// Middleware para lidar com CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Registrar as rotas
routes(app);

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

// Inicializar o servidor
const start = async () => {
    try {
        app.listen(3333, "0.0.0.0", () => {
            console.log(`Servidor rodando no http://localhost:3333`);
        });
    } catch (err) {
        console.error("Erro ao iniciar o servidor:", err);
        process.exit(1);
    }
};

start();
