import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
<<<<<<< HEAD
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = () =>{
    const [ fetchedCountries, setFetchedCountries ] = useState([]);
    useEffect(() =>{
        const fetchAPI = async() =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);

    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect className={styles.NativeSelect}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
=======
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) =>{
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async() =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchApi();
    },[setFetchedCountries]);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option key ={i} value={country}>{country}</option>)}
>>>>>>> 1a23a10d29ecb9c80edb4374654554305299f558
            </NativeSelect>
        </FormControl>
    );
}
export default CountryPicker;