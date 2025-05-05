import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...task, completed: false });
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title" value={task.title} onChange={e => setTask({ ...task, title: e.target.value })} required />
      <input type="text" placeholder="Description" value={task.description} onChange={e => setTask({ ...task, description: e.target.value })} />
      <button type="submit">Add Task</button>
    </form>
  );
}
