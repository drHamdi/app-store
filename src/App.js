import React from 'react'

import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home';

import Pricingg from './routes/Pricingg'
import Faqs from './routes/Faqs'
import Contacts from './routes/Contacts';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='./routes' element = {<Pricingg />} />
        <Route path='./routes' element = {<Faqs />} />
        <Route path='./routes' element ={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
