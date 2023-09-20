import './App.css';
import Tariff from './components/Tariff/Tariff';
import arrayOfTariffs from './data/data'

function App() {
  return (
    <div className="App">
      {arrayOfTariffs.map((tariff) => <Tariff info={tariff} key={tariff.id} />)}
    </div>
  );
}

export default App;
