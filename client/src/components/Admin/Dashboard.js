import React, { useState } from 'react';
import '../../styles/Dashboard.css'
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom'
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import axios from 'axios'
import Cookie from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const sizesData = {
  	'sizes': ['Onesize', 'S', 'M', 'L', 'XL', 'XXL', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40', '42', '44'],
};

const colorsData = {
  	'colors': ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Maroon', 'Teal', 'Pink', 'Grey', 'Navy'],
};

function Dashboard() {
	const navigate = useNavigate();
	const [isLightTheme, setIsLightTheme] = useState(true);
	// const [selectedImages, setSelectedImages] = useState([]);
	const [displayedImage, setDisplayedImage] = useState(null);
	const [showSizeDropdown, setShowSizeDropdown] = useState(false);
	const [selectedSize, setSelectedSize] = useState([]);
	const [selectedColor, setSelectedColor] = useState([]);
	const [showColorDropdown, setShowColorDropdown] = useState(false);
	const [showFileInput, setShowFileInput] = useState(true);
	const [data, setData] = useState({ name: '', brand: '', price: '', category: '', size: [], color: [], pattern: '', description: '', images: [] });

	const toggleTheme = () => {
		setIsLightTheme(prevTheme => !prevTheme);
	};

	const handleLogout = () => {
		localStorage.clear();
		Cookie.remove('token');
		navigate('/');
	}

	const handleSizeCheckboxChange = (value) => {
		const updatedSize = [...selectedSize];
		if (updatedSize.includes(value)) {
			updatedSize.splice(updatedSize.indexOf(value), 1);
		} 
		else {
			updatedSize.push(value);
		}
		setSelectedSize(updatedSize);
		setData({ ...data, size: updatedSize });
	};

	const handleColorCheckboxChange = (value) => {
		const updatedColor = [...selectedColor];
		if (updatedColor.includes(value)) {
			updatedColor.splice(updatedColor.indexOf(value), 1);
		} 
		else {
			updatedColor.push(value);
		}
		setSelectedColor(updatedColor);
		setData({ ...data, color: updatedColor });
	};
	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		const imageUrls = files.map(file => URL.createObjectURL(file));
		setDisplayedImage(imageUrls[0]);
		setShowFileInput(false);
		setData({ ...data, images: imageUrls });
	};

	const deleteSelectedImages = () => {
		// setSelectedImages([]);
		setDisplayedImage(null);
		setShowFileInput(true);
	};

	const storeToDb = async () => {
		try {
			const formData = new FormData();
			formData.append('images',JSON.stringify(data.images));
			formData.append('name', data.name);
			formData.append('brand', data.brand);
			formData.append('price', data.price);
			formData.append('category', data.category);
			formData.append('size', JSON.stringify(data.size));
			formData.append('color', JSON.stringify(data.color));
			formData.append('pattern', data.pattern);
			formData.append('description', data.description);
			const response = await axios.post('http://localhost:4000/products', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${Cookie.get('token')}`
			}
			});
			console.log(response.data);
		} 
		catch (error) {
			console.error('Error storing data:', error);
		}
	};

	return (
		<div className={`dashboard-container ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
		<div className='dashboard-left'>
			<div className='dashboard-header'>
			<div className='dashboard-name'>Admin</div>
			<div className='dashboard-icon'>
				<div className='dash-logout' onClick={handleLogout}>
				<MdLogout size={25} />
				</div>
			</div>
			</div>
			<div className='divider-content'></div>
			<Link to='/admin' className='d-board' reloadDocument>
			<div className='dashboard-body'>Dashboard</div>
			</Link>
		</div>
		<div className='dashboard-right'>
			<div className='d-right-header'>
			<div className='dashboard-theme' onClick={toggleTheme}>
				{isLightTheme ? <IoMdSunny size={25} /> : <IoMoon size={25} />}
			</div>
			<div className='notifications'>
				<IoMdNotifications size={25} />
			</div>
			</div>
			<div className='d-right-body'>
				<div className='product-total'>
					<div className='product-card1'>
						<div className='card1-title'>Total Products</div>
						<div className='divider-content1'></div>
						<div className='card1-count'>200</div>
					</div>
					<div className='product-card1'>
						<div className='card2-title'>Total Revenue</div>
						<div className='divider-content1'></div>
						<div className='card2-count'>20000</div>
					</div>
					<div className='product-card1'>
						<div className='card3-title'>Dealers</div>
						<div className='divider-content1'></div>
						<div className='card3-count'>20+</div>
					</div>
				</div>
				<div className='addproducts'>
					<div className='add-left'>
						{showFileInput && (
							<div>
								<label htmlFor="myfileSingle" className="custom-file-input"><FiUploadCloud className='file-img' /> Add Image</label>
								<input type="file" id="myfileSingle" name="myfileSingle" onChange={handleImageChange} multiple />
							</div>
						)}
						{!displayedImage ? (
							<></>
						) : (
							<div className='selected-images-list'>
								<img src={displayedImage} alt="Selected" className='select-img' />
							</div>
						)}
						{displayedImage && (
							<div className='delete-button-container'>
							<button onClick={deleteSelectedImages} className='delete-button'>Delete</button>
							</div>
						)}
					</div>
					<div className='add-right'>
						<h3 className='right-header-title'>Descriptions</h3><br/>
						<div className='description-product' encType="multipart/form-data">
							<input type='text' placeholder='Product Name' className='input-field product-name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
							<input type='text' placeholder='Brand' className='input-field brand' value={data.brand} onChange={(e)=>setData({...data,brand:e.target.value})}/>
							<input type='number' placeholder='Price' className='input-field price' value={data.price} onChange={(e)=>setData({...data,price:e.target.value})}/>
							<select name='category' className='select-field product-category' value={data.category} onChange={(e)=>setData({...data,category:e.target.value})}>
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
							<div className='input-field product-name'>
								<div onClick={() => setShowSizeDropdown(!showSizeDropdown)}>
									Size
									{showSizeDropdown && (
										<div className='dropdown-content input-field product-name'>
											{sizesData.sizes.map((size) => (
												<div key={size}>
													<input
														type='checkbox'
														id={size}
														checked={selectedSize.includes(size)}
														onChange={() => handleSizeCheckboxChange(size)}
													/>
													<label htmlFor={size}>{size}</label>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
							<div className='input-field product-name'>
								<div onClick={() => setShowColorDropdown(!showColorDropdown)}>
									Color
									{showColorDropdown && (
										<div className='dropdown-content'>
											{colorsData.colors.map((color) => (
												<div key={color}>
													<input
														type='checkbox'
														id={color}
														checked={selectedColor.includes(color)}
														onChange={() => handleColorCheckboxChange(color)}
													/>
													<label htmlFor={color}>{color}</label>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
							<select name='pattern' className='select-field product-pattern' value={data.pattern} onChange={(e)=>setData({...data,pattern:e.target.value})}>
								<option value="">Pattern</option>
								<option value="Solid">Solid</option>
								<option value="Stripe">Stripe</option>
								<option value="Checked">Checked</option>
								<option value="Textured">Textured</option>
								<option value="Floral">Floral</option>
								<option value="Printed">Printed</option>
								<option value="Wove Design">Wove Design</option>
							</select>
							<input type='text' placeholder='Description' className='input-field product-description' value={data.description} onChange={(e)=>setData({...data,description:e.target.value})}/>
							<button className='addItemsToStorage' onClick={storeToDb}>Add Item</button>
						</div>
					</div>
				</div>
				<div className='display-custom-products'>
					<h3 className='list-available'>Available Products</h3>
					<div className='list-options'>
						<select name='available-products' className='select-field1 product-available'>
							<option value="">Available Products</option>
							<option value="Mens">Mens</option>
							<option value="Womens">Womens</option>
							<option value="Kids">Kids</option>
						</select>
					</div>
					<div className='list-results'></div>
				</div>
			</div>
		</div>
		</div>
	);
}

export default Dashboard;
