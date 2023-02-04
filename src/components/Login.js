import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("usuario", JSON.stringify(data));
    setCurrentUser(data);
    navigate("/jugar");
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center underline">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-rows-3 grid-flow-col w-72 m-auto mt-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="first_name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter User"
            {...register("username", {
              required: "El campo es requerido",
            })}
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.username?.message}
          </p>
        </div>
        <div className="grid grid-rows-3 grid-flow-col w-72 m-auto mt-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="first_name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Password"
            {...register("password", {
              required: "El campo es requerido",
            })}
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.password?.message}
          </p>
        </div>
        <div className="container m-auto text-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Ingresar
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
