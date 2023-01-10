import { useEffect, useState } from 'react';
import './card.css';

const Card = () =>{

const API_ENDPOINT = {
    BASE: `https://random-data-api.com/api/v2`,
  
    get CREDIT_CARDS() {
      return `${this.BASE}/credit_cards`;
    }
  }
  
  function useRandomCards() {
    const [randomCard, setRandomCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchNewCard = () => {
      setLoading(true);
      setError(null);
  
      fetch(API_ENDPOINT.CREDIT_CARDS)
        .then(r => r.json())
        .then(card => {
          console.log({ card });
          setRandomCard(card)
        })
        .catch((err) => {
          console.error(err)
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  
    useEffect(() => {
      fetchNewCard();
    }, [])
  
    return { randomCard, loading, setLoading, error, fetchNewCard };
  }
  
  const { 
    randomCard, 
    loading, 
    error, 
    fetchNewCard 
  } = useRandomCards();

  if(loading){
    return `Caricamento in corso...`;
  }

  if(error || !randomCard){
    return `Errore di connessione al server, provare a ricaricare la pagina`;
  }
 
  const { credit_card_number, credit_card_expiry_date, credit_card_type} = randomCard;

return(
    <>
    <div className='card'>
    <h1 className='number'>{credit_card_number}</h1>
    <h2 className='date'>{credit_card_expiry_date}</h2>
    <h2 className='name'>{credit_card_type}</h2>
    </div>

    <button onClick={() => fetchNewCard()}>New Credit Card</button>
    </>
 )

}

export default Card;
