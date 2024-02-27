import React, { useEffect, useState } from 'react'
import '../../styles/Dealers.css'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookie from 'js-cookie'
import { GiShoppingBag } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FiUploadCloud } from 'react-icons/fi';
import { RiArrowDropDownLine } from "react-icons/ri";
const sizesData = {
  	'sizes': ['Onesize', 'S', 'M', 'L', 'XL', 'XXL', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40', '42', '44'],
};

const colorsData = {
  	'colors': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal', 'Pink', 'Grey', 'Navy'],
};
function Dealers() {
    const navigate = useNavigate();
    const[suc,setSuc]=useState();
    const [data, setData] = useState({ brand: '', name: '', price: '', category: '',count:'',type:'', size: [], color: [], pattern: '', description: '', images: [] ,New:'true'});
    const [showAddForm, setShowAddForm] = useState(false);
    const [showFileInput, setShowFileInput] = useState(true);
    const [displayedImages, setDisplayedImages] = useState(null);
    const [showSizeDropdown, setShowSizeDropdown] = useState(false);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [showColorDropdown, setShowColorDropdown] = useState(false);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isItemsVisible, setIsItemsVisible] = useState(false);
    axios.defaults.withCredentials=true;
    useEffect(() => {
        axios.get('http://localhost:4000/dealers/dashboard')
            .then(res => {
            if (res.data === 'Dealers Dashboard Success') {
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

    const addItems = () => {
        setShowAddForm(prevState => !prevState); 
        setIsItemsVisible(false);
    };

    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:4000/itemsDealers');
            setItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    const displayItems = () => {
        setIsItemsVisible(prevState => !prevState); 
        setShowAddForm(false); 
        if (!isItemsVisible) {
            fetchItems();
        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setDisplayedImages(files);
        setShowFileInput(false);
        console.log(files);
    };

    const handleSizeCheckboxChange = (value) => {
        const updatedSize = [...selectedSize];
        if (updatedSize.includes(value)) {
            updatedSize.splice(updatedSize.indexOf(value), 1);
        } else {
            updatedSize.push(value);
        }
        setSelectedSize(updatedSize);
        setShowSizeDropdown(prevState => !prevState);
    };

    const handleColorCheckboxChange = (value) => {
        const updatedColor = [...selectedColor];
        if (updatedColor.includes(value)) {
            updatedColor.splice(updatedColor.indexOf(value), 1);
        } else {
            updatedColor.push(value);
        }
        setSelectedColor(updatedColor);
        setShowColorDropdown(prevState => !prevState);
    };
    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('brand', data.brand);
            formData.append('name', data.name);
            formData.append('price', data.price);
            formData.append('category', data.category);
            formData.append('count', data.count);
            formData.append('type', data.type);
            formData.append('pattern', data.pattern);
            formData.append('description', data.description);
            formData.append('size', JSON.stringify(selectedSize));
            formData.append('color', JSON.stringify(selectedColor));
            formData.append('New', data.New);
            for (let i = 0; i < displayedImages.length; i++) {
                formData.append('images', displayedImages[i]);
            }
            for (var pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }
            const response = await axios.post('http://localhost:4000/storeDealers', formData);
            console.log('Data sent:', response.data);
            setData({ brand: '', name: '', price: '', category: '',count:'',type:'', size: [], color: [], pattern: '', description: '', images: [],New:'true'});
            setDisplayedImages(null);
            setShowFileInput(true);
        } 
        catch (error) {
            console.error('Error:', error);
        }
    }

    const deleteSelectedImages = () => {
        setDisplayedImages(null);
        setShowFileInput(true);
    };

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
					<div className='admin-name'>Dealer</div>
				</div>
				<div className='admin-sep'></div>
			</div>
			<div className='admin-right'>
				<div className='admin-navbar'>
					<div className='admin-profiles' onClick={handleLogout}><MdLogout size={25} className='profile-logo'/></div>
				</div>
				<div className='admin-body'>
                    <div className='stocks-options'>
                        <button className='add-products' onClick={addItems}>Add Items</button>
                        <button className='display-stock' onClick={displayItems}>Display</button>
                    </div>
                    {isItemsVisible && (
                        <>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <div className='items-container'>
                                    {items.map((item, index) => (
                                        <div key={index} className='item'>
                                            {item.images.length > 0 && (
                                                <div>
                                                    <img src={require(`../../../src/uploads/${item.images[0]}`)} alt={item.name} className='item-img'/>
                                                </div>
                                            )}
                                            <p>Brand: {item.brand}</p>
                                            <p>Price:{item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                    <div className='add-stocks-body'>
                    {
                        showAddForm && 
                        <div className='add-container'>
                            <div className='add-images'>
                                {
                                    showFileInput &&
                                    <div>
                                        <label htmlFor="myfileSingle" className="custom-file-input-dealers"><FiUploadCloud className='file-img-dealers' /> Add Image</label>
                                        <input type="file" id="myfileSingle" name="myfileSingle" onChange={handleImageChange} multiple />
                                    </div>
							    }
							    {
                                    !displayedImages ? (<></>) : (
                                        <div className='selected-images-list'>
                                            <img src={URL.createObjectURL(displayedImages[0])} alt="Selected" className='select-img' />
                                        </div>
							        )
                                }
							    {
                                    displayedImages &&
                                        <div className='delete-button-container'>
                                            <button onClick={deleteSelectedImages} className='delete-button'>Delete</button>
                                        </div>
							    }
                            </div>
                            <div className='add-data'>
                                <div className='add-form-data'>
                                    <input type='text' placeholder='Brand Name' onChange={(e)=>setData({...data,brand:e.target.value})}/>
                                    <input type='text' placeholder='Product Name' onChange={(e)=>setData({...data,name:e.target.value})}/>
                                    <input type='number' placeholder='Price' onChange={(e)=>setData({...data,price:e.target.value})}/>
                                    <input type='text' placeholder='Description' onChange={(e)=>setData({...data,description:e.target.value})}/>
                                    <input type='number' placeholder='Count' onChange={(e)=>setData({...data,count:e.target.value})}/>
                                    <div className='add-category'>
                                        <select name='category' value={data.category} onChange={(e)=>setData({...data,category:e.target.value})}>
                                            <option value="">Category</option>
                                            <option value="Mens-Top-Wear">Mens-Top-Wear</option>
                                            <option value="Mens-Bottom-Wear">Mens-Bottom-Wear</option>
                                            <option value="Mens-Footwear">Mens-Footwear</option>
                                            <option value="Mens-Gadgets">Mens-Gadgets</option>
                                            <option value="Mens-Accessories">Mens-Accessories</option>
                                            <option value="Womens-Top-Wear">Womens-Top-Wear</option>
                                            <option value="Womens-Bottom-Wear">Womens-Bottom-Wear</option>
                                            <option value="Womens-Footwear">Womens-Footwear</option>
                                            <option value="Womens-Gadgets">Womens-Gadgets</option>
                                            <option value="Womens-Accessories">Womens-Accessories</option>
                                            <option value="Boys">Boys</option>
                                            <option value="Girls">Girls</option>
                                            <option value="Footwear">Footwear</option>
                                        </select>
                                    </div>
                                    <div className='add-type'>
                                        <select name='type' value={data.type} onChange={(e)=>setData({...data,type:e.target.value})}>
                                            <option value="">Type</option>
                                            <option value="Casual Shirts">Casual Shirts</option>
                                            <option value="Formal Shirts">Formal Shirts</option>
                                            <option value="Blazers">Blazers</option>
                                            <option value="T-Shirts">T-Shirts</option>
                                            <option value="Jackets">Jackets</option>
                                            <option value="Jeans">Jeans</option>
                                            <option value="Casual trousers">Casual trousers</option>
                                            <option value="Formal Trousers">Formal Trousers</option>
                                            <option value="Shorts">Shorts</option>
                                            <option value="Track Pants">Track Pants</option>
                                            <option value="Sport Shoes">Sport Shoes</option>
                                            <option value="Casual Shoes">Casual Shoes</option>
                                            <option value="Formal Shoes">Formal Shoes</option>
                                            <option value="Sneakers">Sneakers</option>
                                            <option value="Sandals">Sandals</option>
                                            <option value="Socks">Socks</option>
                                            <option value="Smart Wearables">Smart Wearables</option>
                                            <option value="Fitness gadgets">Fitness gadgets</option>
                                            <option value="Wallets">Wallets</option>
                                            <option value="Belts">Belts</option>
                                            <option value="Perfumes">Perfumes</option>
                                            <option value="Kurtas">Kurtas</option>
                                            <option value="Sarees">Sarees</option>
                                            <option value="Tops">Tops</option>
                                            <option value="Sweatshirts">Sweatshirts</option>
                                            <option value="Leggings">Leggings</option>
                                            <option value="Palazzos">Palazzos</option>
                                            <option value="Salwars">Salwars</option>
                                            <option value="Flats">Flats</option>
                                            <option value="Heels">Heels</option>
                                            <option value="Handbags">Handbags</option>
                                        </select>
                                    </div>
                                    <div className='add-size'>
                                        <div className='size-dropdown' onClick={() => setShowSizeDropdown(!showSizeDropdown)}>
                                            <div className='sizes-select-field'>
                                                Size
                                                <RiArrowDropDownLine size={25} className='close-symbol' />
                                                {showSizeDropdown &&
                                                    <div className='dropdown-options'>
                                                        {sizesData.sizes.map((size, index) => (
                                                            <div key={size}>
                                                                <input type='checkbox' id={`size-${index}`} checked={selectedSize.includes(size)} onChange={() => handleSizeCheckboxChange(size)} />
                                                                <label htmlFor={`size-${index}`}>{size}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-color'>
                                        <div className='color-dropdown' onClick={() => setShowColorDropdown(!showColorDropdown)}>
                                            <div className='sizes-select-field'>
                                                Color
                                                <RiArrowDropDownLine size={25} className='close-symbol' />
                                                {showColorDropdown &&
                                                    <div className='dropdown-options'>
                                                        {colorsData.colors.map((color, index) => (
                                                            <div key={color}>
                                                                <input type='checkbox' id={`color-${index}`} checked={selectedColor.includes(color)} onChange={() => handleColorCheckboxChange(color)} />
                                                                <label htmlFor={`color-${index}`}>{color}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-pattern'>
                                        <select name='pattern' value={data.pattern} onChange={(e)=>setData({...data,pattern:e.target.value})}>
                                            <option value="">Pattern</option>
                                            <option value="Solid">Solid</option>
                                            <option value="Stripe">Stripe</option>
                                            <option value="Checked">Checked</option>
                                            <option value="Textured">Textured</option>
                                            <option value="Floral">Floral</option>
                                            <option value="Printed">Printed</option>
                                            <option value="Wove Design">Wove Design</option>
                                        </select>
                                    </div>
                                    <button onClick={handleSubmit} className='store-btn-dealer'>Add Item</button>
                                </div>
                            </div>
                        </div>
                    }
                    </div>
                </div>
			</div>
		</div>
    )
}

export default Dealers