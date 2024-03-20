// controllers/taskController.js

import { Task } from '../models/task.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

// Get all tasks
export const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// Add a new task
export const addTask = asyncHandler(async (req, res) => {
  const { text, targetTime, completed } = req.body;
  const task = await Task.create({ text, targetTime, completed });
  res.status(201).json(task);
});

// Delete a task
export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    throw new ApiError(404, 'Task not found');
  }
  await task.remove();
  res.status(200).json({ message: 'Task removed' });
});

// // Update a task
// export const updateTask = asyncHandler(async (req, res) => {
//   const { text, targetTime, completed } = req.body;
//   let task = await Task.findById(req.params.id);
//   if (!task) {
//     throw new ApiError(404, 'Task not found');
//   }
//   if (text) task.text = text;
//   if (targetTime) task.targetTime = targetTime;
//   if (completed !== undefined) task.completed = completed;
//   task = await task.save();
//   res.status(200).json(task);
// });
