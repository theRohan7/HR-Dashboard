import "../CSS/Card.css";

function Card({ data }) {
  const { title, value, remarks } = data;
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: `${
          title.includes("Position")
            ? "#FFEFE7"
            : `${title.includes("Job") ? "#E8F0FB" : "#FDEBF9"}`
        }`,
      }}
    >
      <h2 className="card-title">{title}</h2>
      <p className="card-value">{value}</p>
      <p
        className="card-remarks"
        style={{
          color: `${
            title.includes("Position")
              ? "#FF5151"
              : `${title.includes("Job") ? "#3786F1" : "#EE61CF"}`
          }`,
        }}
      >
        {remarks}
      </p>
    </div>
  );
}

export default Card;
