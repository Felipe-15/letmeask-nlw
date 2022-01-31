import React, { createContext, useState, useEffect, ReactNode } from "react";
import firebase from "../services/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

type AuthContextType = {
  user: User | undefined;
  signIn: Function;
};

type User = {
  id: string;
  name: string;
  avatar: string;
};

export const AuthContext = createContext({} as AuthContextType);

type Props = {
  children: ReactNode;
};

const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const auth = getAuth(firebase);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Estão faltando informações em sua conta Google.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = async () => {
    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Estão faltando informações em sua conta Google.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
