import React, { useEffect, useState } from "react";
import { loginUser, getMe, updateMe } from "../api";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({});
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const login = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    localStorage.setItem("token", res.data.token);
    loadProfile(res.data.token);
  };

  const loadProfile = async (token) => {
    const res = await getMe(token);
    setUser(res.data);
    setForm(res.data);
  };

  const save = async () => {
    const token = localStorage.getItem("token");
    const res = await updateMe(token, form);
    setUser(res.data);
    setEdit(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) loadProfile(token);
  }, []);

return (
  <div className="authPage">

    {!user ? (
      <form onSubmit={login} className="authCard">
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="address" placeholder="Address" onChange={handleChange} />
        <button>Login</button>
      </form>
    ) : (
      <div className="authCard">
        <input name="name" value={form.name} disabled={!edit} onChange={handleChange} />
        <input name="phone" value={form.phone} disabled={!edit} onChange={handleChange} />
        <textarea name="address" value={form.address} disabled={!edit} onChange={handleChange} />

        {!edit ? (
          <button onClick={() => setEdit(true)}>Edit</button>
        ) : (
          <button onClick={save}>Save</button>
        )}
      </div>
    )}

  </div>
);
};

export default Login;