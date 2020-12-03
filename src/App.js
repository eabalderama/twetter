import logo from './logo.svg';
import {useState, useEffect} from 'react';
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
      setQuote(...quote, {quoteText: response.data.quote['quoteText'], author: response.data.quote['quoteAuthor']});
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMeow();
    getQuote();
  }, []);

  console.log(quote);
  return (
    <div className="App">
     <img src={meow} alt=""/>
     <h6>{quote.author}</h6>
    <p>{quote.quoteText}</p>
    </div>
  );
}

export default App;
