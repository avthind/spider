import { useEffect, useState } from 'react';
import API from '../utils/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleAdd = async (task) => {
    await API.post('/tasks', task);
    fetchTasks();
  };

  const handleUpdate = async (id, data) => {
    await API.put(`/tasks/${id}`, data);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
