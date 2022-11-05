/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { InitialUserState, useUser } from "./user";
import { Authentication } from "../server/firebaseSDK";
import styles from "../styles/Home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();

  const { SetUser } = user;

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is authenticated");
        SetUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      
      } else {
        console.log("User is not authenticated");
        SetUser(InitialUserState);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Player
          className="h-[100px]"
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_b88nh30c.json"
          alt="2d"
        />
      </div>
    );
  }

  return children;
};

export default AuthStateChangeProvider;
