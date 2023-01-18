import "./button.css";

// const Button = ({ isModalEnabled, func }) => {
//   return isModalEnabled ? (
//     <button onClick={func} className='Button passive'>
//       x
//     </button>
//   ) : (
//     <button onClick={func} className="Button active">
//       +
//     </button>
//   );
// };

const Button = ({ isModalEnabled, func }) => {
  return (
    <button
      onClick={func}
      className={`Button ${isModalEnabled ? "active" : "passive"}  `}
    >
      {isModalEnabled ? "❌" : "➕"}
    </button>
  );
};

export default Button;