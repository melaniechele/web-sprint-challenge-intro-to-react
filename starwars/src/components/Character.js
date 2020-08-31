import React from 'react';
import NameCards from './NameCards'


// import './index.css';


function Character(props){
    console.log('props:', props)
    const {data} = props
    console.log(data)
    return (
        <div>
    {data.map((element, index)=>{
      return ( <NameCards key = {index} name={element.name} birthday={element.birth_year} />)
    })}
    </div>
    )
}

export default Character