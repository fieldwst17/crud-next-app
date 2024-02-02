"use client";
import { useEffect } from "react";
import styles from "@/app/SignUp.module.css";
export default function Page() {

    // กดสร้าง user
  const handelSubmit = (e)=> {
    e.preventDefault()

    const data = {
        "fname": e.target.fname.value,
        "lname": e.target.lname.value,
        "username": e.target.username.value,
        "password": "1234",
        "email": e.target.username.value,
        "avatar": "https://www.melivecode.com/users/cat.png"
    }
    fetch('https://www.melivecode.com/api/users/create',{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        alert(result.message)
        if(result.status === 'ok') {
            window.location.href = '/user'
        }
    })
  }

  return (
    <div className={styles.container}>
      <h1>สร้างผู้ใช้</h1>
      <form onSubmit={handelSubmit}>
        <label>
          ชื่อผู้ใช้:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
        </label>
        <label>
          ชื่อจริง:
          <input
            type="text"
            name="firstName"
            id="fname"
            placeholder="first name"
          />
        </label>
        <label>
          นามสกุล:
          <input
            type="text"
            name="lastName"
            id="lname"
            placeholder="last name"
          />
        </label>
        <button type="submit">ยืนยัน</button>
      </form>
    </div>
  );
}
