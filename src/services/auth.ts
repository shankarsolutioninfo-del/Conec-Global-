// src/services/auth.ts

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

/* =========================
   EMAIL + PASSWORD SIGNUP
========================= */
export const signup = async (
  email: string,
  password: string,
  name: string
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(res.user, { displayName: name });
  return res.user;
};

/* =========================
   EMAIL + PASSWORD LOGIN
========================= */
export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/* =========================
   GOOGLE LOGIN
========================= */
export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

/* =========================
   FACEBOOK LOGIN
========================= */
export const facebookLogin = () => {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider);
};

/* =========================
   LOGOUT
========================= */
export const logout = () => {
  return signOut(auth);
};
