import { useState } from 'react';
import API from '../api';

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!title.trim()) {
      setErrorMsg('Task title is required.');
      return;
    }

    try {
      await API.post('/tasks', { title, description });
      setTitle('');
      setDescription('');
      setErrorMsg('');
      onTaskCreated(); // Refresh task list
    } catch (err) {
      if (err.response?.data?.errors) {
        const messages = err.response.data.errors.map(e => e.msg).join('\n');
        setErrorMsg(messages);
      } else {
        setErrorMsg('Failed to create task. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
      <button type="submit">Add Task</button>
    </form>
  );
}
