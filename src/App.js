import './App.css';
import Calendar from './components/Calendar';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RightWidget from './components/rightwidget/RightWidget'

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
