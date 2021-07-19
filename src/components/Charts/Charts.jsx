import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({data: {confirmed,recovered,deaths}, country }) =>{
    const [dailyData, setDailyData]= useState([]);
    useEffect(() =>{
        const fetchApi = async() =>{
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    },[]);
    const lineChart = (
        dailyData.length
        ? (
        <Line
            data = {{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: '#ff3333',
                    backgroundColor: 'rgba(255,0,0,0.6)',
                    fill: true,         
                }]
            }}
            options= {{
                title: {display: true, text:`Worldwide new cases confirmed vs deaths`},
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                          }
                    }]
                }
            }}
        />) : null
    );
    const barChart = (
        confirmed 
        ? (
            <Bar
                data= {{
                    labels: ['Infected','Recovered','Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#636efa','#03cc96','#ef553b'],
                        data: [confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text:`Current state in ${country}`},
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                              }
                        }]
                    }
                }}
             />
        ) : null
    )
    return(
        <div className={styles.container}>
            { country ? barChart : lineChart}
        </div>
    );
}
export default Charts;