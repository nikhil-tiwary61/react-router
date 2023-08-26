import { useEffect, useState } from "react";

export default function Image() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setImageUrl(response[0].url))
      .catch((error) => console.error(error));
  }, []);

  return (
    imageUrl && (
      <>
        <h1>This is the image</h1>
        <img src={imageUrl} alt="placeholder image" />
      </>
    )
  );
}
