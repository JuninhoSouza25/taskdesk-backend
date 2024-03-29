const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    require: false
  },
  expiry: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Task = mongoose.model("Task", taskSchema);

module.exports = {
  Task,
  taskSchema
}