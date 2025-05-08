import { useState } from 'react';
import API from '../api';

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/tasks', { title, description, completed: false });
    setTitle('');
    setDescription('');
    onTaskCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}
