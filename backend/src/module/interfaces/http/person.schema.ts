import joi from "joi";

export const personSchema = {
  PERSON: {
    body: joi.object({
      /*
      personId: joi.string(),
      dni: joi.string().allow(null, ''),
      ap_pat: joi.string().allow(null, ''),
      ap_mat: joi.string().allow(null, ''),
      */
      document: joi.string().allow(null, ''),
      fatherLastname: joi.string().allow(null, ''),
      motherLastname: joi.string().allow(null, ''),
      names: joi.string().allow(null, ''),
      ubigeousAddress: joi.string().allow(null, ''),
      address: joi.string().allow(null, ''),
      payload: joi.string().allow(null, ''),
      /*
      dateBirth: joi.string(),
      ubigeousBirth: joi.string(),
      gender: joi.string(),
      maritalStatus: joi.string(),
      fatherName: joi.string(),
      motherName: joi.string(),
      transactionId: joi.string().min(10).max(50),
      */
    }),
  },
};
