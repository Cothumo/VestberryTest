import { removeArgumentsFromDocument } from "@apollo/client/utilities";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styles from '../App.scss'

export default function Size({companies}) { 
  const count = companies.length
  const[numCompanies, setNumCompanies ] = useState(companies.length !==1 ? "companies": "company")
  const options = {
    plugins:{
    legend: {
      align: "left",
      position:"right",
      padding: 40,
        labels:{
          usePointStyle: true,
          padding:30,
        }
    }}}
  const[chartData, setChartData ] = useState({
    labels: companies.map((company) => company.name), 
    datasets: [{
      data: companies.map((company) => company.investmentSize),
      hoverOffset: 2,
      hoverBorderJoinStyle: 'round',
      backgroundColor: [
        'rgb(25, 99, 132)','#800000','(130, 255, 255) ',
        '#806750','#00FF00','(238, 130, 238)','(240, 198, 29)'  
      ],
      borderColor: ['#c0c0c0'],
      rotation:5,
      borderRadius:3,
      hoverBorderWidth:4,
      cutout:140,
      radius: 100
    }],
      
  })

  return (
  <div className={styles.size}>
    <h3>COMPANIES BY INVESTMENT SIZE</h3>
    <div className={styles.counter}>
      <h1 style={{marginTop: 250, marginLeft: 200, fontSize: 40}}>{count} </h1>
      <h1>{numCompanies}</h1>
      <div className={styles.graph}>
        <Doughnut 
          data={chartData}
          options={options}                
        /> 
      </div>
    </div>
  </div>
  )
}