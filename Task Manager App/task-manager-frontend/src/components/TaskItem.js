export default function TaskItem({ task, onUpdate, onDelete }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onUpdate(task._id, { completed: !task.completed })}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title} — {task.description}
        </span>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </li>
    );
  }
  