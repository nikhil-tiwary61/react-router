import { Outlet } from "react-router-dom";

export default function Porfile() {
  return (
    <>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profiles visited are here:</h2>
      <Outlet />
    </>
  );
}
