import React, { useState, useEffect } from 'react';
import Loading from './Loading'

const Map = () => {
    const [ countrie, setCountries ]= useState([]);
    return(
        <div>
            <Loading />
        </div>
    );
}

export default Map;