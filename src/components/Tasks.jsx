import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ onTaskClick, onDeleteTaskClick, tasks }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <Button
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md flex items-center gap-2 cursor-pointer ${
              task.isCompleted && "line-through"
            }`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </Button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
