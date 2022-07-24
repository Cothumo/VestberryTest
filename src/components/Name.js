import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../App.scss'

export default function Name({companies}) {
  
    return (
    <div className={styles.name}>        
            <table >
                <thead>
                    <tr>
                        <th>COMPANY NAME</th>
                        <th>STAGE</th>
                        <th>SECTOR</th>
                        <th>INVESTMENT SIZE</th>
                    </tr>
                </thead>
                <tbody>
                {companies.map((company) => (
                    <tr key={company.id}>
                        <td>{company.name}</td>
                        <td>{company.stage}</td>
                        <td>{company.sector}</td>
                        <td>{parseFloat(company.investmentSize).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} €</td>
                    </tr>
                ))}    
                </tbody>  
            </table>
            <Link to="/create">
                <button >Add new company</button>
            </Link>       
    </div>
  )
}
