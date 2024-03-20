// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const BASE_URL = 'http://localhost:8000/api/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [taskInput, setTaskInput] = useState('');

  // Fetch tasks from the API
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getAllTasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Add a new task
  const addTask = async () => {
    if (taskInput.trim() === '') return;

    const targetTime = parseFloat(prompt('Enter target time for this task (in minutes):'));

    if (isNaN(targetTime) || targetTime <= 0) {
      alert('Please enter a valid time');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/addTask`, {
        description: taskInput,
        targetTime,
      });
      setTasks([...tasks, response.data]);
      setTaskInput('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${BASE_URL}/deleteTask/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Update a task
  const updateTask = async (taskId, actualTime) => {
    try {
      await axios.put(`${BASE_URL}/updateTask/${taskId}`, {
        actualTime,
      });
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, actualTime, completed: true } : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Handle task actions
  const handleTaskActions = (event, task) => {
    const target = event.target;

    if (target.classList.contains('deleteTask')) {
      deleteTask(task.id);
    } else if (target.type === 'checkbox') {
      const actualTime = prompt('Enter the time spent on task (in minutes):');

      if (!isNaN(actualTime) && actualTime > 0) {
        updateTask(task.id, actualTime);
      } else {
        alert('Please enter a valid time');
      }
    }
  };

  // Update progress
  const updateProgress = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    setProgress(Math.floor((completedTasks / tasks.length) * 100));
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => handleTaskActions(e, task)}
            />
            <label>{task.description}</label>
            <div className="taskDetails">
              Target Time: {task.targetTime} mins
              {task.actualTime && <div>Time Spent: {task.actualTime} mins</div>}
            </div>
            <button
              className="deleteTask"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>Progress: {progress}%</div>
      {tasks.length > 0 && (
        <button onClick={fetchTasks}>Refresh Tasks</button>
      )}
    </div>
  );
};

export default App;







