import React, { useState } from 'react';
import '../../styles/Dashboard.css'
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom'
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
function Dashboard() {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [selectedImages, setSelectedImages] = useState([]);
    const [displayedImage, setDisplayedImage] = useState(null);
    const toggleTheme = () => {
        setIsLightTheme(prevTheme => !prevTheme);
    };
    const updateSelectedImages = (selectedFiles) => {
        const updatedImages = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedImages.push(reader.result);
                if (i === 0) {
                    setDisplayedImage(reader.result);
                }
                if (i === selectedFiles.length - 1) {
                    setSelectedImages(updatedImages);
                }
            };
            if (selectedFiles[i]) {
                reader.readAsDataURL(selectedFiles[i]);
            }
        }
        console.log(updatedImages)
    };
    const accessFileUpload = (e) => {
        e.preventDefault();
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.addEventListener('change', (event) => {
            const selectedFiles = event.target.files;
            updateSelectedImages(selectedFiles);
        });
        input.click();
        console.log(selectedImages);
    };
    const deleteSelectedImages = () => {
        setSelectedImages([]);
        setDisplayedImage(null);
    };
    const storeToDb=()=>{
        
    }
  return (
    <div className={`dashboard-container ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
      <div className='dashboard-left'>
        <div className='dashboard-header'>
          <div className='dashboard-name'>Admin</div>
          <div className='dashboard-icon'>
            <Link to='/logout' className='dash-logout'>
              <MdLogout size={25}/>
            </Link>
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
            {isLightTheme ? <IoMdSunny size={25}/> : <IoMoon size={25}/>}
          </div>
          <div className='notifications'>
            <IoMdNotifications size={25}/>
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
                    <div className='select-file' onClick={accessFileUpload}>
                    {!displayedImage ? (
                        <>
                        <FiUploadCloud className='file-img' /> Add Image
                        </>
                    ) : (
                        <div className='selected-images-list'>
                            <img src={displayedImage} alt="Selected" className='select-img' />
                        </div>
                    )}
                    </div>
                    {displayedImage && (
                        <div className='delete-button-container'>
                        <button onClick={deleteSelectedImages} className='delete-button'>Delete</button>
                        </div>
                    )}
                </div>
                <div className='add-right'>
                    <h3 className='right-header-title'>Descriptions</h3><br/>
                    <div className='description-product'>
                        <input type='text' placeholder='Product Name' className='input-field product-name'/>
                        <input type='text' placeholder='Brand' className='input-field brand'/>
                        <input type='number' placeholder='Price' className='input-field price'/>
                        <select name='category' className='select-field product-category' >
                            <option value="">Category</option>
                            <option value="">Mens-Top-Wear</option>
                            <option value="">Mens-Bottom-Wear</option>
                            <option value="">Mens-Footwear</option>
                            <option value="">Mens-Gadgets</option>
                            <option value="">Mens-Accessories</option>
                            <option value="">Womens-Top-Wear</option>
                            <option value="">Womens-Bottom-Wear</option>
                            <option value="">Womens-Footwear</option>
                            <option value="">Womens-Gadgets</option>
                            <option value="">Womens-Accessories</option>
                            <option value="">Boys</option>
                            <option value="">Girls</option>
                            <option value="">Footwear</option>
                        </select>
                        <select name='size' className='select-field product-size'>
                            <option value="">Size</option>
                            <option value="Onesize">Onesize</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">Xl</option>
                            <option value="XXL">XXl</option>
                            <option value="22">22</option>
                            <option value="24">24</option>
                            <option value="26">26</option>
                            <option value="28">28</option>
                            <option value="30">30</option>
                            <option value="32">32</option>
                            <option value="34">34</option>
                            <option value="36">36</option>
                            <option value="38">38</option>
                            <option value="40">40</option>
                        </select>
                        <select name='color' className='select-field product-color'>
                            <option value="">Color</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Teal">Teal</option>
                            <option value="Maroon">Maroon</option>
                            <option value="Pink">Pink</option>
                            <option value="Grey">Grey</option>
                            <option value="Navy">Navy</option>
                            <option value="Cream">Cream</option>
                            <option value="Khaki">Khaki</option>
                        </select>
                        <select name='pattern' className='select-field product-pattern'>
                            <option value="">Pattern</option>
                            <option value="">Solid</option>
                            <option value="">Stripe</option>
                            <option value="">Checked</option>
                            <option value="">Textured</option>
                            <option value="">Floral</option>
                            <option value="">Printed</option>
                            <option value="">Wove Design</option>
                        </select>
                        <input type='text' placeholder='Description' className='input-field product-description'/>
                        <button className='addItemsToStorage' onClick={storeToDb()}>Add Item</button>
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
