import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  return (
    <div>
      <h1>Beer Bar</h1>
      <FaBeer />
      <FaBeer style={{ fontSize: "30px", color: "gold" }} />
      <FaBeer style={{ fontSize: "11px", color: "gold" }} />
      <FaBeer size={30} />
      <FaBeer size={30} color="gold" />
    </div>
  );
};

export default IconComponent;