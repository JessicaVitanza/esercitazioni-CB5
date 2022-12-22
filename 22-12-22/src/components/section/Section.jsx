import './section.scss';
import { Button } from '../../atoms/button/Button';
import { Text } from '../../atoms/text/Text';

export const Section = () => {

    return (   
        <section className='Section'>

            <Text as='h1'
                  variant='title'
                  >Make your choice:</Text>   
           
           <div className='ButtonDiv'>

              <Button aria-label="Do not touch!" 
                      variant='primary'
                      className='no-border'
                      onClick={() => console.log('Ti avevo detto di non premere!')}
                      >Don't click!</Button>
          
              <Button variant='secondary'
                      className='no-border'
                      onClick={() => console.log('Bravo/a! Hai cliccato sul bottone')}
                      >Click here!</Button> 
            </div>

        </section>
    )
}
