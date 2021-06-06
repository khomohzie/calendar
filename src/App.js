import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Sidebar />

        {/* <Calendar /> */}
      </main>
    </div>
  );
}

export default App;
