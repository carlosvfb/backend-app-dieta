import fastify from "fastify";
import { routes } from "../src/services/routes";

const app = fastify({ logger: true });

// Registra as rotas
app.register(routes);

// Exporta para a Vercel
export default async (req, res) => {
    await app.ready();
    app.server.emit("request", req, res);
  };
