import { useState,useEffect } from 'react'
 import Button from './hooks/usebtn'
import './App.css'

function App() {
  const [count, setCount] = useState([]);
  // const [change, setChange]= useState(false);

  // function changeColor(){
  //   setChange(!change);
  // }


  async function getRecord(){
    try{
      const answer= await fetch("https://gorest.co.in/public/v2/users",
     {method:"GET"})
     console.log("answer", answer);
     if(answer.status===200){
setCount([...await answer.json()]);
     }
     else{
      setCount([]);
     }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
      (async function(){
        await getRecord();
      })();
    }
  ,[]);

  

  return (
    <>

     
    {count.length > 1 ? count.map(c=>
    <p key={c.id}>{c.name}</p>
  ):(<p>no user display</p>)
}

 {/* <button onClick={toggle} 
 className={change?"true":'false'}
  >change color</button> */}
 ,<Button/>
    </>
  )
}

export default App
