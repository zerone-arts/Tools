"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;
      if (session?.user?.email) {
        setUser(session?.user.email);
      } else {
        setUser("");
      }
    };

    fetchSession();
  }, []);

  return (
    <div className="absolute w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="text-white w-10 h-10">
        {user === null ? (
          <div></div>
        ) : user ? (
          <div>{user}</div>
        ) : (
          <div>Not logged in</div>
        )}
      </div>
    </div>
  );
}
