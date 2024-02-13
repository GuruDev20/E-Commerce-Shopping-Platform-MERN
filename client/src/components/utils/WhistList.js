import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/WhistList.css';
import {Link} from 'react-router-dom'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import { IoClose } from "react-icons/io5";
function WhistList() {
    const navigate = useNavigate();
    const [suc, setSuc] = useState();
    const [email, setEmail] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const [products, setProducts] = useState([]);

    axios.defaults.withCredentials = true;

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

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/userWishlist/${email}`);
                setWishlist(response.data);
            } catch (error) {
                console.log("Error fetching items", error);
            }
        };
        fetchWishlist();
    }, [email]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productPromises = wishlist.map(item => axios.get(`http://localhost:4000/products/${item.productId}`));
                const productResponses = await Promise.all(productPromises);
                const productList = productResponses.map(res => res.data);
                setProducts(productList);
            } catch (error) {
                console.log("Error fetching products", error);
            }
        };
        fetchProducts();
    }, [wishlist]);
    const deleteWishProduct=async(productId,userEmail)=>{
        try {
            await axios.delete(`http://localhost:4000/wishlist/${productId}/${userEmail}`);
            const updatedWishlist = wishlist.filter(item => item.productId !== productId);
            setWishlist(updatedWishlist);
        } catch (error) {
            console.log("Error deleting product from wishlist", error);
        }
    }
    return (
        <>
            <div className='wishlist-header'>
                <Navbar/>
            </div>
            <div val={{suc}} className='wishlist-products'>
                <div className='wish-left'></div>
                <div className='wish-centre'>
                    <div className='wish-products'>
                        {products.map(product => (
                            <div key={product._id} className="wish-product-cards">
                                <Link to={`/cloths/men-top-wear/details/${product.category}/${product._id}`} className="link-to-more" key={product._id} reloadDocument>
                                    <img src={require(`../../../src/uploads/${product.images[0]}`)} alt={product.name} className='wish-img'/>
                                </Link>
                                <p className='wish-name'>{product.name}</p>
                                <p className='wish-brand'>{product.brand}</p>
                                <div className='wish-last'>
                                    <p className='wish-price'>&#8377;{product.price}</p>
                                    <IoClose size={22}  color='#124559' onClick={()=>{deleteWishProduct(product._id,email)}}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='wish-right'></div>
            </div>
            <div className='wish-footer'>
                <Footer/>
            </div>
        </>
    );
}

export default WhistList;
