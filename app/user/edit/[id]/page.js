"use client";
import { useState, useEffect } from "react";
import styles from "@/app/SignUp.module.css";

export default function page({ params }) {
  const [user, setUser] = useState({
    id: 0,
    fname: "",
    lname: "",
    username: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users/" + params.id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    fetch(" https://www.melivecode.com/api/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
        if (result.status === "ok") {
          window.location.href = "/user";
        }
      });
  };

  return (
    <div className={styles.container}>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ชื่อผู้ใช้:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={user.username}
            onChange={(e) => {
              setUser((user) => ({
                ...user,
                username: e.target.value,
              }));
            }}
          />
        </label>
        <label>
          ชื่อจริง:
          <input
            type="text"
            name="firstName"
            id="fname"
            placeholder="first name"
            value={user.fname}
            onChange={(e) => {
              setUser((user) => ({
                ...user,
                fname: e.target.value,
              }));
            }}
          />
        </label>
        <label>
          นามสกุล:
          <input
            type="text"
            name="lastName"
            id="lname"
            placeholder="last name"
            value={user.lname}
            onChange={(e) => {
              setUser((user) => ({
                ...user,
                lname: e.target.value,
              }));
            }}
          />
        </label>
        <button type="submit">ยืนยัน</button>
      </form>
    </div>
  );
}
