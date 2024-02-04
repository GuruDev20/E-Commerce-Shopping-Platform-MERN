import React,{useState,useEffect } from 'react'
import '../styles/Welcome.css'
import { useNavigate  } from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link} from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
function Navbar() {
	const navigate = useNavigate();
	const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	const toggleProfileDropdown = () => {
		setProfileDropdownOpen(!isProfileDropdownOpen);
	};
	useEffect(() => {
		const checkTokenSetLogin = () => {
			const isTokenGenerated = checkToken();
				if (isTokenGenerated) {
					setIsLoggedIn(true);
				}
			};
			const checkToken = () => {
				const token = localStorage.getItem('user');
				return !!token;
			};
			checkTokenSetLogin();
			const handlePopstate = () => {
				if (!isLoggedIn) {
					navigate('/');
				}
			};
			window.addEventListener('popstate', handlePopstate);
				return () => {
					window.removeEventListener('popstate', handlePopstate);
				};
			},
		[navigate, isLoggedIn]
	);
	const handleLogout=()=>{
		localStorage.removeItem('user');
		setIsLoggedIn(false);
		console.log(isLoggedIn)
	}

	return (
		<div className='header'>
			<div className='icon'>
				<GiShoppingBag size={50} />
				<span>Shopify</span>
			</div>
			<div className='navbar'>
				<ul>
				<li>
					<Link to="/" className='nav-link' reloadDocument>Home</Link>
				</li>
				<li>
					<div className='dropdown'>
						<Link to={localStorage.getItem('user')?("/cloths/men-top-wear"):('/loginregister')} className='nav-link' reloadDocument >Top wear</Link>
						<Link to={localStorage.getItem('user')?("/cloths/men-bottom-wear"):('/loginregister')} className='nav-link' reloadDocument>Bottom wear</Link>
						<Link to={localStorage.getItem('user')?("/cloths/men-footwear"):('/loginregister')} className='nav-link' reloadDocument>Footwear</Link>
						<Link to={localStorage.getItem('user')?("/cloths/men-gadgets"):('/loginregister')} className='nav-link' reloadDocument>Gadgets</Link>
						<Link to={localStorage.getItem('user')?("/cloths/men-accessories"):('/loginregister')} className='nav-link' reloadDocument>Accessories</Link>
					</div>
					<div className='nav-link-items'>Mens</div>
				</li>
				<li>
					<div className='dropdown'>
					<Link to={localStorage.getItem('user')?('/cloths/women-top-wear'):('/loginregister')} className='nav-link' reloadDocument>Top wear</Link>
					<Link to={localStorage.getItem('user')?('/cloths/women-bottom-wear'):('/loginregister')} className='nav-link' reloadDocument>Bottom wear</Link>
					<Link to={localStorage.getItem('user')?('/cloths/women-footwear'):('/loginregister')} className='nav-link' reloadDocument>Footwear</Link>
					<Link to={localStorage.getItem('user')?('/cloths/women-gadgets'):('/loginregister')} className='nav-link' reloadDocument>Gadgets</Link>
					<Link to={localStorage.getItem('user')?('/cloths/women-accessories'):('/loginregister')} className='nav-link' reloadDocument>Accessories</Link>
					</div>
					<div className='nav-link-items'>Womens</div>
				</li>
				<li>
					<div className='dropdown'>
						<Link to={localStorage.getItem('user')?('/cloths/kids-boys'):('/loginregister')} className='nav-link' reloadDocument >Boys</Link>
						<Link to={localStorage.getItem('user')?('/cloths/kids-girls'):('/loginregister')} className='nav-link' reloadDocument>Girls</Link>
						<Link to={localStorage.getItem('user')?('/cloths/kids-footwear'):('/loginregister')} className='nav-link' reloadDocument>Foot wear</Link>
					</div>
					<div className='nav-link-items'>Kids</div>
				</li>
				<li>
					<Link to='/newarrivals' className='nav-link' reloadDocument>New Arrivals</Link>
				</li>
				</ul>
			</div>
			{isLoggedIn || localStorage.getItem('user')? (
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