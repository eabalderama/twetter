import React, {useState, useEffect} from 'react';

// Import components
import SideBarLeft from './Components/SideBarLeft.js';
import SideBarRight from './Components/SideBarRight.js';
import Body from './Components/Body.js';

import './App.css';
const axios = require('axios');

function App() {

  const [doge, setDoge] = useState([]);
  const [quotes, setQuote] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(true)

  // const getQuote = async () => {
  //   const imageResponse =  await axios.get('https://dog.ceo/api/breeds/image/random/10');
  //   setDoge(imageResponse.data.message);
   
  //   const quoteResponse = await axios.get(`https://quote-garden.herokuapp.com/api/v2/quotes?page=${page}&limit=10`);
  //   setQuote(quoteResponse.data.quotes);
  // };

  const setPost = () => {
      setPosts([...posts, ...quotes.map((quote, index) => {
      const username = quote['quoteAuthor'].replace(/ /g, '');
      if(index === 0 && isUser){
        setIsUser(false);
        setUser({name: quote['quoteAuthor'], username: username, image: doge[index]});
      }
      return (
        {key: quote['_id'],
        quoteText: quote['quoteText'],
        author: quote['quoteAuthor'],
        username: username,
        image: doge[index]}
      );  
    })]
    );

  }

   useEffect(() => {

    axios.get('https://dog.ceo/api/breeds/image/random/10').then((imageResponse) => {
      setDoge(imageResponse.data.message);
    });

    axios.get(`https://quote-garden.herokuapp.com/api/v2/quotes?page=${page}&limit=10`).then((quoteResponse) => {
      setQuote(quoteResponse.data.quotes);
    });
    
      // getQuote();
   }, [page]);


   useEffect(() => {
    setPost();
  }, [quotes] );  
  return (
   
    <div className='container'>
        <div className='container-one'>
          <SideBarLeft user={user} />
        </div>
        <div className='container-two'>
          <div className='main'>
            <Body posts={posts} setPage={setPage} page={page} />
            <SideBarRight />
          </div>
        </div>
        
    </div>
   
  );
}

export default App;
