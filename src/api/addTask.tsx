import { TaskType } from '@/types/index'

type Props = {
  name: string;
}

export const addTask = async (props: Props): Promise<TaskType> => {
  const { name } = props;
  const newTask = {
    name,
    is_done: false,
  };

  const res = await fetch("http://localhost:3010/tasks", {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to add task: ${res.statusText}`);
  }

  const task = await res.json();
  return task;
}
