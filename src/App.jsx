import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./assets/complementos/login/Dashboard";

import UserDashboard from "./assets/views/UserDashboard";
import EditUser from "./assets/complementos/usuarios/EditUser";
import AddUser from "./assets/complementos/usuarios/AddUser";

import ProductDashboard from "./assets/views/ProductDashboard";
import EditProduct from "./assets/productos/EditProduct";
import AddProduct from "./assets/productos/AddProduct";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow-lg" style={{ width: "24rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
        <h2 className="text-center mb-4 text-white">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>
          <button type="submit" className="btn btn-secondary w-50 mx-auto d-block">Entrar</button><p></p>
          <button type="button" onClick={handleClear} className="btn btn-secondary w-50 mx-auto d-block">Limpiar</button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Carlos Pérez", email: "carlos@example.com", role: "Admin" },
    { id: 2, name: "Ana López", email: "ana@example.com", role: "Usuario" },
    { id: 3, name: "Juan García", email: "juan@example.com", role: "Usuario" },
    { id: 4, name: "Marta Sánchez", email: "marta@example.com", role: "Admin" },
    { id: 5, name: "Luis Fernández", email: "luis@example.com", role: "Usuario" },
    { id: 6, name: "Pedro Rodríguez", email: "pedro@example.com", role: "Usuario" },
    { id: 7, name: "Laura Martínez", email: "laura@example.com", role: "Admin" },
    { id: 8, name: "Ricardo Gómez", email: "ricardo@example.com", role: "Usuario" },
  ]);
  

  const [products, setProducts] = useState([
    { id: 1, name: "Camiseta Negra", description: "Camiseta de color negro, perfecta para cualquier ocasión.", price: "$20" },
    { id: 2, name: "Jeans Azul", description: "Jeans azules de corte clásico, cómodo y elegante.", price: "$35" },
    { id: 3, name: "Zapatillas Blancas", description: "Zapatillas blancas deportivas, ideales para todo el día.", price: "$50" },
    { id: 4, name: "Chaqueta de Cuero", description: "Chaqueta de cuero genuino, un must-have para cualquier armario." , price: "$80"},
    { id: 5, name: "Gorra Roja", description: "Gorra roja con logo bordado, el complemento perfecto para tu look.", price: "$15" },
  ]);

  const addUser = (userData) => {
    setUsers([...users, { id: users.length + 1, ...userData }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === parseInt(id) ? { ...user, ...updatedUser } : user)));
  };

  // Función para agregar un nuevo producto
  const addProduct = (productData) => {
    setProducts((prevProducts) => [...prevProducts, { id: prevProducts.length + 1, ...productData }]);
  };

  // Función para eliminar un producto
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Función para actualizar un producto
  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === parseInt(id) ? { ...product, ...updatedProduct } : product
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* catalogo de usuarios */}
        <Route path="/user-dashboard" element={<UserDashboard users={users} deleteUser={deleteUser} />} />
        <Route path="/edit/:id" element={<EditUser users={users} updateUser={updateUser} />} />
        <Route path="/add" element={<AddUser addUser={addUser} />} />
        {/* catalogo de productos */}
        <Route path="/product-dashboard" element={<ProductDashboard products={products} deleteProduct={deleteProduct} />} />
        <Route path="/add-product" element={<AddProduct addProduct={addProduct} />} />
        <Route path="/edit-product/:id" element={<EditProduct products={products} updateProduct={updateProduct} />} />
      </Routes>
    </Router>
  );
}
