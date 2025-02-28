import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = ({ products, updateProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({ name: "", description: "", price: "" });

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((product) => product.id === parseInt(id));
      if (product) {
        setProductData({ name: product.name, description: product.description, price: product.price });
      } else {
        // Si no se encuentra el producto, redirigir al dashboard
        navigate("/product-dashboard");
      }
    }
  }, [id, products, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, productData); // Llamada para actualizar el producto
    navigate("/product-dashboard"); // Redirige al dashboard
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow-lg" style={{ width: "24rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
        <h2 className="text-center mb-4 text-white">Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={productData.name}
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
              value={productData.description}
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
              value={productData.price}
              onChange={handleChange}
              placeholder="Precio"
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>

          <button type="submit" className="btn btn-secondary w-50 mx-auto d-block">Actualizar Producto</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
