"use client";
import { useState, useEffect } from "react";
import Styles from "@/app/page.module.css";
import Link from "next/link";

export default function Page() {
  const [users, setUsers] = useState([]);

  // เรียกใช้งาน API
  useEffect(() => {
    const res = fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  // คำสั่งลบ
  const handleDelete = (id) => {
    fetch("https://www.melivecode.com/api/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
        window.location.reload();
      });
  };

  // คำสั่งแก้ไข

  return (
    <>
      <div className={Styles.container}>
        <Link className={Styles.createLink} href="/user/create">
          Create User
        </Link>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} width={50} height={50} />
              <div>
                <h2>
                  {user.fname} {user.lname}
                </h2>
                <h3>{user.username}</h3>
              </div>
              <div className={Styles["edit-delete-buttons"]}>
                <button
                  className={`${Styles.btndel} ${Styles["delete-button"]}`}
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <button
                  href={"/user/edit/" + user.id}
                  className={`${Styles["edit-button"]}`}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
