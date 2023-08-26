import { useEffect, useState } from "react";

export default function Image() {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageUrl(response[0].url))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <p>An error was encountered.</p>;
  }
  return (
    imageUrl && (
      <>
        <h1>This is the image</h1>
        <img src={imageUrl} alt="placeholder image" />
      </>
    )
  );
}
