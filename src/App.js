import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Listing from './pages/Listing';
import MainHeader from './components/MainHeader';
import Cart from './pages/Cart';
import LeftSidebar from './components/LeftSidebar';
import CartListing from './components/CartListing';

function App() {
  return (
    <div>
      <MainHeader />
      <div className="container">
        <div className="row">
          <div className="col">
            <LeftSidebar />
          </div>
          <div className="col-6">
            <Switch>
              <Route path='/' exact>
                <Redirect to="/products" />
              </Route>
              <Route path='/products' >
                <Listing />
              </Route>
              <Route path='/cart'>
                <CartListing />
              </Route>
            </Switch>
          </div>
          <div className="col">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
