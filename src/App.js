import NavBar from './components/NavBar';
import News from './components/News';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <News pageSize = {5}/>
    </div>
  );
}

export default App;
