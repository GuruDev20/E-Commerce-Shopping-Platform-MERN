import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import '../../styles/Profile.css'
import Navbar from './Navbar';
import Footer from './Footer';
function Profile() {
    const navigate = useNavigate();
    const[suc,setSuc]=useState();
    const [email, setEmail] = useState('');
    const [user,setUser]=useState([]);
    const [orders,setOrders]=useState([]);
    const [products, setProducts] = useState([]);
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

    useEffect(() => {
        const token = localStorage.getItem('token');
        let user = [];
        user = token.split(',');
        setEmail(user[1]);
    }, []);

    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const response = await axios.get(`http://localhost:4000/user/${email}`);
                setUser(response.data);
            }
            catch(error){
                console.log("Error fetching items", error);
            }
        }
        fetchUser();
    },[email])

    useEffect(()=>{
        const fetchOrderHistory=async()=>{
            try{
                const response=await axios.get(`http://localhost:4000/orderHistory/${email}`)
                setOrders(response.data);
            }
            catch(error){
                console.log("Error fetching items", error);
            }
        }
        fetchOrderHistory();
    },[email])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productIds = orders.map(order => order.products.map(product => product.productId));
                const flattenedProductIds = productIds.flat();
                const uniqueProductIds = [...new Set(flattenedProductIds)];

                const productsPromises = uniqueProductIds.map(productId =>
                    axios.get(`http://localhost:4000/products/${productId}`)
                );
                const productsResponses = await Promise.all(productsPromises);
                const productsData = productsResponses.map(response => response.data);

                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (orders.length > 0) {
            fetchProducts();
        }
    }, [orders]);

    return (
        <div suc={{suc}}>
            <div className='profile-top'>
                <Navbar/>
            </div>
            <div className='profile-details'>
                <div className='profile-left'></div>
                <div className='profile-centre'>
                    <div className='profile-pic'></div>
                    <div className='profile-details-user'>
                        <div className='personal-details'>Personal Details:</div>
                        <div className='profile-name'>Name: {user.username}</div>
                        <div className='horizontal-divider'></div>
                        <div className='profile-email'>Email: {user.email}</div>
                        <div className='horizontal-divider'></div>
                        <div className='profile-mobile'>Mobile: {user.mobile}</div>
                        <div className='horizontal-divider'></div>
                        {/* {orders.map(order=>(
                            <>
                                <div className='profile-address'>Address: {order.address}</div>
                            </>
                        ))} */}
                    </div>
                    <div className='order-history-profile'>
                        <div className='order-history-name'>Order History:</div>
                        {products.map(product => (
                            <div className='order-his-details'>
                                <div className='profile-brand'>Brand: {product.brand}</div>
                                <div className='profile-name'>Product Name: {product.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='profile-right'></div>
            </div>
            <div className='profile-foot'>
                <Footer/>
            </div>
        </div>
    )
}

export default Profile