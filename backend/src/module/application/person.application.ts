import BrokerRepository from "../domain/broker.repository";
import Person, { STATUS } from "../domain/person";
import PersonRepository from "../domain/person.repository";
import EnvironmentVariables from "../../services/app.service";
export default class PersonApplication {
  readonly repositoryPerson: PersonRepository;
  readonly repositoryBroker: BrokerRepository;

  constructor(
    repositoryPerson: PersonRepository,
    repositoryBroker: BrokerRepository
  ) {
    this.repositoryPerson = repositoryPerson;
    this.repositoryBroker = repositoryBroker;
  }

  /*
  async create(person: Person): Promise<Person> {
    const result = await this.repositoryPerson.insert(person);
    await this.repositoryBroker.send({
      type: EnvironmentVariables.QUEUE_PERSON_CREATED_EVENT,
      data: result,
    });

    return result;
  }
  
  async update(transactionId: string, status: STATUS): Promise<string> {
    return this.repositoryPerson.update(transactionId, status);
  }
  
  async get(person: Person,status: STATUS): Promise<Person> {
    const result = await this.repositoryPerson.get(person,status);
    await this.repositoryBroker.send({
      type: EnvironmentVariables.QUEUFE_PERSON_CREATED_EVENT,
      data: result,
    });
    return result;
  }
*/
  async getPersons(props: {
    document: string;
    fatherLastname: string;
    motherLastname: string;
    names: string;
    ubigeousAddress: string;
    address: string;
    payload: string;
  }): Promise<Person | null> {
    const persons = await this.repositoryPerson.find(
      props.document,
      props.fatherLastname,
      props.motherLastname,
      props.names,
      props.ubigeousAddress,
      props.address,
      props.payload
    );
    await this.repositoryBroker.send({
      type: EnvironmentVariables.QUEUE_PERSON_CREATED_EVENT,
      data: persons,
    });
    return persons;
  }

  async receive() {
    await this.repositoryBroker.receive();
  }
}
