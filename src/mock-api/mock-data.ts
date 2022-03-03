import { Todo } from "./todo";

const defaultTodos: Array<Todo> = [
  {
    id: "e56e8eef-a46f-4129-b271-7adcf4663c7a",
    description: "Workout",
    date: (new Date(2022, 2, 28, 8, 0)).toLocaleString(),
    complete: false
  },
  {
    id: "e05d7f51-1e50-431f-8a35-8ba755facf02",
    description: "Get groceries",
    complete: false
  } 
] 

const todosMap: Map<string, Todo> = new Map();

defaultTodos.forEach(e => todosMap.set(e.id, e));

export default todosMap;