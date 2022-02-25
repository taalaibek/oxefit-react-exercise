import { List, Skeleton } from "antd";
import { useEffect } from "react";
import { useListTodosQuery } from "../../data/todos-data"
import { Todo } from "../../mock-api/todo";

export const TodoList = () => {
  const { data: todoList, isLoading: isTodoListLoading } = useListTodosQuery();

  useEffect(() => {
    
  }, [todoList]);

  return (
    <List 
      style={{width: 500}}
      loading={isTodoListLoading} 
      itemLayout="horizontal"
      dataSource={todoList}
    >
      {todoList?.map((todo: Todo, index) => {
        return (
          <List.Item key={todo.id}>
           <Skeleton title={false} loading={isTodoListLoading} active>
             <List.Item.Meta 
               avatar={index + 1}
               title={todo.description}
               description={todo.date}
             />
           </Skeleton>
         </List.Item>
        )
      })}
    </List>
  );
}