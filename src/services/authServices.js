import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from 'firebase/auth';

import { auth } from '../firebase/firebase';

// إنشاء حساب جديد
export const registerUser = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  return user;
};

// تسجيل الدخول
export const loginUser = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};


export const logoutUser = async () => {
  await signOut(auth);
};

// متابعة حالة المستخدم
export const listenToAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};


