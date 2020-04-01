const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ticketSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 20
  },
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer"
  },
  department: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Department"
  },
  employee: {
    type: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
    require: true
  },
  //   employees: {
  //     type: [{ _id: { type: Schema.Types.ObjectId, ref: "Employee" } }],
  //     required: true,
  //     ref: "Employee"
  //   },
  isResolved: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    required: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
