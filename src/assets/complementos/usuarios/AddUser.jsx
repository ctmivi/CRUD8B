import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = ({ addUser }) => {
  const [userData, setUserData] = useState({ name: "", email: "", role: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Usamos useNavigate para la redirección

  // Maneja el cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!userData.name || !userData.email || !userData.role) {
      setError("Todos los campos son obligatorios.");
      setSuccessMessage("");
      return;
    }

    // Si la validación es exitosa, agregamos el usuario
    addUser(userData);
    setSuccessMessage("Usuario creado con éxito!");
    setError("");
    navigate('/user-dashboard');

    setUserData({ name: "", email: "", role: "" });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow-lg" style={{ width: "24rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
        <h2 className="text-center mb-4 text-white">Agregar Usuario</h2>

        {/* Mostrar mensajes de error o éxito */}
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Nombre"
              value={userData.name}
              onChange={handleChange}
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label text-white">Rol</label>
            <input
              type="text"
              id="role"
              name="role"
              className="form-control"
              placeholder="Rol"
              value={userData.role}
              onChange={handleChange}
              style={{ backgroundColor: '#333', color: 'white' }}
            />
          </div>

          <button type="submit" className="btn btn-secondary w-50 mx-auto d-block" >Crear Usuario</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
