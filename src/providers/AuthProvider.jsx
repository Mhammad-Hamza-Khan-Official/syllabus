import { useEffect, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { AuthContext } from "../context/AuthContext";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../server/config/firebaseConfig";
import { useNavigate } from "react-router-dom";


export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    email: null,
    metaData: null,
    verifiedByOtp:false,
    loading:true
  });

  const navigate = useNavigate()

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(
    //   auth,
    //   (user) => {
    //     try {
    //       if (!user?.email){
    //          throw new Error("User Is not Exist. :: onAuthStateChanged - Preload");
    //       }
          
    //       dispatch({
    //         type: "AUTH_READY",
    //         payload: user?.email,
    //       });
    //       console.log("user :",user?.email)
    //       navigate("/dashboard")
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    // );

    // return unsubscribe;
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ 
      state,
      dispatch,
      user:state.user,
      verifiedByOtp : state.verifiedByOtp 
      }}>
      {children}
    </AuthContext.Provider>
  );
}