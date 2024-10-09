import { Schema, model, Document } from "mongoose";

// Interface for TypeScript
interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  userId: string; // For task ownership, assuming userId from authentication
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose Schema
const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"], // Only allow these values
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create the Mongoose model
const Task = model<ITask>("Task", taskSchema);

export default Task;
