import { Divider, Select } from 'antd';
import { TodoList } from './views/TodoList/TodoList';

import "./App.css"

const { Option } = Select;

function App() {
  return (
    <div id="App">
      <Select defaultValue="author" style={{ width: 120 }}>
        <Option value="author">Author</Option>
        <Option value="viewer">Viewer</Option>
      </Select>
      <Divider />
      <h1>My Awesome Todo List</h1>
      <TodoList />
    </div>
  )
}

export default App
