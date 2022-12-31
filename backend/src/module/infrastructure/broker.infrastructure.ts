import BrokerRepository from "../domain/broker.repository";
import BrokerBootstrap from "../../bootstrap/broker.bootstrap";
import EnvironmentVariables from "../../services/app.service";
import ReceiveMessageService from "./services/receive-messages.service";
import PersonInfrastructure from "./person.infrastructure";
import UtilsBrokerService from "./services/utils-broker.service";

console.log('Entro al broker infraestructure');

export default class BrokerInfrastructure implements BrokerRepository {
  constructor(private readonly personInfrastructure: PersonInfrastructure) {}

  async send(message: any): Promise<any> {
    const channel = BrokerBootstrap.Channel;
    const queueName = EnvironmentVariables.QUEUE_PERSON_CREATED_EVENT;
    await channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
  }

  async receive(): Promise<any> {
    const channel = BrokerBootstrap.Channel;
    const exchangeName = EnvironmentVariables.EXCHANGE_PERSON_COMPLETED_EVENT;
    const exchangeType = "fanout";

    await ReceiveMessageService.confirmedPerson(
      channel,
      this.consumerPersonConfirmed.bind(this),
      exchangeName,
      exchangeType
    );

    await ReceiveMessageService.rejected(
      channel,
      this.consumerReject.bind(this),
      "*.error"
    );
  }

  async consumerPersonConfirmed(message: any) {
    const content = JSON.parse(message.content.toString());

    console.log("Person confirmed: ", content);

    await this.personInfrastructure.update(content.transactionId, "COMPLETED");

    UtilsBrokerService.confirmMessage(BrokerBootstrap.Channel, message);
  }

  async consumerReject(message: any) {
    const content = JSON.parse(message.content.toString());

    await this.personInfrastructure.update(content.transactionId, "CANCELLED");
    UtilsBrokerService.confirmMessage(BrokerBootstrap.Channel, message);
  }
}
