import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
//Redux Imports
import {Switch, Route, Redirect} from 'react-router-dom';
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
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector(state => state.user);
  return (
    <div className="App">
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path = '/books' component = {Books} />
          <Route path = '/book/:id' component = {Book} /> 
          <Route path = '/stalls' component = {Stall} />
          <Route path = '/cart' exact component = {Cart} />
          <Route path = '/admin' render = {(props) => {
            if (user && user.is_admin) {
              return <AdminPanel {...props} />
            }
            else {
              return <Redirect to = '/' />
            }
          }} />
          <Route path = '/' exact component = {Home} />
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
