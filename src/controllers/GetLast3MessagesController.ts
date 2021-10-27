import { Request, Response } from "express";
import prismaClient from "../prisma/index";
import { GetLast3MessegesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
    async handle(req: Request, res: Response) {
        const service   = new GetLast3MessegesService();

        const result = await service.execute();

        return res.json(result)
    }
}


export { GetLast3MessagesController }