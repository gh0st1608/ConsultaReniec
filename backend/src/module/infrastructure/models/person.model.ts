import mongoose,  { Schema, Model, Document } from "mongoose";

class PersonModel {
  private readonly personSchema: Schema;

  constructor() {
    this.personSchema = new Schema({
      /*personId: {
        type: String,
        required: false,
        trim: true
      },
      */
      dni: {
        type: String,
        trim: true
      },
      ap_pat: {
        type: String,
        trim: true
      },
      ap_mat: {
        type: String,
        trim: true
      },
      nombres: {
        type: String,
        required: false,
      },
      ubigeo_dir:
      {
        type: String,
        required: false,
      },
      direccion:
      {
        type: String,
        required: false,
      }
     /*
      document: {
        type: String,
        required: true,
        trim: true
      },
      fatherLastname: {
        type: String,
        required: true,
        trim: true
      },
      motherLastname: {
        type: String,
        required: true,
        trim: true
      },
      */
      /*

      dateBirth: {
        type: String,
        required: false,
      },
      ubigeousBirth: {
        type: String,
        required: false,
      },
      ubigeousAddress: {
        type: String,
        required: false,
      },
      address: {
        type: String,
        required: false,
      },
      gender:{
        type: String,
        required: false,
      },
      maritalStatus:{
        type: String,
        required: false,
      },
      fatherName:{
        type: String,
        required: false,
      },
      motherName:{
        type: String,
        required: false,
      },
      transactionId: {
        type: String,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
      */
    },
    { 
      collection: 'person' 
    });
  }

  get model(): Model<any> {
    return mongoose.model("Person", this.personSchema);
  }
}

export default new PersonModel().model;
