import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "./RouteLayout.module.css";

export default function RouteLayout() {
  return (
    <>
      <Navbar />
      <main className={classes.container}></main>
      <h1>Route Layout</h1>
      <Outlet />
    </>
  );
}
