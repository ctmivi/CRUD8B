import { useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../productos/ProductList";

export default function ProductDashboard() {
  // Estado para manejar los productos
  const [products, setProducts] = useState([
    { id: 1, name: "Camiseta Negra", description: "Camiseta de color negro, perfecta para cualquier ocasión.", price: "$20" },
    { id: 2, name: "Jeans Azul", description: "Jeans azules de corte clásico, cómodo y elegante.", price: "$35" },
    { id: 3, name: "Zapatillas Blancas", description: "Zapatillas blancas deportivas, ideales para todo el día.", price: "$50" },
    { id: 4, name: "Chaqueta de Cuero", description: "Chaqueta de cuero genuino, un must-have para cualquier armario." , price: "$80"},
    { id: 5, name: "Gorra Roja", description: "Gorra roja con logo bordado, el complemento perfecto para tu look.", price: "$15" },
  ]);

  // Función para agregar un nuevo producto
  const addProduct = (productData) => {
    setProducts((prevProducts) => [...prevProducts, { id: prevProducts.length + 1, ...productData }]);
  };

  // Función para eliminar un producto
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
      }}
    >
      <h2 className="mb-4">Gestión de Productos</h2>

      {/* Enlace para agregar un nuevo producto */}
      <div className="mb-3">
        <Link to="/add-product" className="btn btn-primary">
          Agregar Producto
        </Link>
      </div>

      {/* Mostrar la lista de productos */}
      <div className="w-100" style={{ maxWidth: "1000px" }}>
        <ProductList products={products} addProduct={addProduct} deleteProduct={deleteProduct} />

      </div>
    </div>
  );
}
