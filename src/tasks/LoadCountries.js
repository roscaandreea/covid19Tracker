import { features } from '../data/countries.json';

class LoadCountries{
    load =(setState) =>{
        setState(features);
    }
}

export default LoadCountries;