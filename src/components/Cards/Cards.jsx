import React from 'react';
import  {Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) =>{
    if(!confirmed){
        return 'Loading....';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/* Start section for infected people */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className={styles.itemCard}>Infected:</Typography>
                        <Typography variant="h5">
                            <CountUp className={styles.infectCounter} start= {0} end= {confirmed.value} duration= {2.5} separator= ","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of active casses of COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* End section */}
                {/* Start section for recovered people */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className={styles.itemCard}>Recovered:</Typography>
                        <Typography variant="h5">
                            <CountUp className={styles.recCounter} start= {0} end= {recovered.value} duration= {2.5} separator= ","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of recoveries casses from COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* End section */}
                {/* Start section for dead people */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className={styles.itemCard}>Deaths:</Typography>
                        <Typography variant="h5">
                            <CountUp className={styles.deathCounter} start= {0} end= {deaths.value} duration= {2.5} separator= ","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* End section */}
            </Grid>
        </div>
    );
}
export default Cards;