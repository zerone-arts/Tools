"use client";
import { supabase } from "@/utils/supabase";
import { divide } from "mathjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UiProfileName({}) {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;
      if (session?.user?.email) {
        setUser(session?.user.email.split("@")[0]);
      } else {
        setUser(null);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event) => {
        if (event === "SIGNED_OUT") {
          setUser(null);
        } else if (event === "SIGNED_IN") {
          const { data } = await supabase.auth.getSession();
          const session = data?.session;
          if (session?.user?.email) {
            setUser(session?.user.email.split("@")[0]);
          }
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? <div>{user}</div> : <Link href={"/setting/mypage"}>Login</Link>}
    </div>
  );
}
