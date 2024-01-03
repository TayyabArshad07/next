import React, { useState } from "react";
import {
  FaFingerprint,
  FaEyeSlash,
  FaUser,
  FaUserTie,
  FaEnvelope,
} from "react-icons/fa";

const Contactus = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");

  const handleChange = () => {
    if (confirmPassword == password) {
      setError("");
      console.log("match");
      setShow(true);
    } else {
      setError("password must be same");
      setShow(false);
    }
  };
  const handleSubmit = async () => {
    alert(`${fullName}, ${userName}, ${password}, ${email}`);
  };
  console.log(confirmPassword);

  return (
    <form className="Contactus" onSubmit={handleSubmit}>
      <div className="formElem">
        <input
          required
          type="text"
          id="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e: any) => setFullName(e.target.value)}
        />
        <label htmlFor="fullName">
          <FaUser />
        </label>
      </div>

      <div className="formElem">
        <input
          required
          type="text"
          id="userName"
          placeholder="Username"
          value={userName}
          onChange={(e: any) => setUserName(e.target.value)}
        />
        <label htmlFor="userName">
          <FaUserTie />
        </label>
      </div>

      <div className="formElem">
        <input
          required
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <label htmlFor="email">
          <FaEnvelope />
        </label>
      </div>

      <div className="formElem">
        <input
          required
          type="password"
          id="password"
          placeholder="******"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value), handleChange();
          }}
        />
        <label htmlFor="password">
          <FaFingerprint />
        </label>
      </div>

      <div className="formElem">
        <input
          required
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e: any) => {
            setConfirmPassword(e.target.value), handleChange();
          }}
        />
        <label htmlFor="confirmPassword">
          <FaFingerprint />
        </label>
      </div>
      {show ? <p>{error && <b>{error}</b>}</p> : ""}
      <span className="flex items-center gap-3">
        <input type="checkbox" id="agreed" className="checkbox" required />
        <label
          htmlFor="agreed"
          className="text-[16px] font-medium text-gray-600"
        >
          Are you agree?
        </label>
      </span>

      {show ? (
        ""
      ) : (
        <button className="bg-[#00ff] px-3 py-2 rounded text-[#fff] font-bold text-xl">
          Sign In
        </button>
      )}
    </form>
  );
};

export default Contactus;
