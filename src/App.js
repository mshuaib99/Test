import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Routes , Route} from 'react-router-dom';
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";

function App() {
  return (
    <Template>
      <Routes>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:slug" element={<ProductDetail />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </Template>
  );
}

export default App;
