import { supabase } from "@/utils/supabase";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: true, // 세션을 로컬에 유지
      autoRefreshToken: true, // 자동으로 토큰 갱신
    },
  } // 서버에서만 사용 가능한 Service Role 키
);
console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(
  "SUPABASE_SERVICE_ROLE_KEY:",
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: Request) {
  try {
    const { userId, user } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "유효한 사용자 ID가 없습니다." },
        { status: 400 }
      );
    }

    // rotionNoteTable 데이터 삭제
    const { error: noteError } = await supabaseAdmin
      .from("rotionNoteTable")
      .delete()
      .eq("user_id", user);

    if (noteError) {
      return NextResponse.json(
        {
          error: `rotionNoteTable에서 데이터 삭제 중 오류 발생: ${noteError.message}`,
        },
        { status: 500 }
      );
    }

    // rotionCalendarTable 데이터 삭제
    const { error: calendarError } = await supabaseAdmin
      .from("rotionCalendarTable")
      .delete()
      .eq("user_id", user);

    if (calendarError) {
      return NextResponse.json(
        {
          error: `rotionCalendarTable에서 데이터 삭제 중 오류 발생: ${calendarError.message}`,
        },
        { status: 500 }
      );
    }

    // 사용자 계정 삭제
    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (error) {
      return NextResponse.json(
        { error: `사용자 삭제 중 오류 발생: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "사용자 계정이 성공적으로 삭제되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `알 수 없는 오류 발생: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "알 수 없는 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
