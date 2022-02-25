import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTodo, NewTodo } from "../mock-api/mutate-todo";
import { getAllTodos } from "../mock-api/read-todos";

export const useListTodosQuery = () =>
  useQuery('todos', () => getAllTodos().then(response => response.data));

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newTodo: NewTodo) => 
      createTodo(newTodo),
      {
        onSuccess: newTodo => {
          queryClient.invalidateQueries('todos');
        }
      }
  )
}
