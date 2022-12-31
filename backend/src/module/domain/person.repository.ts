import Person, { STATUS } from "./person";

export default interface PersonRepository {
  //insert(person: Person): Promise<Person>;
  //find(where: { [s: string ]: string }): Promise<Person | null>;
  find(document: string, fatherLastname: string, motherLastname: string, names: string, ubigeousAddress: string, address: string, payload: string): Promise<Person | null>;
  
  //getPersons(document: string, fatherLastname: string, motherLastname: string): Promise<Person>;
  //update(transactionId: string, status: STATUS): Promise<string>;
}
