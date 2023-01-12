import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';
import './blood.css';

export function BloodTypes() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BLOOD_TYPES);

    if (loading) return <div className='loading-blood'>Loading</div>;

    if (error) return `Errore!`;

    return (
    <section className='wrapper'>
        <div className='drop'></div>
        <div>
        <h1>BLOOD TYPES</h1>
        <h2 className='type'>Type: {data?.type}</h2>
        <h2 className='rh'>Rh: {data?.rh_factor}</h2>
        <h2 className='group'>Group: {data?.group}</h2>
        <button onClick={refetch}>Refetch!</button>
        </div>
        
    </section>)
}