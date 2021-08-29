import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
//Redux Imports
import {Switch, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

//Pages
import Home from './Pages/Home/Home';
import Stall from './Pages/Stall/Stall';
import Cart from './Pages/Cart/Cart';
import Book from './Pages/Book/Book';
import Header from './Partials/Header/Header';
import Footer from './Partials/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path = '/' exact render = {Home} />
        <Route path = '/stalls/:id' render = {Stall} />
        <Route path = '/cart' render = {Cart} />
        <Route path = '/book/:id' render = {Book} /> 
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default App;
