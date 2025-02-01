"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Web from "@/components/home/Web";
import App from "@/components/home/App";
import { useAuth } from "@/context/AuthProvider";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden text-gray-100  absolute">
      <Web user={user?.email} />
      <App user={user?.email} />
    </div>
  );
}
