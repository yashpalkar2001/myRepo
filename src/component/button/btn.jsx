import {useState} from 'react'


function btn(props){
    const [count, setCount] = useState(true);
    function hello(){
        setCount(!count);
     
    }
return(
    <>
    <h1>{count?"Button Clicked":"Button Unclicked"}</h1>
           {/* <h1>{String(count)}</h1> */}
<button onClick={hello}>Change</button>
    </>
)
}
export default btn;