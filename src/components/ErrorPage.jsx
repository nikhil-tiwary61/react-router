import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>Oh no! This route dosent exist.</h1>
      <Link to="/">You can go back by clicking here though.</Link>
    </>
  );
}
