import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";


export const Register = (email,password)=> {
    createUserWithEmailAndPassword(auth,email,password)
}

export const Login = (email,password)=> {
    signInWithEmailAndPassword(auth,email,password)
}

export const LoginOut = ()=> {
    signOut(auth)
}


