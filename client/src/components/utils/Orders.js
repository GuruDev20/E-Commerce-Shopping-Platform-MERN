import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Orders.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Orders() {
    const navigate = useNavigate();
    const [suc, setSuc] = useState(false);
    const [email, setEmail] = useState('');
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/users/', { withCredentials: true })
            .then(res => {
                if (res.data === 'Users Dashboard Success') {
                    setSuc(true);
                } else {
                    navigate('/notfound');
                }
            })
            .catch(err => console.log(err));
    }, [navigate]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            let user = token.split(',');
            setEmail(user[1]);
        }
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/ordersDetails/${email}`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        if (email) {
            fetchOrders();
        }
    }, [email]);

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
        <div val={{ suc }}>
            <div className='order-top'>
                <Navbar />
            </div>
            <div className='order-details-list'>
                <div className='order-left'></div>
                <div className='order-centre-list'>
                    <div className='order-main'>
                        {products.map(product => (
                            <div className='order-products'>
                                <div className='order-list' key={product._id}>
                                    <div className='order-images'>
                                        <img src={require(`../../../src/uploads/${product.images[0]}`)} alt={product.name} className='order-img-res' />
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='order-opt'>
                        {products.map(product => (
                            <>
                                <div className='order-brand'>{product.brand}</div>
                                <div className='order-name'>{product.name}</div>
                                <div className='order-color'>
                                    {product.color.map((colordata,index)=>(
                                        <div key={index} className="list-color">
                                            <div className="color-product" style={{ background: colordata.toLowerCase() }}></div>
                                            <div className="color-product-name">{colordata}</div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))}
                        {orders.map(order=>(
                            <div className='order-option'>
                                <div className='order-address'>{order.address}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='order-right'></div>
            </div>
            <div className='order-foot'>
            <   Footer />
            </div>
        </div>
    );
}

export default Orders;
