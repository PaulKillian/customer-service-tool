import { useState, useEffect, useCallback } from 'react'

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXLuVtgw-gw1Ahoq8eUTLiJUoQGdfJwBI",
  authDomain: "work-3ab37.firebaseapp.com",
  projectId: "work-3ab37",
  storageBucket: "work-3ab37.appspot.com",
  messagingSenderId: "698865210902",
  appId: "1:698865210902:web:31b18ecd9147079f3e4737"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}