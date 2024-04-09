// models/user.js
const mongoose = require('mongoose');

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  weight: Number, // Assuming weight is in kilograms
  height: Number, // Assuming height is in feet
  diet: {
    type: String,
    enum: ['veg', 'non-veg']
  },
  address: String,
  ethnicity: String,
  residence: String,
  country: String,
  state: String,
  city: String,
  familyDoctor: String,
  emergencyContactPersonName: String,
  emergencyContact: String, // Assuming emergency contact is a mobile number
});

// Create and export the User model based on the schema
module.exports = mongoose.model('User', userSchema);
