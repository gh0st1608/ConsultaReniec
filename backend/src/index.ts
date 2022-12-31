import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";
import BrokerBootstrap from "./bootstrap/broker.bootstrap";
import BrokerController from "./module/interfaces/broker/broker.controller";
import PersonInfrastructure from "./module/infrastructure/person.infrastructure";
import BrokerInfrastructure from "./module/infrastructure/broker.infrastructure";
import PersonApplication from "./module/application/person.application";
import app from "./app";

const personInfrastructure = new PersonInfrastructure();
const brokerInfrastructure = new BrokerInfrastructure(personInfrastructure);
const personApplication = new PersonApplication(
  personInfrastructure,
  brokerInfrastructure
);

(async () => {
  try {
    const listPromises = [];

    const serverBootstrap = new ServerBootstrap(app);
    const databaseBootstrap = new DatabaseBootstrap();
    const brokerBootstrap = new BrokerBootstrap();
    const brokerController = new BrokerController(personApplication);

    listPromises.push(serverBootstrap.initialize());
    listPromises.push(databaseBootstrap.initialize());
    listPromises.push(brokerBootstrap.initialize());

    await Promise.all(listPromises);
    await brokerController.listen();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();