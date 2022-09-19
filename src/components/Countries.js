import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card'
const Countries = () => {
    const [data , setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [playOnce , setPlayOnce] = useState(true)
    const [rangeValue , setRangeValue] = useState([])
    const [selectedRadio , setSelectedRadio] = useState('')
    const radios = [ 'Africa' , 'Asia' , 'Americas' , 'Europe' , 'Oceania']

    useEffect(() => {
        if(playOnce) {
            axios.get('https://restcountries.com/v2/all?fields=name,population,region,capital,flag')
                .then((res) => {
                    setData(res.data)
                    setPlayOnce(false)
                })
        }

        const sortedCountries = () => {
            const countiesObject = Object.keys(data).map((i) => data[i])
        
        const sortedArray = countiesObject.sort((a,b) => {
            return b.population - a.population 
        })

        sortedArray.length = rangeValue 
        setSortedData(sortedArray)
    }
    sortedCountries()
    },[data,rangeValue])
    return (
        <div className='countries'>
            <div className='sort-container'>
                <input
                    type='range'
                    min="1"
                    max="250"
                    value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                    >
                </input>

                <ul>
                    {radios.map((radio) => {
                        return (
                            <li key={radio}>
                                <input type="radio" 
                                       value={radio}
                                       id = {radio}
                                       checked={radio===selectedRadio}
                                       onChange={(e) => setSelectedRadio(e.target.value)}>
                                </input>
                                <label htmlFor={radio}>{radio}</label>          
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div  className='cancel'>+
                {selectedRadio && <button onClick={() => setSelectedRadio("")}>Annuler recherche</button> }
            </div>
            <ul className='countries-list'>
                {sortedData
                    .filter((country) => country.region === selectedRadio)
                    .map((country) => (
                        <Card country = {country} key ={country.name}></Card>
                    ))}
            </ul>    
        </div>


    );
};

export default Countries;