
import Register from './Register';
import Effect from './Effect';
import Effect2 from './Effect2';
import Home from './Home';
import Login from './Login';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route excat path='/Home' element={< Home />} />
        <Route excat path='/Login' element={< Login />} />
        <Route excat path='/Register' element={<Register />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
