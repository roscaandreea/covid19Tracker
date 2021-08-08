import React from 'react';
import  {Card, CardContent, Typography, Grid,Tooltip } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
import Swal from 'sweetalert2';
import { style } from '@material-ui/system';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) =>{
    if(!confirmed){
        return 'Loading....';
    }
    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }))(Tooltip);
    return(
        <div className={styles.container}>
            <Grid container spacing={2}>
                {/* Start section for infected people */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom className={styles.itemCard}>Infected:</Typography>
                        <Typography variant="h5">
                            <CountUp className={styles.infectCounter} start= {0} end= { confirmed.value} duration= {2.5} separator= ","/>
                        </Typography>
                        <Typography className={styles.textContent} variant="body2">No of active casses of COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* End section */}
                {/* Start section for recovered people */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                    <HtmlTooltip
                            title={
                                <React.Fragment>
                                <Typography color="inherit">Server Error</Typography>
                                         <em>{"Missing data from"}</em> <u>{'API.'}</u>
                               </React.Fragment>
                             } placement="top" enterDelay={500} leaveDelay={200}>
                        <Alert className={styles.error} severity="error"></Alert>
                        </HtmlTooltip>
                        <Typography color="textSecondary" gutterBottom className={styles.itemCard}>Recovered: </Typography>
                        <Typography variant="h5">
                            <CountUp className={styles.infectCounter} start= {0} end= { recovered.value} duration= {2.5} separator= ","/>
                            
                        </Typography>
                        <Typography className={styles.textContent} variant="body2">No of recoveries casses from COVID-19</Typography>
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
                        <Typography className={styles.textContent} variant="body2">No of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* End section */}              
            </Grid>
        </div>
    );
}
export default Cards;