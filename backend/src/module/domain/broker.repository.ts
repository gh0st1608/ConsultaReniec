export default interface BrokerRepository {
  send(message: any): Promise<any>;
  receive(): Promise<any>;
}
