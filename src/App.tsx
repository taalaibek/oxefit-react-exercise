import { useState } from 'react';
import { Divider, Select } from 'antd';
import { TodoList } from './views/TodoList/TodoList';
import "./App.css"

const { Option } = Select;

function App() {
  const [userRole, setUserRole] = useState("author");
  return (
    <div id="App">
      <Select value={userRole} style={{ width: 120 }} onChange={(value) => setUserRole(value)} >
        <Option value="author">Author</Option>
        <Option value="viewer">Viewer</Option>
      </Select>
      <Divider />
      <h1>My Awesome Todo List</h1>
      <TodoList userRole={userRole} />
    </div>
  )
}

export default App
