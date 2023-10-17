import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader/>
      <main>
         <Route path="/welcome">
           <Welcome/>
         </Route>
         <Route path='/product'>
           <Products/>
         </Route>
      </main>
       
    </div>
  )
}

export default App;

