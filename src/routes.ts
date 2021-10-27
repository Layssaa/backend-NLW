// import express from "express";
import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { CreateMessageController } from "./controllers/MessageController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticate";

const router = Router();

// function como middleware
router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated,new ProfileUserController().handle);



// migrations
export { router }