import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './components/Home'

//User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'

//Admin imports
import Dashboard from './components/admin/Dashboard'
import Role from './components/admin/Role'

//Message imports
import Msg from './components/chat/Msg'

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
                <Route path="/me" element={<Profile />} />\
                <Route path="/messages" element={<Msg />} />
                <Route path="/dashboard/role" element={<Role />} />

            </Routes>
          </div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
