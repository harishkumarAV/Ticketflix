import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function GetHooks() {

    const[company,setCompany]=useState([])
    useEffect(
        ()=>{axios.get("db.json")
        .then(e=>{
            setCompany(e.data)
            console.log(e.data)
        })
        .catch(err=>console.log(err))
})
  return (
    <div>GetHooks
    {company.map(posts=>
        <div key={posts.id}>{posts.name}</div>)}
    </div>
  )
}
export default GetHooks
