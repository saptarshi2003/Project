
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './screens/Signup.js';
import Login from './screens/login';
import MyOrder from './screens/MyOrder.js';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './components/ContextReducer.js';
function App() {
  return (
    <CartProvider>
    <Router>
    <div >
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/CreateUser" element={<Signup/>}/>
       <Route exact path="/myOrder" element={<MyOrder/>}/>

    </Routes>
     
    </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
