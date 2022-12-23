import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { Text } from './atoms/text/Text';


function App() {
  return (
    <div className="App">
      <Text>ToDo list:</Text>
      <TodoList />
    </div>
  );
}

export default App;
