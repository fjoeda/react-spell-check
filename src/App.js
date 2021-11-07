import './App.css';
import Navbar from './components/Navbar';
import SpellInput from './components/SpellInput';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className="w-full max-w-6xl px-6 py-4 mx-auto bg-white">
        <SpellInput/>
      </section>
    </div>
  );
}

export default App;
