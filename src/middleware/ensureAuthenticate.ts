import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        res.status(401).json({
            errorCode: "token.invalid"
        });
    }
    // Bearer 1111111111111111111111111
    //[0] Bearer ==== antes da , (ignorado);
    //[1] 1111111111111111111111111 ====== token;

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
        req.user_id = sub;
        return next();

    } catch (error) {
        return res.status(401).json({ errorCode: "token.expered" })
    }
}
