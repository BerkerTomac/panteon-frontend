import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/actions/authActions";

const RegisterForm = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, username, password })).then((result) => {
      if (registerUser.fulfilled.match(result)) {
        onRegisterSuccess();
      }
    });
  };

  return (
    <>
      {error && (
        <div className="error">
          {Array.isArray(error) ? (
            error.map((err, index) => <p key={index}>{err.description}</p>)
          ) : (
            <p>{error}</p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="btn-register"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Registering..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
