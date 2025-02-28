import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Cambiado a useNavigate
import axios from "axios";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // Cambiado a useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/login", { username, password })
      .then((response) => {
        // Suponiendo que la respuesta contiene el token de autenticación
        const { token } = response.data;
        
        // Guardamos el token en localStorage o cookies
        localStorage.setItem("authToken", token);

        // Redirigimos al dashboard o la página principal usando navigate
        navigate("/dashboard");  // Cambiado de history.push
      })
      .catch((error) => {
        setErrorMessage("Credenciales incorrectas. Intenta nuevamente.");
      });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Mi Tienda</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px", backgroundColor: "rgba(255, 255, 255, 0.9)", padding: "2rem", borderRadius: "12px" }}>
          <h2 className="text-dark mb-4">Iniciar Sesión</h2>

          {/* Formulario de Login */}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Mensaje de error */}
            {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}

            <Button variant="primary" type="submit" className="mt-3 w-100">
              Iniciar Sesión
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
