const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://arshad:12345680@cluster0.hmtt5yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',

    );
    console.log(`MongoDB Connected... ${connectDB}` );
  } catch (err) {
    console.error('Connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;