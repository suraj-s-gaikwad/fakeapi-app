import React,{ useEffect, useState } from 'react'
 import './styleApi.css'
export default function MyAPI() {
    let [getApiData,setApiData]=useState([])
    let [count,setCount]=useState(2)   //default set 1
        let getApi=async()=>{

   let response=await fetch("https://fakestoreapi.com/products/"+count)
    //let response=await fetch("https://fakestoreapi.com/products")
    let data=await response.json()
    setApiData(data)
}

    useEffect(()=>{
        getApi()
    })

  return (
    <div className='okk'>MyAPI
         <h1>{getApiData.id}</h1>
        <h3>{getApiData.title}</h3>
        <p>{getApiData.description}</p>
        <img src={getApiData.image} alt=""/>
        <button type='button' onClick={()=>setCount(count+1)}>click</button> 

        {/* {
            getApiData.map((data,index)=>{    //map method use to show multiple data
                return(
                    <ul>
                       <li>{data.id}</li> 
                       <li>{data.title}</li> 
                       <li>{data.description}</li> 
                       <li>{data.price}</li> 
                       <li><img src={data.image} alt=""/></li>
                    </ul>
                )
            })
        } */}
    </div>
  )
}
