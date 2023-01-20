import "./friend.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName, address } = data;

  return (
    <div className="Friend">
      <img src={image} alt={lastName} />
      <div className="Friend__text">
        <h3>{`${firstName} ${lastName}`}</h3>
      </div>
    </div>
  );
};

export default Friend;