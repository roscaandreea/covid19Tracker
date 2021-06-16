import React from 'react';
import { Cards, Charts, CountryPicker} from './components';
import Map from './components/Map/Map';
import { fetchData } from './api';
import styles from './App.module.css';
import covidImage from './images/image.png';
import  {CardContent, Typography, Grid } from '@material-ui/core';


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
                <h1 className={styles.title}>current status</h1>
              <Cards data={data}/>
              <CountryPicker handleCountryChange={ this.handleCountryChange }/>
              <div className={styles.map}>
              <Map />
              </div>
              <Charts data={ data } country={ country } />
              <Grid item  xs={12} className={styles.card}>
                    <CardContent>
                        <Typography className={styles.textDate} varian="body2">Last Updated at:</Typography>
                        <Typography className={styles.dateTime} color="textSecondary">{new Date().toLocaleString()}</Typography>                       
                    </CardContent>
              </Grid>
          </div>
      );
  }
}

export default App;
