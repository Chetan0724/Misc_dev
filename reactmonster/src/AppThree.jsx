import { FaCartArrowDown } from "react-icons/fa";
import "./index.css";
import StyledCard from "./componentstwo/StyledCard";
import ProfileCard from "./componentstwo/ProfileCard";
import IconComponent from "./componentstwo/IconComponent";

const AppThree = () => {
  //   const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };
  return (
    <section>
      <FaCartArrowDown />

      {/* <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}> */}

      {/* <h1 style={styles}>Inline Style</h1> */}

      <h1>Separate File For Styling</h1>
      <StyledCard />
      <ProfileCard />
      <IconComponent />
    </section>
  );
};

export default AppThree;