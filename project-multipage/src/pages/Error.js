import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import classes from "./RouteLayout.module.css";
export default function Error() {
  return (
    <>
      <Navbar />
      <main className={classes.content}>
        Sorry, the page you are looking for does not exist.
      </main>
      <Link to="/">Go back to Home</Link>
    </>
  );
}
