import React from 'react'
import styles from '../App.scss'
import { useTheme } from 'hooks/useTheme'

export default function Sector({companies}) {
  const countFintech = (companies.filter((company) => company.sector === "Fintech")).length
  const countInsuretech = (companies.filter((company) => company.sector === "Insuretech")).length
  const countRoboadvisory = (companies.filter((company) => company.sector === "Roboadvisory")).length
  const countIot = (companies.filter((company) => company.sector === "IOT")).length
  // elegantnejšie ?
  const { color, changeColor } = useTheme()
  return (
    <div className={styles.sector} style={{ background: color }}> 
      <h3>COMPANIES BY SECTOR</h3> 
        <table>   
          <thead>                              
            <tr> 
              <td>{countFintech}</td>
              <td>{countInsuretech}</td>
              <td>{countRoboadvisory}</td>
              <td>{countIot}</td>
            </tr>   
          </thead>
          <thead>
            <tr> 
              <td>FINTECH</td>
              <td>INSURETECH</td>
              <td>ROBADVISORY</td>
              <td>IOT</td>
            </tr>   
          </thead>
          <thead >
            <tr>
            <td>
              <img src='../icons/notes.png'/> 
            </td>
            <td>
              <img src='../icons/pie.png'/>
            </td>
            <td>
              <img src='../icons/rob.png'/>
            </td>
            <td>
              <img src='../icons/bar.png'/>
            </td>   
            </tr>
          </thead>
        </table>
    </div>
  )
}
