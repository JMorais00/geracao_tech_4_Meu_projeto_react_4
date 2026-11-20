import { Card } from "primereact/card";
import { Button } from "primereact/button";

function ProductCard({ produto }) {
  return (
    <Card title={produto.title} className="product-card">
      <img src={produto.image} alt={produto.title} className="product-image" />

      <p>{produto.description}</p>

      <h3>R$ {Number(produto.price).toFixed(2)}</h3>

      <Button
        label="Adicionar ao carrinho"
        icon="pi pi-shopping-cart"
        className="p-button-primary"
      />
    </Card>
  );
}

export default ProductCard;
