const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    min: 10
  },
  department: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Department"
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
