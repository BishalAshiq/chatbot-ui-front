import Image from "next/image";
import styles from "./page.module.css";
import Home from "../app/home/page";

export default function page() {
  return (
    <div>
      <h1>
        <Home />
      </h1>
    </div>
  );
}
