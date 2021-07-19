import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import CovidMap from './CovidMap';
import Legend from './Legend';
import LoadCountries from '../../tasks/LoadCountries';
import legendItems from '../../entities/LegendItems';

const Map = () => {
    const [countries, setCountries] = useState([]);
    const legendItemsInReverse= [...legendItems].reverse();
    const load = () => {
        console.log("load");
        const loadCountries = new LoadCountries();
        loadCountries.load((countries) => setCountries(countries));
      };
    
      useEffect(load, []);
    return(
        <div>
            {countries.length === 0 ? (
            <Loading />
             ) : ( 
             <div>
                 <CovidMap countries={countries} />
                 <Legend legendItems={legendItemsInReverse}/>
             </div> 
            )}
        </div>
    );
}

export default Map;
