import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            <b>Sel's</b> Calendar
          </span>
        </div>

        <Calendar />
      </main>
    </div>
  );
}

export default App;
