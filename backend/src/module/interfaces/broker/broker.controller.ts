import PersonApplication from "../../application/person.application";

export default class BrokerController {
  constructor(private personApplication: PersonApplication) {}

  async listen() {
    await this.personApplication.receive();
    console.log("Broker listening");
  }
}
