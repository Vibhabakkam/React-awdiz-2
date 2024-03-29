
import Register from './Register';
import Effect from './Effect';
import Effect2 from './Effect2';
import Home from './Home';
import Login from './Login';
import Addproduct from './Addproduct';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './ProductPage'


function App() {
  return (
    <div>
      <Routes>
        <Route excat path='/Home' element={< Home />} />
        <Route excat path='/Login' element={< Login />} />
        <Route excat path='/Register' element={<Register />} />
        <Route excat path='/Addproduct' element={<Addproduct />} />
        <Route excat path='/productPage' element={<ProductPage />} />

        <Route />
      </Routes>
    </div>
  );
}

export default App;
