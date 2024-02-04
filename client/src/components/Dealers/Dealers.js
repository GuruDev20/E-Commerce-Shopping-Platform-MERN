import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
function Dealers() {
  const navigate = useNavigate();
  const[suc,setSuc]=useState();
  axios.defaults.withCredentials=true;
  useEffect(() => {
  axios.get('http://localhost:4000/dealers/dashboard')
    .then(res => {
      if (res.data === 'Dealers Dashboard Success') {
        setSuc("Success ok");
      } else {
        navigate('/notfound');
      }
    })
    .catch(err => console.log(err));
  }, [navigate]);
  return (
    <>
      <Dashboard/>
      <div>{suc}</div>
    </>
    
  )
}

export default Dealers