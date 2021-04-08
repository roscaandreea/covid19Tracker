import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import covidImage from './images/image.png';


class App extends React.Component{
    state ={ 
        data: {},
        country: ''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async(country) =>{
        //fetch data
        const fetchedData= await fetchData(country);
        console.log(fetchedData);
        //set state
        this.setState({ data: fetchedData, country: country });
    }

    render(){
      const data  = this.state.data;
      const country = this.state.country;
      return(
          <div className={styles.container}>
              <img className={styles.image} src={covidImage} alt="covid-19" />
              <Cards data={data}/>
              <CountryPicker handleCountryChange={ this.handleCountryChange }/>
              <Charts data={ data } country={ country } />
          </div>
      );
  }
}

export default App;