import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white flex items-center gap-2">
          <span className="bg-indigo-600 px-2 py-0.5 rounded text-sm">UI</span>
          <span>Favorite Bands</span>
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition">หน้าแรก</Link>
          <Link href="/bands" className="text-indigo-400 font-semibold">วงดนตรีโปรด</Link>
        </nav>
      </div>
    </header>
  );
}