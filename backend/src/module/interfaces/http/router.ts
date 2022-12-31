import express from "express";
import Controller from "./controller";
import PersonApplication from "../../application/person.application";
import PersonInfrastructure from "../../infrastructure/person.infrastructure";
import { ErrorsService } from "../../../services/errors.service";
import ValidatorsService from "../../../services/validators.service";
import BrokerInfrastructure from "../../infrastructure/broker.infrastructure";
import { personSchema } from "./person.schema";

const personInfrastructure = new PersonInfrastructure();
const brokerInfrastructure = new BrokerInfrastructure(personInfrastructure);
const application = new PersonApplication(personInfrastructure, brokerInfrastructure);
const controller = new Controller(application);

class Router {
  readonly router: express.Router;

  constructor() {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post(
      "/get-list-person",
      ValidatorsService.validate(personSchema.PERSON),
      ErrorsService.catchError(controller.getPersons)
    );
  }
}

export default new Router().router;
