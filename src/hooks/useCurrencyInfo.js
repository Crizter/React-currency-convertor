import {useState , useEffect}  from 'react'

export default function useCurrencyInfo(currency) { 
    const [data, setData] = useState({})
    useEffect(() => { 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())      // convert to json format 
        .then((res) =>setData(res[currency]))  // set teh data value 
       
    }, [currency]) 
    return data ;

}