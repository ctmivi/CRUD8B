import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.description || !newProduct.price) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Verifica que addProduct es una función antes de llamarla
    if (typeof addProduct === "function") {
      addProduct(newProduct); // Llamada a la función de agregar producto
    } else {
      console.error("addProduct no es una función");
    }

    setNewProduct({ name: "", description: "", price: "" }); // Limpiar el formulario
    setError("");
    navigate('/product-dashboard');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow-lg" style={{ width: "24rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
        <h2 className="text-center mb-4 text-white">Agregar Producto</h2>

        {/* Mostrar mensajes de error */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Nombre del Producto"
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label text-white">Descripción</label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-control"
              value={newProduct.description}
              onChange={handleChange}
              placeholder="Descripción"
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label text-white">Precio</label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-control"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Precio"
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>

          <button type="submit" className="btn btn-secondary w-50 mx-auto d-block">Agregar Producto</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
