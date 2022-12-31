import { Router } from "express";
import adapt from "../adapter/express-adapter";
import { makeCreateCLientController } from "../factory/controller/createClient";
import { makeLoadAllClient } from "../factory/controller/loadAllClient";
import { makeLoadClientById } from "../factory/controller/loadClientById";
import { makeUpdateCLientController } from "../factory/controller/updateClientController";

export default (router: Router) => {
  router.post("/client", adapt(makeCreateCLientController()));
  router.put("/client", adapt(makeUpdateCLientController()));
  router.get("/clients", adapt(makeLoadAllClient()));
  router.get("/client/:id", adapt(makeLoadClientById()));
};
