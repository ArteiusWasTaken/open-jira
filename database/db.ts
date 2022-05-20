import mongoose from "mongoose";

const mongooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConnected === 1) {
      console.log("Usando conexión anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect("....");
  mongooConnection.isConnected = 1;
};

export const disconnect = async () => {
  await mongoose.disconnect();
  console.log("Desconectado de MongoDB");
};
