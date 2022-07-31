import './App.css';
import Navbar from './components/molecules/navbar.component';
import HomePage from './modules/home/pages/home.page';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
