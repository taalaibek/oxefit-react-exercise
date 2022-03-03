import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTodo, NewTodo, replaceTodo, deleteTodo } from "../mock-api/mutate-todo";
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

interface UpdatedTodo {
  id: string,
  updatedTodo: NewTodo
}

export const useEditTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (updatedTodo:UpdatedTodo) => 
      replaceTodo(updatedTodo.id, updatedTodo.updatedTodo),
      {
        onSuccess: updatedTodo => {
          queryClient.invalidateQueries('todos');
        }
      }
  )
}

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (id: string) => 
      deleteTodo(id),
      {
        onSuccess: newTodo => {
          queryClient.invalidateQueries('todos');
        }
      }
  )
}
