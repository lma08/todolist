import './App.css';
import { List } from './List';

function App() {
  return(
    <div>
      <div className='container'>
        <h1>Do you have any plans for today?</h1>
      </div>
      <div>
        <List/>
      </div>
    </div>
  )
}

export default App;
