import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import log from "../logger";

const requireUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = get(req, "user");

  log.info("Checking...", user);

  if (!user) {
    log.error("User Not found");
    return res.sendStatus(403);
  }

  return next();
};

export default requireUser;
