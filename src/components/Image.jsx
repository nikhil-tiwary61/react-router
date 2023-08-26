import { useEffect, useState } from "react";

function useImageURL() {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageUrl(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { imageUrl, error, loading };
}

export default function Image() {
  const { imageUrl, error, loading } = useImageURL();
  if (error) return <p>An error was encountered.</p>;
  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <h1>This is the image</h1>
      <img src={imageUrl} alt="placeholder image" />
    </>
  );
}
