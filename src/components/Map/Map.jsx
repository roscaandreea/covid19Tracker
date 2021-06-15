import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import CovidMap from './CovidMap';
import Legend from './Legend';
import LoadCountries from '../../tasks/LoadCountries';

const Map = () => {
    const [ countries, setCountries ]= useState([]);
    const load = () =>{
        const loadCountries= new LoadCountries();
        loadCountries.load(setCountries);
    };
    useEffect(load,[]);
    return(
        <div>
            { countries.length === 0 ? (
            <Loading />
             ) : ( 
             <div>
                 <CovidMap />
                 <Legend />
             </div> 
            )}
        </div>
    );
}

export default Map;