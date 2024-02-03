import React from 'react';
import '../styles/Welcome.css'
import Navbar from './Navbar';
import Main from './Main'
import Men from './Men';
import Women from './Women';
import Newarrivals from './Newarrivals'
import Footer from './Footer'
import Others from './Others';
function Welcome() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Main/></div>
        <div><Men/></div>
        <div><Women/></div>
        <div><Others/></div>
        <div><Newarrivals/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Welcome;