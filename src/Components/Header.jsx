import React from "react";
import { auth } from "../utils/firebaseConfig";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successfully");

        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className={`absolute px-8 py-2 ${ !user && "bg-gradient-to-b from-black"} z-10 w-full flex justify-between`}>
      <div className="inline-flex">
        <img src="/images/netflix.png" alt="logo" className="w-[154px]" />
      </div>

      {user && (
        <div className="inline-flex gap-4">
          <div className="my-auto ">
            <img
              src={user?.photoURL}
              alt=""
              className="object-contain rounded w-[35px] "
            />
          </div>
          <button
            className="py-[10px] px-2 hover:shadow-red-900 hover:shadow my-auto text-sm rounded text-white bg-[rgb(229,9,20)] "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          {/* <ToastContainer
          autoClose={1500}
          position="top-center"
          hideProgressBar={true}
        /> */}
        </div>
      )}
    </div>
  );
}

export default Header;
