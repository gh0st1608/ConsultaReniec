export type STATUS = "PENDING" | "COMPLETED" | "CANCELLED";

export default class Person {
  readonly personId: string;
  readonly document: string;
  readonly fatherLastname: string;
  readonly motherLastname: string;
  readonly names: string;
  readonly dateBirth: string;
  readonly ubigeousBirth: string;
  readonly ubigeousAddress: string;
  readonly address: string;
  readonly gender: string;
  readonly maritalStatus: string;
  readonly fatherName: string;
  readonly motherName: string;
  readonly transactionId: string;
  readonly status: STATUS;
  
  constructor(
    personId: string,
    document: string,
    fatherLastname: string,
    motherLastname: string,
    names: string,
    dateBirth: string,
    ubigeousBirth: string,
    ubigeousAddress: string,
    address: string,
    gender: string,
    maritalStatus: string,
    fatherName: string,
    motherName: string, 
    transactionId: string,
    status: STATUS,
  ) {
    this.personId = personId;
    this.document = document;
    this.fatherLastname = fatherLastname;
    this.motherLastname = motherLastname;
    this.names = names;
    this.dateBirth = dateBirth;
    this.ubigeousBirth = ubigeousBirth;
    this.ubigeousAddress = ubigeousAddress;
    this.address = address;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
    this.fatherName = fatherName;
    this.motherName = motherName;
    this.transactionId = transactionId;
    this.status = status;

  }
}
