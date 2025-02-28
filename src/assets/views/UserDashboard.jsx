import { useState } from "react";
import { Link } from "react-router-dom";
import UserList from "../complementos/usuarios/UserList";
import AddUser from "../complementos/usuarios/AddUser";

export default function UserDashboard() {
  // Definir los usuarios en el estado
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
  

  // Función para agregar un nuevo usuario
  const addUser = (userData) => {
    setUsers([...users, { id: users.length + 1, ...userData }]);
  };

  // Función para eliminar un usuario
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
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
      <h2 className="mb-4">Gestión de Usuarios</h2>

      {/* Enlace para agregar un nuevo usuario */}
      <div className="mb-3">
        <Link to="/add" className="btn btn-primary">
          Agregar Usuario
        </Link>
      </div>

      {/* Mostrar la lista de usuarios */}
      <div className="w-100" style={{ maxWidth: "1000px" }}>
        <UserList users={users} addUser={addUser} deleteUser={deleteUser} />
        
      </div>
    </div>
  );
}
