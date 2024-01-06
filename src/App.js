import React from 'react';
import Welcome from '../src/components/Welcome';
import {Routes,Route} from 'react-router-dom';
import Dresses from '../src/components/utils/Dresses';
import Foods from '../src/components/utils/Foods';
import Home from '../src/components/utils/Home';
import Health from '../src/components/utils/Health';
import Furntiures from './components/utils/Furntiure';
import Gifts from '../src/components/utils/Gifts';
function App(){
  return (
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/shop" element={<Welcome/>}/>
      <Route path="/cloths" element={<Dresses/>}/>
      <Route path="/foods" element={<Foods/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/health" element={<Health/>}/>
      <Route path="/furntiures" element={<Furntiures/>}/>
      <Route path="/gifts" element={<Gifts/>}/>
    </Routes>
  )
}
export default App;