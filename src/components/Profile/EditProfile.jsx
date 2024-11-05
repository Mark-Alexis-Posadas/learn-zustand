// EditProfile.js
import React, { useState } from "react";

export const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could call a global state setter (like zustand) if needed
    console.log("Updated Profile:", { firstName, middleName, lastName, email });
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          first name
          <input
            placeholder="first name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          middle name
          <input
            placeholder="middle name"
            type="text"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </label>
        <br />
        <label>
          last name
          <input
            placeholder="last name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
