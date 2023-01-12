import './App.css';
import { useState } from 'react';
import { Beers } from './fetch/components/beers/Beers';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';
import { Cards } from './fetch/components/credit-cards/Card';
import { Users } from './fetch/components/users/Users';
import { Counter } from './counter/components/counter/Counter';
import { ComponentSelector } from './select/Select';
import { DefaultComponent } from './select/Default';

const componentMap = {
  counter: Counter,
  bloodTypes: BloodTypes,
  beers:Beers,
  cards:Cards,
  users:Users,
  default: DefaultComponent
}

function App() {

  const [componentToRender, setComponentToRender] = useState('default');

  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">

      <ComponentSelector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />

    </div>
  );
}

export default App;