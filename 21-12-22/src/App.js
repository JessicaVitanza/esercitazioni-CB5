import './App.css';
import { Button } from "./components/button/Button";
import { Text } from './components/text/Text';

function App() {

  const customColor = 'darkblue';

  console.clear()

  return (
    <div className="App">
      <Text style={{ color: customColor }} 
            as = 'h1'
            variant='title'>Hello world!</Text>

      <Button aria-label="Do not touch!" 
              variant='primary'
              className='no-border'
              onClick={() => console.log('Ti avevo detto di non premere!')}
              >Don't click!</Button>

      <Button aria-label="Useless button"
              variant='useless'
              >Useless button</Button>

      <Button variant='secondary'
              className='no-border'
              onClick={() => console.log('Bravo/a! Hai cliccato sul bottone')}
              >Click here!</Button>
    </div>
  );
}

export default App;

