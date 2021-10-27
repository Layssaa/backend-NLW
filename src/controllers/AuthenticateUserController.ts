import { Request, response, Response } from "express"
import { AutheticateUserServices } from "../services/AuthenticateUserService"

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { code } = req.body;
        const service = new AutheticateUserServices();
        
        try {
            const result = await service.execute(code);
            return res.json(result);

        } catch (err) {
            return res.json(err.message)
        }

    }
}

export { AuthenticateUserController }