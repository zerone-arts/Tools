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
      try {
        const { data } = await supabase.auth.getSession();
        const sessionUser = data?.session?.user || null;
        setUser(sessionUser);
        localStorage.setItem("isLoggedIn", data?.session ? "true" : "false");
        setAuthInitialized(true);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        try {
          const sessionUser = session?.user || null;
          setUser(sessionUser);

          localStorage.setItem("isLoggedIn", session ? "true" : "false");
          setAuthInitialized(true);
        } catch (error) {
          console.error("Error handling auth state change:", error);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!isAuthInitialized) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

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
