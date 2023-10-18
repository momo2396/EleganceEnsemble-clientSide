import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl lg:text-5xl font-bold pt-20">
        Hello,
        <br /> <span className="text-[#a294cd]">{user.email}</span>
      </p>
      <p className="text-2xl lg:text-5xl font-bold pt-20 ">
        Welcome to your profile page..
      </p>
    </div>
  );
};

export default Profile;
