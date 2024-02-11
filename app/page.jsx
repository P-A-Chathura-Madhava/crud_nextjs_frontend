import Image from "next/image";
import styles from "./page.module.css";
import UsersList from "@/src/components/UsersList";
import AddUser from "@/src/components/AddUser";
import UpdateUser from "@/src/components/UpdateUser";
import DeleteUser from "@/src/components/DeleteUser";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>CRUD Application with Next.Js</h1>
      <AddUser />
      <UpdateUser />
      <DeleteUser />
      <UsersList />
    </main>
  );
}
