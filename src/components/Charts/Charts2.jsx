import React, { useState, useEffect } from 'react';
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
    const recoverData = recovered.value === 0 ? 'Unexpected 0 value at recovered casses' : recovered.value;
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
    return(
        <div>
            { doughnutLine}
        </div>
    );
}
export default Charts2;
     