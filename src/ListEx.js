import React from 'react'

export default function ListEx(){

    const cars=[
        {model:"skyline",id:1},
        {model:"supra",id:2},
        {model:"chevi",id:3},
        {model:"caymen",id:4}
    ];

    const listCars=cars.map((val)=><li key={val.id}>{val.model}</li>);
    return (
      <div>{listCars}</div>
    )
    
}

