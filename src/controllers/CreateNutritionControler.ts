import { Request, Response } from "express";
import { CreateNutritionService } from "../services/CreateNutritionService";

export interface DataProps {
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    objective: string;
    level: string;
}

class CreateNutritionController {
    async handle(request: Request, response: Response) {
        const { name, weight, height, age, gender, objective, level } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        try {
            const nutrition = await createNutrition.execute({ name, weight, height, age, gender, objective, level });
            return response.status(201).json(nutrition);
        } catch (err) {
            console.error(err);
            return response.status(500).json({ error: "Erro ao criar nutrição" });
        }
    }
}

export { CreateNutritionController };
