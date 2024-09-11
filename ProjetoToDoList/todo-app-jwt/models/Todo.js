import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    },
    title: {
      type: String,
    },
    status: {
      type: String,
      enum: ['A fazer', 'fazendo', 'feito'],
      default: 'A fazer',
    },
  });

  const Todo =  mongoose.models.Todo || mongoose.model('Todo', TaskSchema);

  export default todoSchema;
  
  