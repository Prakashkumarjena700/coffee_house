const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`DB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(`Connection Err: ${err}`);
  }
};

module.exports = ConnectDB;
