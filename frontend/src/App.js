import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

import Home from './components/Home'

import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="container container-fluid">
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
          
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
