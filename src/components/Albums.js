import useFetch from "../useFetch";

function Albums() {
  const [data, error, isLoading] = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );

  if (error) {
    return <div>Error in data fetching </div>;
  }

  if (isLoading) {
    return <div>Error in data fetching </div>;
  }

  const renderedAlbums = data.map((el, ind) => {
    return (
      <div key={el.id} style={{ border: "1px solid red", padding: "10px" }}>
        <span style={{ fontSize: "20px" }}>{ind + 1}</span>

        <span style={{ fontSize: "20px", padding: "15px" }}>{el.title}</span>
      </div>
    );
  });

  return <div>{renderedAlbums}</div>;
}

export default Albums;
