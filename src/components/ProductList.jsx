import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList({ produtosNovos }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resposta) => {
        setProdutos(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar produtos:", erro);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="product-list">
      {[...produtos, ...produtosNovos].map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default ProductList;
