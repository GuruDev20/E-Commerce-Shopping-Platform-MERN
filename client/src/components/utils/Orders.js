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
                const promises = orders.map(order =>axios.get(`http://localhost:4000/products/${order.products.productId}`));
                const responses = await Promise.all(promises);
                const productsData = responses.map(response => response.data);
                setProducts(productsData);
                console.log(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        if (orders.length > 0) {
            fetchProducts();
        }
    }, [orders]);

    return (
        <div val={{suc}}>
            <Navbar />
            <div className='order-details'>
                <h2>Your Orders</h2>
                <ul>
                    {orders.map((order, orderIndex) => (
                        <li key={order.id}>
                            <p>Email: {order.email}</p>
                            <p>Payment Type: {order.paymentType}</p>
                            <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
                            <h3>Products:</h3>
                            <ul>
                                {order.products.map((product, index) => (
                                    <li key={index}>
                                        <p>Product ID: {product.productId}</p>
                                        <p>Quantity: {product.quantity}</p>
                                        <p>Size: {product.size}</p>
                                        {products[index] && (
                                            <>
                                                <p>Brand: {products[index].brand}</p>
                                                <p>Name: {products[index].name}</p>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Orders;
