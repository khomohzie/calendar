import './App.css';
import Calendar from './components/Calendar';
import Header from './components/head/Header';
import RightWidget from './components/rightwid/RightWidget';
import Sidebar from './components/side/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Sidebar />
        <RightWidget />

        {/* <Calendar /> */}
      </main>
    </div>
  );
}

export default App;
