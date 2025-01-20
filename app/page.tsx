"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Web from "@/components/home/Web";
import App from "@/components/home/App";

export default function Home() {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;
      if (session?.user?.email) {
        setUser(session?.user.email);
      } else {
        setUser(null);
      }
    };

    fetchSession();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden text-gray-100">
      <Web user={user} />
      <App user={user} />
      {/* <div className="text-white w-10 h-10">
        {user ? <div>{user}</div> : <div>Login</div>}
      </div> */}
    </div>
  );
}
