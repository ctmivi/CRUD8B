import { useNavigate } from "react-router-dom"; // Importar useNavigate

const ProductList = ({ products, deleteProduct }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    // Redirigir a la página de edición con el id del producto
    navigate(`/edit-product/${id}`);
  };

  return (
    <div className="container">
      <h3>Lista de Productos</h3>

      <table className="table table-striped table-bordered" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                {/* Usar la función handleEdit para redirigir */}
                <button onClick={() => handleEdit(product.id)} className="btn btn-warning">
                  Editar
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-danger ms-2"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
