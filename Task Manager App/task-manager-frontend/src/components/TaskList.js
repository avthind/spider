import API from '../api';

export default function TaskList({ tasks, refresh }) {
  const toggleCompletion = async (task) => {
    await API.put(`/tasks/${task._id}`, { ...task, completed: !task.completed });
    refresh();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    refresh();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
          <button onClick={() => toggleCompletion(task)}>{task.completed ? 'Undo' : 'Complete'}</button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
