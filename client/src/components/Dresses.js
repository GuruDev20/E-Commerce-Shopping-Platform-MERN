import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import '../styles/Dresses.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Filter from './Filter';
function Dresses(props) {
  const navigate = useNavigate();
  const[suc,setSuc]=useState();
  axios.defaults.withCredentials=true;
  useEffect(() => {
  axios.get('http://localhost:4000/users/', { withCredentials: true })
    .then(res => {
      if (res.data === 'Users Dashboard Success') {
        setSuc("Success ok");
      } else {
        navigate('/notfound');
      }
    })
    .catch(err => console.log(err));
  }, [navigate]);
  return (
    <div className='cloth-products'>
      <Navbar />
      <div><Filter sort={props.sort} val={{suc}}/></div>
      <Footer />
    </div>
  );
}

export default Dresses;
