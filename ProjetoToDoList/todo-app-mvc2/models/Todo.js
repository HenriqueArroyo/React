import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
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
  
  