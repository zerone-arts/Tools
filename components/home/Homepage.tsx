"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Web from "@/components/home/Web";
import App from "@/components/home/App";
import { useAuth } from "@/context/AuthProvider";

export default function HomePage() {
  // const [user, setUser] = useState<any>("");
  const { user } = useAuth();

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const { data } = await supabase.auth.getSession();
  //     const session = data?.session;
  //     if (session?.user?.email) {
  //       setUser(session?.user.email);
  //       console.log(session?.user);
  //     } else {
  //       setUser(null);
  //     }
  //   };

  //   fetchSession();

  //   // ✅ 로그인 상태 변경 감지
  //   const { data: listener } = supabase.auth.onAuthStateChange(
  //     async (event, session) => {
  //       if (session?.user?.email) {
  //         localStorage.setItem("isLoggedIn", "true");

  //         setUser(session.user.email);
  //       } else {
  //         localStorage.setItem("isLoggedIn", "false");
  //       }
  //     }
  //   );

  //   return () => {
  //     listener.subscription.unsubscribe();
  //   };
  // }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden text-gray-100  absolute">
      <Web user={user?.email} />
      <App user={user?.email} />
    </div>
  );
}
