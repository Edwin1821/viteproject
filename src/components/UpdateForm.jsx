import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    getSingleUserData();
  },[]);
  
  const { id } = useParams();

  async function getSingleUserData() {
    const response = await axios.get(
      "https://6746d44b38c8741641d451f9.mockapi.io/user/" + id
    );
    setUsername(response.data.username);
    setEmail(response.data.email);
    setCity(response.data.city);
    setPhone(response.data.phone);
  }

  async function updateData() {
    await axios.put("https://6746d44b38c8741641d451f9.mockapi.io/user/" + id, {
      username,
      email,
      city,
      phone,
    });
    navigate("/read")
  }

  return (
    <div className="form-conatiner">
      <h1>UserData Update</h1>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            placeholder="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            placeholder="mobile number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <button
          className="submit-btn"
          type="button"
          onClick={() => updateData()}
          >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
