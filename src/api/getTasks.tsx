import { TaskType } from '@/types/index'

export const getTasks = async (): Promise<TaskType[]> => {
  const res = await fetch("http://localhost:3010/tasks", {
    cache: 'no-store',
  })
  const todos = await res.json()
  return todos
}
