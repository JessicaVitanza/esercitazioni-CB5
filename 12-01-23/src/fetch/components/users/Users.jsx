import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';
import './users.css';

export function Users() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.USERS);

    if (loading) return <div className='loading-user'>Loading</div>;

    if (error) return `Errore!`;

    return (
    <section  className='users'>
        <div className="avatar avatar--default default--two"></div>
        <div>
        <h1>USERS</h1>
        <h2 class
        ='name'>Name: {data?.first_name}</h2>
        <h2 className='surname'>Surname: {data?.last_name}</h2>
        <h2 className='gender'>Gender: {data?.gender}</h2>
        <h2 className='birth'>Birth: {data?.date_of_birth}</h2>
        <h2 className='number'>Phone: {data?.phone_number}</h2>
        <h2 className='email'>Email: {data?.email}</h2>
        <button onClick={refetch}>Refetch!</button></div>
    </section>)

}