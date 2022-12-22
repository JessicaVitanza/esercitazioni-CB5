import './App.css';
import { Button } from "./atoms/button/Button";
import { Text } from './atoms/text/Text';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Container } from './layout/container/Container';

function App() {

  const customColor = 'rgb(13, 209, 243)';

  console.clear()

  return (
    <div className="App">

      <Header/>

    <main>
      <Container withRow={0}>
          <Text as='h1'
                style={{ color: customColor }} 
                variant='title'
                >Make your choice:</Text></Container>

      <Button aria-label="Do not touch!" 
              variant='primary'
              className='no-border'
              onClick={() => console.log('Ti avevo detto di non premere!')}
              >Don't click!</Button>

      {/* 
      <Button aria-label="Useless button"
              variant='useless'
              >Useless button</Button> 
      */}

      <Button variant='secondary'
              className='no-border'
              onClick={() => console.log('Bravo/a! Hai cliccato sul bottone')}
              >Click here!</Button>
    </main>

       <Footer />

    </div>
  );
}

export default App;
