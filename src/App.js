import './App.css';
import { useSelector } from 'react-redux';
import Addtask from './components/Addtask.js';
import Listtask from './components/Listtask';
import Edittask from './components/Edittask.js';




function App() {
  
  const users = useSelector(state => state.todoReducer.users);

  return (
    <div className="App">
      <h1>ToDo App</h1>

      


      <Listtask users={users} />

      
      <Addtask />
      
    </div>
  );
}

export default App;