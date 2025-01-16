"use client";

import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

export default function MyPage() {
  const [login, setLogin] = useState<boolean | null>(null); // 초기 상태를 null로 설정
  const [deleteAccountBtn, setDeleteAccountBtn] = useState(false);
  const [deleteAccountCheck, setDeleteAccountCheck] = useState(false);

  const signInHandle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    if (data) {
      console.log(data);
    }
    if (error) console.log(error);
  };

  const signOutHandle = async () => {
    const { error } = await supabase.auth.signOut();
    setLogin(false);
  };

  const deleteAccountHandle = () => {
    setDeleteAccountCheck(true);
  };

  useEffect(() => {
    const checkSign = async () => {
      const authInfo = await supabase.auth.getSession();
      const session = authInfo.data.session;
      console.log(session);
      if (session) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    };
    checkSign();
  }, []);

  if (login === null) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {login ? (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
          <button
            className="flex gap-3 border w-[150px] p-4 h-8 items-center justify-center rounded-full dark:border-none dark:bg-zinc-800  duration-200 hover:border-cyan-600 hover:text-cyan-600"
            onClick={signOutHandle}
          >
            <p>Sign Out</p>
          </button>
          <button
            className="flex gap-3 border w-[150px] p-4 h-8 items-center justify-between rounded-full dark:border-none dark:bg-zinc-800  duration-200 hover:border-cyan-600 hover:text-cyan-600"
            onClick={() => setDeleteAccountBtn(true)}
          >
            <p>Delete Account</p>
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <button
            className="relative w-[220px] flex gap-3 border p-5 h-10 items-center justify-between rounded-full dark:border-none dark:bg-zinc-800  duration-200 border-white hover:border-cyan-600 hover:text-cyan-600 group"
            onClick={signInHandle}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                className="fill-white group-hover:fill-[#0e7490] duration-200"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
            </span>
            <p>Sign in with Google</p>
          </button>
        </div>
      )}
      {/* Delete Account Modal */}
      <div
        className={`border absolute w-full h-full top-0 left-0 bg-black/90 flex items-center justify-center ${
          deleteAccountBtn
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[300px] h-[130px] border rounded-2xl flex flex-col">
          {!deleteAccountCheck ? (
            <div className="h-[80px] flex flex-col items-center justify-center gap-1">
              <p>정말 계정을 탈퇴 하시겠습니까?</p>
              <p className="text-[10px] text-gray-300">
                탈퇴시 저장된 정보는 삭제됩니다.
              </p>
            </div>
          ) : (
            <div className="h-[90px] flex flex-col items-center justify-center gap-1">
              <p>계정이 탈퇴 되었습니다.</p>
            </div>
          )}
          {!deleteAccountCheck ? (
            <div className="flex justify-between h-[30px] items-center px-10">
              <button
                className="w-[100px] h-full hover:text-cyan-500 duration-300"
                onClick={deleteAccountHandle}
              >
                예
              </button>
              <button
                className="w-[100px] h-full hover:text-cyan-500 duration-300"
                onClick={() => setDeleteAccountBtn(false)}
              >
                아니요
              </button>
            </div>
          ) : (
            <div className="flex justify-center h-[30px] items-center px-10">
              <button
                className="w-[100px] h-full hover:text-cyan-500 duration-300"
                onClick={() => {
                  setDeleteAccountBtn(false);
                  setDeleteAccountCheck(false);
                }}
              >
                나가기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
