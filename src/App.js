import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message.js'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'Puja', text: 'aa'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // if its blank inside [], this code run ONCE when the app component loads
    setUsername(prompt("Please enter your name"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('') 
  }

  return (
    <div className="App">
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel >Enter a message... </InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
    
      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
