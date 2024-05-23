const Card = ({ name, description }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Tu color es {description}</p>
    </div>
  );
};

export default Card;
