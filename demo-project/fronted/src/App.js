import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateRoute';
import Regestration from './components/Regestration';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<PrivateComponent />} >
            <Route path="/logout" element={<h1>Product Listing Component</h1>} />
          </Route>
          <Route path="/singup" element={<Regestration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
