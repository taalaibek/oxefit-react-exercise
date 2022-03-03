import { List, Skeleton, Form, Button, Input } from "antd";
import { useEffect, useState } from "react";
import { useListTodosQuery, useCreateTodoMutation, useDeleteTodoMutation, useEditTodoMutation } from "../../data/todos-data"
import { Todo } from "../../mock-api/todo";
import Icon, { CheckOutlined, EditOutlined, DeleteOutlined, CloseOutlined, SaveOutlined } from '@ant-design/icons';

export const TodoList = ({userRole}:any) => {
  const { data: todoList, isLoading: isTodoListLoading } = useListTodosQuery();
  const [newTodo, setNewTodo] = useState("");
  const [editedTodo, setEditedTodo] = useState<Todo|null>(null);

  useEffect(() => {

  }, [todoList]);

  const addTodo = useCreateTodoMutation();
  const editTodo = useEditTodoMutation();
  const deleteTodo = useDeleteTodoMutation();

  return (
    <>
      {
        userRole === "author" && 
        <Form layout="inline" onFinish={() => {
          addTodo.mutate({description: newTodo, complete: false})
          setNewTodo("") 
        }}>
          <Form.Item style={{ width: 365 }} >
              <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          </Form.Item>
          <Form.Item>
              <Button type="primary" htmlType="submit">Add Todo</Button>
          </Form.Item>
        </Form>
      }
      <List 
        style={{width: 500}}
        loading={isTodoListLoading} 
        itemLayout="horizontal"
        dataSource={todoList}
      >
        {todoList?.map((todo: Todo, index) => {
          return (
            <List.Item 
              key={todo.id} 
              actions={
                userRole === "author" ? editedTodo?.id===todo.id ?
                [  
                  <Button shape="circle" icon={<CloseOutlined />} size="small" onClick={() => setEditedTodo(null)} />, 
                  <Button shape="circle" icon={<SaveOutlined />} size="small" onClick={() => { 
                    todo.date ? editTodo.mutate({id:todo.id, updatedTodo: {description: editedTodo.description, date: todo.date, complete: todo.complete}}) : editTodo.mutate({id:todo.id, updatedTodo: {description: editedTodo.description, complete: todo.complete}})
                    setEditedTodo(null)
                  }} />
                ] : 
                [
                  <Button shape="circle" icon={<CheckOutlined />} size="small" onClick={() => {
                    todo.date ? editTodo.mutate({id:todo.id, updatedTodo: {description: todo.description, date: todo.date, complete: !todo.complete}}) : editTodo.mutate({id:todo.id, updatedTodo: {description: todo.description, complete: !todo.complete}})
                  }
                  } />,
                  <Button shape="circle" icon={<EditOutlined />} size="small" onClick={() => setEditedTodo(todo)} />, 
                  <Button shape="circle" icon={<DeleteOutlined />} size="small" danger onClick={() => deleteTodo.mutate(todo.id) } />
                ] : []
              }
            >
            <Skeleton title={false} loading={isTodoListLoading} active>
              <List.Item.Meta 
                avatar={index + 1}
                title={todo.complete ? <del>{todo.description}</del> : editedTodo?.id===todo.id ? <Input value={editedTodo.description} onChange={(e) => { setEditedTodo({id: todo.id, description: e.target.value, date: todo.date, complete: todo.complete}) } } /> : todo.description }
                description={todo.date}
              />
            </Skeleton>
          </List.Item>
          )
        })}
      </List>
    </>
  );
}