import { useParams } from "react-router-dom";
import Popeye from "./Popeye.jsx";
import Spinach from "./Spinach.jsx";
import DefaultProfile from "./DefaultProfile.jsx";

export default function Porfile() {
  const { name } = useParams();
  return (
    <>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profiles visited are here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </>
  );
}
