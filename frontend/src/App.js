import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
           {/* <Route path="/" component={Home} exact /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
