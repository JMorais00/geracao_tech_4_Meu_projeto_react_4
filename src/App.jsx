import { useState } from "react";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import "./App.css";

function App() {
  const [produtosNovos, setProdutosNovos] = useState([]);

  function adicionarProduto(novoProduto) {
    setProdutosNovos((produtos) => [...produtos, novoProduto]);
  }

  return (
    <div className="app-container">
      <Login />

      <main className="store-container">
        <h1>Minha Loja Virtual</h1>

        <AddProduct onAdicionar={adicionarProduto} />

        <h2>Nossos Produtos</h2>

        <ProductList produtosNovos={produtosNovos} />
      </main>
    </div>
  );
}

export default App;
