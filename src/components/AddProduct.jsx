import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

function AddProduct({ onAdicionar }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(null);
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const novoProduto = {
      id: Date.now(),
      title: nome,
      price: preco,
      image: imagem,
      description: descricao,
    };

    onAdicionar(novoProduto);

    setNome("");
    setPreco(null);
    setImagem("");
    setDescricao("");
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Adicionar Produto</h2>

      <InputText
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do produto"
        required
      />

      <InputNumber
        value={preco}
        onValueChange={(e) => setPreco(e.value)}
        placeholder="Preço"
        min={0.01}
        required
      />

      <InputText
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        placeholder="URL da imagem"
        type="url"
        required
      />

      <InputText
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição do produto"
        required
      />

      <Button type="submit" label="Adicionar Produto" icon="pi pi-plus" />
    </form>
  );
}

export default AddProduct;
