import { Express, Request, Response } from "express";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  //Register

  //Login

  //Get User session

  //Logout
}