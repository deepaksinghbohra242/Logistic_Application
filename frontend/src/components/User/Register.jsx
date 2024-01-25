import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

function Register() {
  const [credential, setCredential] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post("/user/register", {
        firstName: credential.firstName,
        lastName: credential.lastName,
        username: credential.userName,
        email: credential.email,
        password: credential.password,
        phone: credential.phone,
      });

      swal({
        title: "Success",
        text: "Successfully Registered",
        icon: "success",
        buttons: "Ok",
      });
      setRedirect(true);
    } catch (error) {
      swal({
        title: "Failed",
        text: "Try Again",
        icon: "warning",
        buttons: "Ok",
      });
      console.log(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-4">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={credential.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={credential.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block">Username:</label>
            <input
              type="text"
              name="userName"
              value={credential.userName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block">Email:</label>
            <input
              type="email"
              name="email"
              value={credential.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block">Password:</label>
            <input
              type="password"
              name="password"
              value={credential.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block">Phone:</label>
            <input
              type="text"
              name="phone"
              value={credential.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
