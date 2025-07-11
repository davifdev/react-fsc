import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ onTaskClick, onDeleteTaskClick, tasks }) {
  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md cursor-pointer ${
              task.isCompleted && "line-through"
            }`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
            <ChevronRightIcon />
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
