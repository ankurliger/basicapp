import './App.css';
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
<NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/addProduct" component={AddProduct} />
    </Switch>


    </>
  );
}

export default App;
