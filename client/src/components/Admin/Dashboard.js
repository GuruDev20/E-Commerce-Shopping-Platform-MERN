import React,{useEffect,useState} from 'react'
import '../../styles/Admin.css'
import { MdOutlineAttachMoney } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineStock } from "react-icons/ai";
import axios from 'axios';
function Dashboard(props) {
    const [totalPrice,setTotalPrice]=useState(0);
    const [countUsers,setCountUsers]=useState(0);
    const [countDealers,setCountDealers]=useState(0);
    const [countStocks,setCountStocks]=useState(0);
    const [reviews,setReviews]=useState([]);
    const [products,setProducts]=useState([]);
    const [stocks,setStocks]=useState([]);
    useEffect(()=>{
        const fetchTotalRevenue=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/totalrevenue');
                setTotalPrice(response.data);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchTotalRevenue();
    })

    useEffect(()=>{
        const fetchTotalUsers=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/totalUsers',{
                        params: {
                            role: 'User'
                        }
                    }
                );
                setCountUsers(response.data);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchTotalUsers();
    })

    useEffect(()=>{
        const fetchTotalDealers=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/totalDealers',{
                    params: {
                            role: 'Dealer'
                        }
                    }
                );
                setCountDealers(response.data);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchTotalDealers();
    })

    useEffect(()=>{
        const fetchTotalStocks=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/totalStocks');
                setCountStocks(response.data);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchTotalStocks();
    })

    useEffect(()=>{
        const fetchReviews=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/fetchReviews');
                setReviews(response.data);
            }
            catch(error){
                console.error(error);
            }
        }
        fetchReviews();
    })

    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const productPromises = reviews.map(item => axios.get(`http://localhost:4000/products/${item.productId}`));
                const productResponses = await Promise.all(productPromises);
                const productList = productResponses.map(res => res.data);
                setProducts(productList);
            }   
            catch(error){
                console.log(error);
            }
        }
        fetchProducts();
    },[reviews])

    useEffect(()=>{
        const fetchOrders=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/fetchStocks');
                // const distinctStockTypes = [...new Set(response.data.map((item) => item.type))];
                setStocks(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchOrders();
    })


    return (
        <div className='dash-admin'>
            <div className='dash-name'>{props.name}</div>
            <div className='dash-view'>
                <div className='total-revenue'>
                    <div className='revenue-header'>
                        <MdOutlineAttachMoney />
                        <div className='revenue-name'>Earnings</div>
                    </div>
                    <div className='revenue-total'>{totalPrice}</div>
                </div>
                <div className='total-users'>
                    <div className='user-header'>
                        <LuUser2  />
                        <div className='user-name'>Users</div>
                    </div>
                    <div className='user-total'>{countUsers}</div>
                </div>
                <div className='total-dealers'>
                    <div className='dealers-header'>
                        <GrUserManager  />
                        <div className='dealers-name'>Dealers</div>
                    </div>
                    <div className='dealers-total'>{countDealers}</div>
                </div>
                <div className='total-stocks'>
                    <div className='stocks-header'>
                        <AiOutlineStock  />
                        <div className='stocks-name'>Stocks</div>
                    </div>
                    <div className='stocks-total'>{countStocks}</div>
                </div>
            </div>
            <div className='reviews'>
                <div className='user-reviews'>
                    <div className='user-reviews-name'>Reviews</div>
                    <div className='available-reviews'>
                        <div className='reviews-content'>
                            {products.map((product, index) => (
                                <div className='rev-products'>
                                    <div key={index} className='product-review'>
                                        <div className='product-name'>{product.name}</div>
                                        <div className='review-body'>{reviews[index].review}</div>
                                    </div>
                                    <div className='horizontal-divider'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='need-stocks'>
                    <div className='stocks-name-title'>Stocks</div>
                    <div className='available-stocks-name'>
                        {stocks.map((stock, index) => (
                            <div className='fetch-stocks'>
                                <div key={index}>{stock}</div>
                                <div className='horizontal-divider'></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard