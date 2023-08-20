import React, {useState} from 'react'

const country = [
    {
        name: "India",
        capital: "Delhi"
    },
    {
        name: "China",
        capital: "Bijing"
    },
    {
        name: "Pakastan",
        capital: "Lahore"
    }
]

function Countries() {
    const [countryCapital, capitalUpdateByCountry] = useState('0');
    const selectedCountry = (e) => {
        capitalUpdateByCountry(e.target.value)
    }
    return (
        <div className="container country-dropdown">
            <select onChange={selectedCountry} className='mx-1'>
                {
                    country.map((item, index) => {
                        return (
                            <option key={index} value={index}> {item.name} </option>
                        )
                    })
                }
            </select>
            <select className='mx-1'>
                <option> {country[countryCapital].capital} </option>
            </select>
        </div>
    );
};

export default Countries;