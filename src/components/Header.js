import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(addUser({
                email: user.email,
                uid: user.uid,
              }));
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/")
            }
          });

          return () => unsubscribe();
    }, [])

    const showButton = () => {
        if (auth && auth.currentUser) {
            return <div className="md:space-x-3">
              <button onClick={handleSignOut} className="p-2 mt-2 bg-red-700 border rounded-md border-red-700 text-white">Sign Out</button>
              </div>
        }
    } 
    
    return <div className="absolute md:px-8 px-2 md:py-2 bg-gradient-to-b from-black z-10 flex w-full justify-between">
        <img className="md:w-44 w-28 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {showButton()}
    </div>
}

export default Header