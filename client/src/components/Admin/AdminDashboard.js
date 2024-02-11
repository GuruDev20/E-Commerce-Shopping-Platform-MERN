import React, { useState,useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import '../../styles/Admin.css'
import { Link } from 'react-scroll';
import { GiShoppingBag } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import Dashboard from './Dashboard';
import Dealers from './Dealers';
import Stocks from './Stocks';
import Revenue from './Revenue';
import axios from 'axios'
import Cookie from 'js-cookie'
function AdminDashboard() {
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
	const handleLogout=()=>{
		localStorage.clear()
		Cookie.remove('token');
		navigate('/')
	}
	return (
		<div className='admin-dashboard' val={{suc}}>
			<div className='admin-left'>
				<div className='admin-header'>
					<GiShoppingBag size={40} />
					<div className='web-name'>Shopify</div>
				</div>
				<div className='admin-sep'></div>
				<div className='admin-profile'>
					<div className='admin-logo'><IoPersonOutline size={25}/></div>
					<div className='admin-name'>Admin</div>
				</div>
				<div className='admin-sep'></div>
				<div className='admin-controller'>
					<ul className='admin-list'>
						<Link to='dashboard-body' smooth={true} duration={700}><li className='admin-control'>Dashboard</li></Link>
						<Link to='dealers-body' smooth={true} duration={700}><li className='admin-control'>Dealers</li></Link>
						<Link to='stocks-body' smooth={true} duration={700}><li className='admin-control'>Stocks</li></Link>
						<Link to='revenue-body' smooth={true} duration={700}><li className='admin-control'>Revenue</li></Link>
					</ul>
				</div>
			</div>
			<div className='admin-right'>
				<div className='admin-navbar'>
					<div className='admin-email'><IoMailOutline size={25} className='mail'/></div>
					<div className='admin-notifications'><IoIosNotificationsOutline size={25} className='notify'/></div>
					<div className='admin-profiles' onClick={handleLogout}><MdLogout size={25} className='profile-logo'/></div>
				</div>
				<div className='admin-body'>
					<div className='dashboard-body'><Dashboard name="Home"/></div>
					<div className='dealers-body'><Dealers name="Dealers"/></div>
					<div className='stocks-body'><Stocks name="Stocks"/></div>
					<div className='revenue-body'><Revenue name="Revenue"/></div>
				</div>
			</div>
		</div>
  	)
}

export default AdminDashboard