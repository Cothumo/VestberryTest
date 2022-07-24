import React, { Component, useEffect } from 'react'
import { useState } from 'react'
import styles from 'App.scss'
import {ADD_COMPANY} from './Page.queries'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

export default function Create() {
    const [name, setName] = useState('')
    const [stage, setStage] = useState('')
    const [sector, setSector] = useState('')
    const [investmentSize, setInvestmentSize] = useState('')
    const history = useHistory()
    const [addCompany, { error}] = useMutation(ADD_COMPANY)    
    const newCompany = (e) => {    
        addCompany({
            variables:{
                name:name,
                stage:stage,
                sector:sector,
                investmentSize:Number(investmentSize),
            }
        });
        if (error){
            console.log(error);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (newCompany){            
            history.push("/"),      //necessary?, or is it actually working correctly ?
            location. reload(0)}  //Have to reload, otherwise wont render new company...better solution ?  
    }
    
    return (
        <div className={styles.create}>
            <h2>ADD NEW COMPANY</h2>
            <form onSubmit={handleSubmit}>

                <label>
                    <span>Company name:</span>
                    <input 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder={"Company name"}
                        required
                    />
                    </label>
                
                    <label>
                    <span>Stage:</span>
                    <select onChange={(e) => setStage(e.target.value)} className={styles.select} defaultValue="">
                    <option value="" disabled>Select stage from the list</option>
                    <option value ="Idea">Idea</option>
                    <option value ="Prototype">Prototype</option>
                    <option value ="Seed">Seed</option>
                    <option value ="Series A">Series A</option>
                    <option value ="Series B">Series B</option>
                    <option value ="Series C">Series C</option>
                    </select>
                    </label>

                    <label>
                    <span>Sector:</span>
                    <select onChange={(e) => setSector(e.target.value)} className={styles.select} defaultValue="">
                    <option value="" disabled>Select sector from the list</option>                        
                    <option value ="Fintech">Fintech</option>
                    <option value ="IOT">IOT</option>
                    <option value ="Roboadvisory">Roboadvisory</option>
                    <option value ="Insuretech">Insuretech</option>
                    </select>
                    </label>

                    <label>
                    <span>Investment size:</span>
                    <div className={styles.suffix}>
                    <input
                            type = "number"
                            onChange={(e) => setInvestmentSize(e.target.value)}
                            value={investmentSize}
                            placeholder={"Enter amount"}
                            required
                        />
                    </div>
                    </label>
                    
             <button onClick={newCompany} className={styles.create}>Add new company</button>
            </form>
        </div>
  )
}
//message from network graphql: {"data":{"addCompany":{"name":"sdfsaf","stage":"Series A","sector":"IOT","investmentSize":344,"__typename":"Company"}}}
// but mutations returns as "null"
//wasnt able to implement comma separator(thousands) for amout input, gray font select deafult