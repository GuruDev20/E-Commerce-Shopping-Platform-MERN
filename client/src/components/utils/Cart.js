import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Cart.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
function Cart() {
    const navigate = useNavigate();
    const [suc, setSuc] = useState();
    const [email, setEmail] = useState('');
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [count, setCount] = useState({});
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [address, setAddress] = useState('');
    const [showPaymentSelection, setShowPaymentSelection] = useState(false);
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
        const fetchCart = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/userCart/${email}`);
                setCart(response.data);
            } catch (error) {
                console.log("Error fetching items", error);
            }
        };
        fetchCart();
    }, [email]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productPromises = cart.map(item => axios.get(`http://localhost:4000/products/${item.productId}`));
                const productResponses = await Promise.all(productPromises);
                const productList = productResponses.map(res => res.data);
                setProducts(productList);
            } catch (error) {
                console.log("Error fetching products", error);
            }
        };
        fetchProducts();
    }, [cart]);

    const deleteCartProduct = async (productId, userEmail) => {
        try {
            await axios.delete(`http://localhost:4000/cart/${productId}/${userEmail}`);
            const updatedCart = cart.filter(item => item.productId !== productId);
            setCart(updatedCart);
        } catch (error) {
            console.log("Error deleting product from cart", error);
        }
    };

    const increaseCount = (productId) => {
        setCount(prevCounts => ({
            ...prevCounts,
            [productId]: (prevCounts[productId] || 0) + 1
        }));
    };

    const decreaseCount = (productId) => {
        if (count[productId] && count[productId] > 1) {
            setCount(prevCounts => ({
                ...prevCounts,
                [productId]: prevCounts[productId] - 1
            }));
        }
    };

    const handleSizeSelect = (productId, size) => {
        setSelectedSizes(prevSelectedSizes => ({
            ...prevSelectedSizes,
            [productId]: size,
        }));
    };

    const placeOrder = () => {
        setShowAddressForm(true);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const continueToPayment = () => {
        setShowPaymentSelection(true);
    }

    const handlePaymentSelection = async (paymentType) => {
        const total = cart.reduce((total, item) => {
            const product = products.find(p => p._id === item.productId);
            return total + (product ? (count[item.productId] || 0) * product.price * item.quantity : 0);
        }, 0);
        if (paymentType === 'online') {
            var options = {
                key: "rzp_test_D6uvdHaGMJkfge",
                key_secret: "9ndBhyXumgmepSEjHigyA1sH",
                amount: total * 100,
                currency: "INR",
                name: "E-Commerce",
                description: "for testing purpose",
                handler: async function (response) {
                    const orderDetails = {
                        products: cart.map(item => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            size: selectedSizes[item.productId],
                        })),
                        email: email,
                        address:address,
                        price:total,
                        paymentType: 'online',
                    };

                    try {
                        await axios.post('http://localhost:4000/orders', orderDetails);
                        navigate('/orders');
                    } catch (error) {
                        console.error("Error storing order details:", error);
                    }
                },
                prefill: {
                    name: "Dev",
                    email: email,
                    contact: "7904093855"
                },
                notes: {
                    address: address,
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        } 
        else if (paymentType === 'cash') {
            console.log("Cash on Delivery Selected");
            const orderDetails = {
                products: cart.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    size: selectedSizes[item.productId],
                })),
                email: email,
                address:address,
                price:total,
                paymentType: 'cash',
            };
            try {
                await axios.post('http://localhost:4000/orders', orderDetails);
                navigate('/orders');
            } catch (error) {
                console.error("Error storing order details:", error);
            }
        }
        setShowPaymentSelection(false);
    };
    return (
        <>
            <div className='cart-header'>
                <Navbar />
            </div>
            <div val={{ suc }} className='cart-products'>
                <div className='cart-left'></div>
                <div className='cart-centre'>
                    <div className='cart-products-top'>
                        <div className='cart-bag'></div>
                        <div className='cart-address'></div>
                        <div className='cart-payment'></div>
                    </div>
                    <div className='cart-products-body'>
                        <div className='cart-products-details'>
                            {products.map(product => (
                                <React.Fragment key={product._id}>
                                    <div className="cart-product-cards">
                                        <div className='cart-img'>
                                            <Link to={`/cloths/men-top-wear/details/${product.category}/${product._id}`} className="link-to-more" key={product._id} reloadDocument>
                                                <img src={require(`../../../src/uploads/${product.images[0]}`)} alt={product.name} className='cart-img-res' />
                                            </Link>
                                        </div>
                                        <div className='cart-res-text'>
                                            <div className='cart-text'>
                                                <p className='cart-brand'>{product.brand}</p>
                                                <p className='cart-name'>{product.name}</p>
                                                <div className='cart-option'>
                                                    <div className='size-header'>Size:</div>
                                                    <div className='cart-size'>
                                                        {product.size.map(size => (
                                                            <div className={`product-cart-size ${selectedSizes[product._id] === size ? 'selected-size' : ''}`} onClick={() => handleSizeSelect(product._id, size)} key={size}>{size}</div>
                                                        ))}
                                                    </div>
                                                    <div className='count-header'>Qty:</div>
                                                    <div className='cart-quantity'>
                                                        <button className='decrease-count' onClick={() => decreaseCount(product._id)}>-</button>
                                                        <div className='quantity-count'>{count[product._id] || 0}</div>
                                                        <button className='increase-count' onClick={() => increaseCount(product._id)}>+</button>
                                                    </div>
                                                </div>
                                                <p className='cart-price'>&#8377;{count[product._id]>=1?product.price * count[product._id]:product.price}</p>
                                            </div>
                                            <div className='cart-last'>
                                                <IoClose size={22} color='#124559' onClick={() => { deleteCartProduct(product._id, email) }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cart-divider'></div>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className='cart-products-total'>
                            <div className='total-header'>PRICE DETAILS ({cart.length} item)</div>
                            <div className='total-products-name'>
                                <div className='total-name'>
                                    {cart.map(item => {
                                        const product = products.find(p => p._id === item.productId);
                                        return (
                                            <div className='pro-name' key={item.productId}>
                                                {product && product.name}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='total-price-products'>
                                    {cart.map(item => {
                                        const product = products.find(p => p._id === item.productId);
                                        const totalPrice = product? (item.quantity === 0 ? product.price : product.price * item.quantity) : 0;
                                        return (
                                            <div className='pro-name' key={item.productId}>
                                                &#8377;{totalPrice}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className='total-divider'></div>
                            <div className='total-amount'>
                                <div className='t-amount'>TOTAL AMOUNT</div>
                                <div className='t-price'>
                                    <div className='t-price'>
                                         &#8377;{cart.reduce((total, item) => {
                                            const product = products.find(p => p._id === item.productId);
                                            return total + (product ? (count[item.productId] || 0) * product.price * item.quantity : 0);
                                        }, 0)}
                                    </div>
                                </div>
                            </div>
                            <div className='total-divider'></div>
                            <button className='order-btn' onClick={placeOrder}>Place Order</button>
                            {showAddressForm && (
                                <div className="address-form">
                                    <input type="text" placeholder="Enter your address" value={address} onChange={handleAddressChange} className='add-text'/>
                                    <button onClick={continueToPayment} className='add-btn'>Continue</button>
                                </div>
                            )}
                            {showPaymentSelection && (
                                <div className="payment-selection">
                                    <div className='pay-header'>Payment Type</div>
                                    <div className='pay'>
                                        <button onClick={() => handlePaymentSelection('online')} className='pay-online'>Online Payment</button>
                                        <button onClick={() => handlePaymentSelection('cash')} className='pay-offline'>Cash on Delivery</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='cart-right'></div>
            </div>
            <div className='cart-footer'>
                <Footer />
            </div>
        </>
    );
}

export default Cart;