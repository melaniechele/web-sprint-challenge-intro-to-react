import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const WrapperDiv = styled.div`
color: red;
text-align: center;
`;

const App = () => {

const [data, setData] = useState([])


useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
  .then((res) => {
    setData(res.data.results)
    console.log(res.data.results)

  
  })
  .catch((err)=>{
    console.log(err);
  })

}, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

//   return (
//     <div className="App">
//       <h1 className="Header">Characters</h1>
//       <Character data = {data}/>
//     </div>
//   );
// }

return (
  <WrapperDiv>
    
      <Character data = {data}/>
   
  </WrapperDiv>
);
}

export default App;
