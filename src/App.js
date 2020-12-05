import React,{useState, useEffect} from 'react';

// Import components
import SideBarLeft from './Components/SideBarLeft.js';
import SideBarRight from './Components/SideBarRight.js';
import Body from './Components/Body.js';

import './App.css';
const axios = require('axios');

function App() {

  const [meow, setMeow] = useState('');
  const [quote, setQuote] = useState([]);

  async function getMeow() {
    try {
      const response = await axios.get('https://aws.random.cat/meow');
      setMeow(response.data['file']);
    } catch (error) {
      console.error(error);
    }
  }

  async function getQuote() {
    try {
      const response = await axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random');
      const username = response.data.quote['quoteAuthor'].replace(/ /g, '');
      setQuote(...quote, {quoteText: response.data.quote['quoteText'], author: response.data.quote['quoteAuthor'], username: username});
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMeow();
    getQuote();
  }, []);

  return (
    // <div className="App">
    //  <img src={meow} alt=""/>
    //  <h6>{quote.author}</h6>
    // <p>{quote.quoteText}</p>
    // </div>
    <div className='container'>
        <div className='container-one'>
          <SideBarLeft />
        </div>
        <div className='container-two'>
          <div className='main'>
            <Body quote={quote} image={meow} />
            <SideBarRight />
          </div>
        </div>
        
    </div>
   
  );
}

export default App;
