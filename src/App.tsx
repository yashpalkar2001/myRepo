import { useState } from 'react'
 
import './App.css'
import { User } from './user'

function App() {
  const [count, setCount] = useState(0)
  const [user,setUser] =useState<User>({
    name: "yash",
    id : 2,

  }) 
  
function add(para1:string,para2:number){
  return para1 + para2;
  }

 console.log( add('yash ',20));

  return (
    <>
     <h1></h1>
    </>
  )
}

export default App
