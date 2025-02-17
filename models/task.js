import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
});

const Task = mongoose.models.Tasks || mongoose.model("Tasks", taskSchema);

module.exports = {
  Task,
};
