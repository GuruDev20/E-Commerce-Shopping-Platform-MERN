import React from 'react'
import '../../styles/Admin.css'
import { MdOutlineAttachMoney } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineStock } from "react-icons/ai";
function Dashboard(props) {
    return (
        <div className='dash-admin'>
            <div className='dash-name'>{props.name}</div>
            <div className='dash-view'>
                <div className='total-revenue'>
                    <div className='revenue-header'>
                        <MdOutlineAttachMoney />
                        <div className='revenue-name'>Earnings</div>
                    </div>
                    <div className='revenue-total'>

                    </div>
                </div>
                <div className='total-users'>
                    <div className='user-header'>
                        <LuUser2  />
                        <div className='user-name'>Users</div>
                    </div>
                    <div className='user-total'>

                    </div>
                </div>
                <div className='total-dealers'>
                    <div className='dealers-header'>
                        <GrUserManager  />
                        <div className='dealers-name'>Dealers</div>
                    </div>
                    <div className='dealers-total'>

                    </div>
                </div>
                <div className='total-stocks'>
                    <div className='stocks-header'>
                        <AiOutlineStock  />
                        <div className='stocks-name'>Stocks</div>
                    </div>
                    <div className='stocks-total'>

                    </div>
                </div>
            </div>
            <div className='reviews'>
                <div className='user-reviews'>
                    <div className='user-reviews-name'>Reviews</div>
                    <div className='available-reviews'>
                        <div className='reviews-content'>
                            <div className='product-reviews'></div>
                            <div className='review-body-content'></div>
                        </div>
                    </div>
                </div>
                <div className='need-stocks'>
                    <div className='stocks-name-title'>Stocks</div>
                    <div className='available-stocks-name'></div>
                    <div className='stocks-count'></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard