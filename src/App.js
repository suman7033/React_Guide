import { Route,Switch,Redirect} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import './App.css';
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
      <MainHeader/>
      <main className="main">
        <Switch>
          <Route path='/' exact>
           <Redirect to='/welcome'/>
          </Route>
         <Route path="/welcome">
           <Welcome/>
         </Route>
         <Route path='/products/:productId'>
          <ProductDetails/>
         </Route>
         <Route path='/products' exact>
           <Products/>
         </Route>
         
         </Switch>
      </main>
       
    </div>
  )
}

export default App;

