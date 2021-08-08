import React, { useState, useEffect } from 'react';
import  {Card, CardContent, Typography, Grid,Tooltip } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {fetchDailyData} from '../../api';
import { Doughnut } from 'react-chartjs-2';
import styles from './Charts.module.css';


const Charts2 = ({data: {recovered,deaths}}) =>{
    const [dailyData, setDailyData]= useState([]);
    useEffect(() =>{
        const fetchApi = async() =>{
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    },[]);
    const labels = ["Recovered", "Deaths"];
    const recoverData = recovered.value;
    const deathsData = deaths.value;
    const doughnutLine =(
         <Doughnut
                data ={{
                labels: labels,
                datasets: [{
                      data: [recoverData,deathsData],
                      label: 'Recovered',
                      backgroundColor: [
                             "#03cc96",
                             "#ef553b",
                            ],
                       }]
                }}
                options={{
                    legend: { display: true, position: "right" },
                    tooltips: {
                      backgroundColor: "#5a6e7f",
                    },
                  }}
    />
    );
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
        <div>
            { doughnutLine}
            <HtmlTooltip
                            title={
                                <React.Fragment>
                                <Typography color="inherit">Server Error</Typography>
                                         <em>{"Missing data from"}</em> <u>{'API.'}</u>
                               </React.Fragment>
                             } placement="top" enterDelay={500} leaveDelay={200}>
                        <Alert className={styles.error} severity="error"></Alert>
                        </HtmlTooltip>
        </div>
    );
}
export default Charts2;
     