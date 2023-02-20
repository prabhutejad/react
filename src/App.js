
import './App.css';
import React , {useState} from 'react';
import axios from 'axios';
function App() {
  const [prompt, setprompt] = useState("")
  const [response, setResponse] = useState(null)
  const handleClick = async()=>{
    await axios.post("http://localhost:8080/chat",{prompt}).then(res=>{
      setResponse(res.data)
    }).catch((err)=>console.log(err))

  }
  return (
    <div className="container">
      
      <div className="box">
        <p className='p'><small>SILOAM CHATBOT</small></p>
        <div className="searchbox">
          <input type="text" placeholder="Ask Anything" onChange={(e)=>setprompt(e.target.value)} value={prompt}/>
          <button onClick={handleClick}>ASK AI</button>

        </div>
        {response && (
           <div className="contentBox">
           <p>{response}</p>
 
         </div>
        )}
       

      </div>
    </div>
  );
}

export default App;
