"use client";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UiProfileImage() {
  const [userImg, setUserImg] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;

      if (session?.user?.user_metadata?.avatar_url) {
        setUserImg(session.user.user_metadata.avatar_url);
      } else {
        setUserImg(null);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event) => {
        if (event === "SIGNED_OUT") {
          setUserImg(null);
        } else if (event === "SIGNED_IN") {
          const { data } = await supabase.auth.getSession();
          const session = data?.session;
          if (session?.user?.user_metadata?.avatar_url) {
            setUserImg(session.user.user_metadata.avatar_url);
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
      {userImg ? (
        <Image src={userImg} alt="img" width={36} height={36} priority />
      ) : (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </span>
      )}
    </div>
  );
}
