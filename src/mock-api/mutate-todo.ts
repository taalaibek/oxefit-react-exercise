import axios, { AxiosResponse } from "axios";
import { mockApi, endpoint } from "./mock-api";
import { Todo } from "./todo"
import todosMap from "./mock-data"
import { v4 as uuidv4 } from "uuid";

export interface NewTodo {
  description: string,
  date?: string,
  complete: boolean
}

export const createTodo = (todoParams: NewTodo): Promise<AxiosResponse<Todo>> => {
  const id: string = uuidv4();
  const newTodo: Todo = {id, ...todoParams};

  todosMap.set(id, newTodo);

  mockApi.onPost(endpoint, newTodo).reply(201, newTodo);

  return axios.post<Todo>(endpoint, newTodo);
}

export const replaceTodo = (id: string, todoUpdates: NewTodo): Promise<AxiosResponse<Todo>> => {
  const existingTodo = todosMap.get(id);
  if (!existingTodo) {
    mockApi.onPut(endpoint + '/' + id, todoUpdates).reply(404, { message: "TodoNotFound" });
  } else {
    const updatedTodo = { id: existingTodo.id, ...todoUpdates};
    todosMap.set(id, updatedTodo);
    mockApi.onPut(endpoint + '/' + id, todoUpdates).reply(200, todosMap.get(id));
  }

  return axios.put<Todo>(endpoint + '/' + id, todoUpdates);
}

export const deleteTodo = (id: string) => {
  const existingTodo = todosMap.get(id);

  if (!existingTodo) {
    mockApi.onDelete(endpoint + '/' + id).reply(404, { message: "TodoNotFound" });
  } else {
    todosMap.delete(id);
    mockApi.onDelete(endpoint + '/' + id).reply(204, { message: "TodoRemoved" });
  }

  return axios.delete(endpoint + '/' + id);
}
