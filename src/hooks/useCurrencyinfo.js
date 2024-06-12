/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect,useState } from "react"; 

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json()).then((res)=> setData(res[currency]))
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`).then((res) => res.json()).then((res)=> setData(res[currency]))
    },[currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;