import Header from './components/Header/';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
          <Sidebar></Sidebar>
          <div className="page-content"></div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
