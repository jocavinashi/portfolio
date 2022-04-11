import React , { useEffect, useState } from 'react';
import axios from 'axios';

export default function Bot() {
    const [text, setText] = useState([]);
    const [reply,setReply] =useState({
        i:0
    });
    const [texta,setTexta]=useState();
    useEffect(() => {
        var axios = require("axios").default;
        const qs = require('qs')
        var options = {
            method: 'POST',
            url: 'https://waifu-ai.p.rapidapi.com/path',    
            headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'x-rapidapi-key': '8fb3183894msh34773e7334e38c7p103e7djsna94dec2b7324',
            'x-rapidapi-host': 'waifu-ai.p.rapidapi.com'
            },
            data:qs.stringify({
            message: texta,
            user_id:"12345",
            situation: 'Portfolio website',
            preset_mode: 'raw',
            translate_from: 'ne'
            })
        };
        axios.request(options).then(function (response) {
            localStorage.setItem('reply'+reply.i,response.data);
            reply.i=reply.i+1
        }).catch(function (error) {
            console.error(error);
        });
      }, [text]);
    
      const handleText = (e) => {
        localStorage.setItem('query'+reply.i,texta);
    };

      
    return (
        <div className='container'>
            <div className='chat-header'>
    <h5>React Chat Box Example</h5>
  </div>
  <form onSubmit={handleText}>
      <input type="text" value={texta} onChange={(e)=>setTexta(e.target.value)}></input>
      <input type="submit"/>
  </form>
        </div>
    )
}


