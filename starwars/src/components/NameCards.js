import React from 'react';
// import './index.css';


function NameCards(props){
    console.log('props:', props)
    const {name, birthday} = props
    return (
        <div>
        <h1>{`${name} ${birthday} `} </h1>
        </div>
    )
}

export default NameCards