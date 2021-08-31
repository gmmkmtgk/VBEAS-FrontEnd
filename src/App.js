import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
//Redux Imports
import {Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//Pages
import Home from './Pages/Home/Home';
import Stall from './Pages/Stall/Stall';
import Cart from './Pages/Cart/Cart';
import Book from './Pages/Book/Book';
import Header from './Partials/Header/Header';
import Footer from './Partials/Footer/Footer';
import Books from './Pages/Books/Books';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/books' component = {Books} />
          <Route path = '/book/:id' component = {Book} /> 
          <Route path = '/stalls/:id' component = {Stall} />
          <Route path = '/cart' exact component = {Cart} />
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
      </ScrollToTop>
    </div>
  );
}

export default App;
