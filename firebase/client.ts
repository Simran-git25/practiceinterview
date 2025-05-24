
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAv3yv595p1m8Rbwdt7bcb-YrZH9U_warY",
  authDomain: "prepwise-f39d3.firebaseapp.com",
  projectId: "prepwise-f39d3",
  storageBucket: "prepwise-f39d3.firebasestorage.app",
  messagingSenderId: "70060708735",
  appId: "1:70060708735:web:933d04954c95f69f79c04a",
  measurementId: "G-V5GDSYQ45M"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);