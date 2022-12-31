import mongoose from "mongoose";

const connectionString = "mongodb://localhost/mydb1";

export default async () => {
  try {
    mongoose.set("strictQuery", false);
    const dbConnection = await mongoose.connect(connectionString);
    console.log("connectado com sucesso ao mongodb");
    return dbConnection;
  } catch (error) {
    console.log(error);
  }
};
