import React, { useState,useEffect} from 'react';
import { fetchCountries,  fetchDailyData } from '../../api';
import styles from './Table.module.css';

const Table = ({data: {confirmed}, country}) =>{
    const [ fetchedCountries, setFetchedCountries ] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() =>{
        const fetchAPI = async() =>{
            setFetchedCountries(await fetchCountries());
            setFetchedData(await fetchDailyData());
        }
        fetchAPI();
    },[setFetchedCountries,setFetchedData]);

    return (
        <div className={styles.table}>
            {fetchedCountries.map((country,confirmed) =>(
                <tr>
                    <td>{country}</td>
                    <td><strong>{confirmed}</strong></td>
                </tr>
            ))}
        </div>
    );
}
export default Table;