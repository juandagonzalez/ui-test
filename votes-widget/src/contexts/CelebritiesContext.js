import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";

import firebase from "firebase/app";

const CelebritiesContext = React.createContext();

export function useCelebrities() {
  return useContext(CelebritiesContext);
}

export function CelebritiesProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [celebrities, setCelebrities] = useState();

  async function sendVote(celebrityId, vote) {
    const increment = firebase.firestore.FieldValue.increment(1);

    const celebrityRef = db.collection("celebrities").doc(celebrityId);

    if (vote === "liked") {
      celebrityRef.update({ "votes.positive": increment });
    }
    if (vote === "disliked") {
      celebrityRef.update({ "votes.negative": increment });
    }
  }

  useEffect(() => {
    const unsubscribe = db.collection("celebrities").onSnapshot((snapshot) => {
      const celebrities = [];
      snapshot.docs.forEach((doc) => {
        const celebrity = {
          data: doc.data(),
          id: doc.id,
        };
        celebrities.push(celebrity);
      });
      setCelebrities(celebrities);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    celebrities,
    sendVote,
  };

  return (
    <CelebritiesContext.Provider value={value}>
      {!loading && children}
    </CelebritiesContext.Provider>
  );
}
