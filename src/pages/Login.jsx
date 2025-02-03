import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import "sweetalert2/dist/sweetalert2.min.css"; 

const Login = () => {
  const [currentState, setCurrentState] = useState("Registrar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is already logged in, redirect to home
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/"); // Redirect if already logged in
    }
  }, [navigate]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (currentState === "Registrar") {
      const userExists = existingUsers.some((user) => user.email === email);

      if (userExists) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Este correo ya está registrado.",
          confirmButtonColor: "#d33",
        });
      } else {
        const newUser = { name, email, password };
        localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: "Ahora inicia sesión.",
          confirmButtonColor: "#1f3a93",
        }).then(() => setCurrentState("Login"));
      }
    } else {
      const user = existingUsers.find((user) => user.email === email && user.password === password);

      if (user) {
        // Retrieve the cart data from localStorage
        const savedCart = JSON.parse(localStorage.getItem("carrito")) || [];

        Swal.fire({
          icon: "success",
          title: `Bienvenido, ${user.name}!`,
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          // Optionally, you can restore the user's cart here if needed
          localStorage.setItem("carrito", JSON.stringify(savedCart));
          navigate("/"); // Redirect to home page
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Correo o contraseña incorrectos.",
          confirmButtonColor: "#d33",
        });
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Registrar" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Olvidaste tu contraseña?</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Registrar")} className="cursor-pointer">
            Crear cuenta
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">
            Login aquí
          </p>
        )}
      </div>

      <button className="bg-[#1f3a93] hover:bg-[#e9c01e] text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Iniciar sesión" : "Registrar"}
      </button>
    </form>
  );
};

export default Login;
