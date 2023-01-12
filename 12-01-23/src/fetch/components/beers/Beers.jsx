import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';
import './beers.css';

export function Beers() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BEERS);

    if (loading) return <div className='loading-beers'>Loading</div>;

    if (error) return `Errore!`;

    return (
    <section className='beers'>
        
        <div className="container">
  <div className="mug">
    <div className="beer"></div>

  </div>
  <div className="bubble"></div>
  <div className="small-bubbles"></div>
  <div className="drip"></div>
</div>
<div><h1>BEERS</h1>
        <h2 className='brand'>Brand: {data?.brand}</h2>
        <h2 className='name'>Name: {data?.name}</h2>
        <h2 className='alcohol'>Alcohol: {data?.alcohol}</h2>
        <button onClick={refetch}>Refetch!</button></div>
    </section>)

}