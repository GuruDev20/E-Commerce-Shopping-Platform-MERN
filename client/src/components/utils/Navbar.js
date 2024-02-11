import React,{useState} from 'react'
import '../../styles/Welcome.css'
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link} from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import Cookie from 'js-cookie'
import {useNavigate} from 'react-router-dom'
function Navbar() {	
	const navigate=useNavigate();
	const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
	const toggleProfileDropdown = () => {
		setProfileDropdownOpen(!isProfileDropdownOpen);
	};
	const handleLogout=()=>{
		localStorage.clear()
		Cookie.remove('token');
		navigate('/')
	}

	return (
		<div className='header'>
			<div className='icon'>
				<GiShoppingBag size={50} />
				<span>Shopify</span>
			</div>
			<div className='navbar'>
				<ul className='nav-content'>
				<li className='nav-list'>
					<Link to="/" className='nav-link' reloadDocument>Home</Link>
				</li>
				<li className='nav-list' >
					<div className='dropdown'>
						<Link to={Cookie.get('token')?("/cloths/Men-top-wear"):('/loginregister')} className='nav-link' reloadDocument >Top wear</Link>
						<Link to={Cookie.get('token')?("/cloths/Men-bottom-wear"):('/loginregister')} className='nav-link' reloadDocument>Bottom wear</Link>
						<Link to={Cookie.get('token')?("/cloths/Men-footwear"):('/loginregister')} className='nav-link' reloadDocument>Footwear</Link>
						<Link to={Cookie.get('token')?("/cloths/Men-gadgets"):('/loginregister')} className='nav-link' reloadDocument>Gadgets</Link>
						<Link to={Cookie.get('token')?("/cloths/Men-accessories"):('/loginregister')} className='nav-link' reloadDocument>Accessories</Link>
					</div>
					<div className='nav-link-items'>Mens</div>
				</li>
				<li className='nav-list'>
					<div className='dropdown'>
					<Link to={Cookie.get('token')?('/cloths/Women-top-wear'):('/loginregister')} className='nav-link' reloadDocument>Top wear</Link>
					<Link to={Cookie.get('token')?('/cloths/Women-bottom-wear'):('/loginregister')} className='nav-link' reloadDocument>Bottom wear</Link>
					<Link to={Cookie.get('token')?('/cloths/Women-footwear'):('/loginregister')} className='nav-link' reloadDocument>Footwear</Link>
					<Link to={Cookie.get('token')?('/cloths/Women-gadgets'):('/loginregister')} className='nav-link' reloadDocument>Gadgets</Link>
					<Link to={Cookie.get('token')?('/cloths/Women-accessories'):('/loginregister')} className='nav-link' reloadDocument>Accessories</Link>
					</div>
					<div className='nav-link-items'>Womens</div>
				</li>
				<li className='nav-list'>
					<div className='dropdown'>
						<Link to={Cookie.get('token')?('/cloths/kids-boys'):('/loginregister')} className='nav-link' reloadDocument >Boys</Link>
						<Link to={Cookie.get('token')?('/cloths/kids-girls'):('/loginregister')} className='nav-link' reloadDocument>Girls</Link>
						<Link to={Cookie.get('token')?('/cloths/kids-footwear'):('/loginregister')} className='nav-link' reloadDocument>Foot wear</Link>
					</div>
					<div className='nav-link-items'>Kids</div>
				</li>
				<li className='nav-list'>
					<Link to={Cookie.get('token')?('/newarrivals'):('/loginregister')} className='nav-link' reloadDocument>New Arrivals</Link>
				</li>
				</ul>
			</div>
			{localStorage.getItem('token')? (
				<div className='profile'>
				<IoPersonCircleSharp size={40} onClick={toggleProfileDropdown} />
				{isProfileDropdownOpen && (
					<div className='profile-dropdown'>
					<Link to='/myprofile' className='nav-link-details'>
						Profile<CgProfile size={25}/>
					</Link>
					<div className='divider'></div>
					<div className='nav-link-details' onClick={handleLogout}>
						Logout<MdLogout size={25}/>
					</div>
					</div>
				)}
				</div>
			) : (
				<div className='loginbutton'>
				<Link to='/loginregister' className='nav-link'>
					<button className='login'>Login</button>
				</Link>
				</div>
			)}
			<div className='whislist'>
				<Link to ='/whislist' reloadDocument className='nav-link'><CiHeart size={40} color='#e56b6f'/></Link>
			</div>
			<div className='cart'>
				<Link to='/cart' reloadDocument className='nav-link'><FaShoppingCart size={30}/></Link>
			</div>
		</div>
	)
}

export default Navbar