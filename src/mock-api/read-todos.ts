import axios, { AxiosResponse } from "axios";
import { Todo } from "./todo"
import todosMap from "./mock-data"
import { mockApi, endpoint } from "./mock-api";

export const getAllTodos = (): Promise<AxiosResponse<Todo[]>> => {
  const todos = [...todosMap.values()];

  mockApi.onGet(endpoint).reply(200, todos);
  
  return axios.get<Todo[]>(endpoint);
}

export const getTodoById = (id: string): Promise<AxiosResponse<Todo>> => {
  const todo = todosMap.get(id) ?? null;

  if (todo !== null) {
    mockApi.onGet(endpoint + '/' + id)
    .reply(200, todo);
  } else {
    mockApi.onGet(endpoint + '/' + id)
    .reply(404, { message: "TodoNotFound" })
  }
  
  return axios.get<Todo>(endpoint + '/' + id);
}
