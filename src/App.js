import React from 'react';
import { Cards, Charts, CountryPicker} from './components';
import Charts2 from './components/Charts/Charts2';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
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
                    <div className={styles.item}>
                    <img className={styles.image} src={covidImage} alt="covid-19" />
                    
                    <CountryPicker handleCountryChange={ this.handleCountryChange }/>
                    </div>
                    <h2 className={styles.title}>current status</h2>
                    < div className={styles.doughnut}>
                        <h6 className={styles.titleDought}>Recovered vs deaths</h6>
                        <Charts2 data={data} />
                    </div>
              <div className={styles.item}>
              <Cards data={data}/>
              <Charts data={ data } country={ country } />
              </div>
              <div className={styles.itemCard}>
                <div className={styles.map}>
                    <Map />
                </div>
                <div className={styles.itemChart}>
                    <h4 className={styles.titleCase}>Confirmed Cases By Country</h4>
                    <Table country={ country } data={ data} />
                </div>
              </div>
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
