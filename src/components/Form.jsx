import React, { useState } from "react";
import validation from "../validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor="email">
        Email:
      </label>
      <input
        name="email"
        type="email"
        placeholder="Ingresa tu mail aquí"
        value={userData.email}
        onChange={handleChange}
        className={style.input}
      />
      {errors.email && <p style={{ color: "blue" }}>{errors.email}</p>}
      <br />
      <label className={style.label} htmlFor="password">Password:</label>
      <input
        name="password"
        type="password"
        placeholder="Ingrese su contraseña aquí"
        value={userData.password}
        onChange={handleChange}
        className={style.input}
      />
      {errors.password && <p style={{ color: "black" }}>{errors.password}</p>}
      <br />
      <button className={style.submitButton}>Submit</button>
    </form>
  );
};

export default Form;