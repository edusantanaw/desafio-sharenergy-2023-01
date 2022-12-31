import { Schema, model } from "mongoose";

export default () => {
  const Client = model(
    "Client",
    new Schema({
      name: {
        required: true,
        type: String,
      },
      email: {
        required: true,
        type: String,
        unique: true,
      },
      cpf: {
        required: true,
        type: String,
      },
      phone: {
        required: true,
        type: Number,
      },
      address: {
        street: {
          required: true,
          type: String,
        },
        number: {
          required: true,
          type: Number,
        },
        city: {
          required: true,
          type: String,
        },
      },
    })
  );
  return Client;
};
