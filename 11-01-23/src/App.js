import './App.css';
import { Beers } from './fetch/components/beers/Beers';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';
import { Cards } from './fetch/components/credit-cards/Card';
import { Users } from './fetch/components/users/Users';

function App() {
  return (
    <div className="App">
      < BloodTypes />
      <hr />
      < Beers />
      <hr />
      < Users />
      <hr />
      < Cards />
    </div>
  );
}

export default App;