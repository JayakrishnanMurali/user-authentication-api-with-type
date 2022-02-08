import { Express, Request, Response } from "express";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
} from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import requireUser from "./middleware/requireUser";
import validateRequest from "./middleware/validateRequest";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  //Register
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  //Login
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );
  //Get User session

  //Logout
  app.delete("/api/sessions/", requireUser, invalidateUserSessionHandler);
}
