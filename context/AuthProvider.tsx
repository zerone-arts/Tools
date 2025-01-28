"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isAuthInitialized: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isAuthInitialized, setAuthInitialized] = useState(false);

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const { data } = await supabase.auth.getSession();
  //     setUser(data?.session?.user || null);
  //     localStorage.setItem("isLoggedIn", data?.session ? "true" : "false");
  //     setAuthInitialized(true);
  //   };

  //   fetchSession();

  //   const { data: listener } = supabase.auth.onAuthStateChange(
  //     (_event, session) => {
  //       setUser(session?.user || null);
  //       localStorage.setItem("isLoggedIn", session ? "true" : "false");
  //       setAuthInitialized(true);

  //       console.log(user);
  //       console.log(_event);
  //     }
  //   );

  //   return () => {
  //     listener.subscription.unsubscribe();
  //   };
  // }, []);
  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const sessionUser = data?.session?.user || null; // session에서 직접 값 가져오기
      setUser(sessionUser);
      console.log("Fetched session user:", sessionUser);
      localStorage.setItem("isLoggedIn", data?.session ? "true" : "false");
      setAuthInitialized(true); // 초기화 완료
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const sessionUser = session?.user || null;
        setUser(sessionUser);
        console.log("Auth state changed:", event, sessionUser);
        localStorage.setItem("isLoggedIn", session ? "true" : "false");
        setAuthInitialized(true);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthInitialized }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
