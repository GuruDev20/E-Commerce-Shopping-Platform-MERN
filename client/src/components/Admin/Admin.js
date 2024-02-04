import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
function Admin() {
  const navigate = useNavigate();
  const[suc,setSuc]=useState();
  axios.defaults.withCredentials=true;
  useEffect(() => {
  axios.get('http://localhost:4000/admin/dashboard')
    .then(res => {
      if (res.data === 'Admin Dashboard Success') {
        setSuc("Success ok");
      } else {
        navigate('/notfound');
      }
    })
    .catch(err => console.log(err));
  }, [navigate]);
  return (
    <div className='admin'>
        <Dashboard sort={{suc}}/>
    </div>
  )
}

export default Admin