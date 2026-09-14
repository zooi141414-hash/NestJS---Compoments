import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* ดวงไฟ Ambient Glow ปรับขนาดตาม Tailwind v4 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-87.5 h-62.5 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center relative z-10 my-auto">
        <div className="max-w-2xl space-y-8">

          {/* Badge แสดงหัวข้อใบงาน */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            10301231 • State, Events & Component Communication
          </div>

          {/* หัวข้อหลัก */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              ระบบแสดงรายวิชาและ <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                วงดนตรีโปรด
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-light">
              เว็บแอปพลิเคชัน Next.js App Router จัดการข้อมูลแบบโต้ตอบผ่าน useState, Controlled Input, Lifting State Up และคำนวณ Derived State
            </p>
          </div>

          {/* ปุ่ม CTA คู่: นำทางไปทั้ง /courses (ใบงานหลัก) และ /bands (โจทย์ประยุกต์) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/courses"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-sm bg-linear-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              ค้นหารายวิชา (/courses) →
            </Link>
            <Link
              href="/bands"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              วงดนตรีโปรด (/bands) →
            </Link>
          </div>

          {/* การ์ดฟีเจอร์ย่อย 3 ช่อง */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <span className="text-indigo-400 text-lg">✦</span>
              <h3 className="font-semibold text-xs text-slate-200 mt-1">Controlled Input</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">ค้นหาข้อมูลทันทีขณะพิมพ์แบบ Real-time</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <span className="text-purple-400 text-lg">✦</span>
              <h3 className="font-semibold text-xs text-slate-200 mt-1">Lifting State Up</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">ส่งต่อเหตุการณ์ผ่าน Callback Props</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <span className="text-pink-400 text-lg">✦</span>
              <h3 className="font-semibold text-xs text-slate-200 mt-1">Derived State</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">คำนวณจำนวนและกรองผล ไม่เก็บ State ซ้ำซ้อน</p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer ระบุข้อมูลผู้จัดทำ */}
      <footer className="py-6 border-t border-slate-900/80 text-center text-xs text-slate-500">
        <p>พัฒนาโดย <span className="text-slate-400 font-medium">นาย ธนโชติ รักชาติ</span> • รหัสนักศึกษา 6804101337</p>
      </footer>
    </div>
  );
}