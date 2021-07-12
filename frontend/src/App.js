import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import FilterScreen from "./screens/FilterScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3 px-2">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/products/:mat" component={FilterScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
