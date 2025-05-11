import UpdateUser from "./UpdateUser";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";

const Appthreemayten = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default Appthreemayten;
