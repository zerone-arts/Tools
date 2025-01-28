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

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
      localStorage.setItem("isLoggedIn", data?.session ? "true" : "false");
      setAuthInitialized(true);
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        localStorage.setItem("isLoggedIn", session ? "true" : "false");
        setAuthInitialized(true);

        console.log(user);
        console.log(_event);
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
