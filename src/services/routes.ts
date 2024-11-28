import express from "express";
 import { CreateNutritionController } from "../controllers/CreateNutritionControler";

 export function routes(app) {
    app.get("/teste", (req, res) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Carlos\",\n  \"sexo\": \"masculino\",\n  \"idade\": 19,\n  \"altura\": 1.86,\n  \"peso\": 97,\n  \"objetivo\": \"hipertrofia\",\n  \"refeições\": [\n    {\n      \"horario\": \"07:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        {\"nome\": \"Aveia em flocos\", \"quantidade\": \"30g\"},\n        {\"nome\": \"Iogurte grego desnatado\", \"quantidade\": \"150g\"},\n        {\"nome\": \"Frutas vermelhas\", \"quantidade\": \"100g\"},\n        {\"nome\": \"Amendoim\", \"quantidade\": \"30g\"}\n      ],\n      \"suplementos\": [\n        {\"nome\": \"Whey Protein\", \"dosagem\": \"30g\"}\n      ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        {\"nome\": \"Arroz integral\", \"quantidade\": \"150g\"},\n        {\"nome\": \"Frango grelhado\", \"quantidade\": \"200g\"},\n        {\"nome\": \"Salada verde com azeite e vinagre\", \"quantidade\": \"200g\"},\n        {\"nome\": \"Batata doce assada\", \"quantidade\": \"150g\"}\n      ],\n      \"suplementos\": []\n    },\n    {\n      \"horario\": \"18:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        {\"nome\": \"Batata doce\", \"quantidade\": \"100g\"},\n        {\"nome\": \"Salmão grelhado\", \"quantidade\": \"150g\"},\n        {\"nome\": \"Espinafre cozido\", \"quantidade\": \"100g\"},\n        {\"nome\": \"Arroz integral\", \"quantidade\": \"100g\"}\n      ],\n      \"suplementos\": [\n        {\"nome\": \"Whey Protein\", \"dosagem\": \"30g\"}\n      ]\n    },\n    {\n      \"horario\": \"22:00\",\n      \"nome\": \"Lanche noturno\",\n      \"alimentos\": [\n        {\"nome\": \"Queijo branco\", \"quantidade\": \"50g\"},\n        {\"nome\": \"Iogurte\", \"quantidade\": \"100ml\"},\n        {\"nome\": \"Frutas\", \"quantidade\": \"50g\"}\n      ],\n      \"suplementos\": []\n    }\n  ]\n}\n```\n"
        
        try {
            // Limpar o texto e transformá-lo em JSON
            const jsonObject = JSON.parse(responseText.trim());

            // Enviar como resposta
            return res.json({ data: jsonObject });
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Erro ao processar o JSON" });
        }
    })

    app.post("/create", async (req, res) => {
        try {
            // Criar o controlador e delegar a requisição
            const controller = new CreateNutritionController();
            await controller.handle(req, res);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Erro ao processar a solicitação" });
        }
    });

 }