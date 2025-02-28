import { Link } from 'react-router-dom';

const UserList = ({ users, deleteUser }) => {
  return (
    <div className="container-fluid" style={{ width: "100%" }}>
      <h2>Usuarios</h2>
      <table className="table table-striped table-bordered" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* Contenedor para los botones */}
                <div className="d-flex justify-content-between w-75 mx-auto">
                  <Link to={`/edit/${user.id}`} className="btn btn-warning">
                    Editar
                  </Link>
                  
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
