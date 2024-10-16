import React, { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggelGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  const handleGptSearch = () => {
    dispatch(toggelGptSearch());
  };
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successfully");
        navigate("/");
      })
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(auth.currentUser)
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div
      className={`absolute px-2 py-2 sm:px-8 sm:py-2  
         ${!user && "absolute bg-gradient-to-b from-black"} 
         ${user && " bg-[(255,255,2555,1)] "}
         z-10 w-full flex justify-between`}
    >
      <div className="inline-flex ">
        <img src="/images/netflix.png" alt="logo" className="w-[154px]" />
      </div>

      {user && (
        <div className="inline-flex gap-4">
          {gptSearch && (
            <select
              className="p-2 bg-black text-white m-3"
              onChange={handleLanguageChange}
              name=""
              id=""
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-[10px] hover:shadow-[rgb(105,81,89)] w-24 hover:shadow my-auto text-sm rounded text-white bg-[rgb(105,81,89)] "
            onClick={handleGptSearch}
          >
            {gptSearch ? "Home" : "GPT Search"}
          </button>
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
