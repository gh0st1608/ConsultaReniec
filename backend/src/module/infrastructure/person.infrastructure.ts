import Person, { STATUS } from "../domain/person";
import PersonRepository from "../domain/person.repository";
import Model from "./models/person.model";



export default class PersonInfrastructure implements PersonRepository {
  
  /*async insert(person: Person): Promise<Person> {
    await Model.create(person);
    return person;
  }
  */
/*
  async find(where: { [s: string]: string | number },
    ): Promise<Person | null> {
    return await Model.find(where);
  }
  
*/
  async find(document: string, fatherLastname: string, motherLastname: string, names: string, ubigeousAddress: string, address: string, payload: string ): Promise<Person | null> {
    //envio 1 dato 
    if(payload === 'A'){
      var person: any = await Model.find({dni: document});     
    }
    //envio 3 datos 
    if(payload === 'B'){
      var person: any = await Model.find({ap_pat: fatherLastname,ap_mat: motherLastname, nombres: { $regex: names }});
      console.log('B')
    }

    if(document !== undefined && payload === 'D'){
      var person: any = await Model.find({dni: document});
    }
 /*
    //busqueda avanzada
    if(document == null && motherLastname == null && fatherLastname !== null && names !== null && ubigeousAddress !== null && address == null){
      var person: any = await Model.find({ap_pat: fatherLastname, nombres: { $regex: names }, ubigeo_dir: { $regex: ubigeousAddress }});     
      console.log('3 datos 2'); 
    }

    if(document == null && motherLastname == null && fatherLastname !== null && names !== null && ubigeousAddress !== null && address !== null){
      var person: any = await Model.find({ap_pat: fatherLastname, nombres: { $regex: names }, ubigeo_dir: { $regex: ubigeousAddress }, direccion: { $regex: address }});     
      console.log('4 datos '); 
    }

    if(document == null && motherLastname == null && fatherLastname == null && names == null && ubigeousAddress !== null && address !== null){
      var person: any = await Model.find({ubigeo_dir: { $regex: ubigeousAddress }, direccion: { $regex: address }});
    }

 */   
    
    return person;

    
  }
  
  
  async update(transactionId: string, status: STATUS): Promise<string> {
    await Model.findOneAndUpdate({ transactionId }, { status });
    return status;
  }
  
}
