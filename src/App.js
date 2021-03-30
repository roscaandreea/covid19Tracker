import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

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
        const fetchedData = await fetchData(country);
        //set state
        this.setState({data: fetchedData,country: country});

    }
    render(){
      const {data, country } = this.state.data;
      return(
          <div className={styles.container}>
              <Cards data={data}/>
              <CountryPicker handleCountryChange={ this.handleCountryChange }/>
              <Charts data={ data } country={ country } />
          </div>
      );
  }
}

export default App;