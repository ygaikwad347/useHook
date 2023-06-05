import useFetch from "../useFetch";

export default function List() {
  const [data, error, isLoading] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return <div>Data is loading..</div>;
  }

  if (error) {
    return <div>Error in fetching data...</div>;
  }

  const renderedData = data.map((el) => {
    return (
      <tr key={el.id}>
        <td style={{ border: "1px solid black", padding: "15px" }}>
          {el.name}
        </td>
        <td style={{ border: "1px solid black", padding: "15px" }}>
          {el.username}
        </td>
        <td style={{ border: "1px solid black", padding: "15px" }}>
          {el.email}
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table style={{ border: "2px solid black", padding: "5px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{renderedData}</tbody>
      </table>
    </div>
  );
}
