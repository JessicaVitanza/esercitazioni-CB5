import './section.scss';
import { Button } from '../../atoms/button/Button';

export const Section = () => {

    return (   
        <section className='Section'>

           <p>Make your choice:</p>   
           
           <Button aria-label="Do not touch!" 
              variant='primary'
              className='no-border'
              onClick={() => console.log('Ti avevo detto di non premere!')}
              >Don't click!</Button>
          
           <Button variant='secondary'
              className='no-border'
              onClick={() => console.log('Bravo/a! Hai cliccato sul bottone')}
              >Click here!</Button> 

        </section>
     
    )
}
