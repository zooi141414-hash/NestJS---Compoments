import Navbar from "@/components/Navbar";
import BandCard from "@/components/BandCard";
import { bandsData } from "@/data/bands";

export default function FavoriteBandsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 w-full">
        {/* หัวข้อ */}
        <div className="text-center mb-10 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            โจทย์ประยุกต์ Reusable Component & TypeScript
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            วงดนตรีที่ชื่นชอบ (Favorite Bands)
          </h1>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            รายชื่อวงดนตรีโปรด จัดการข้อมูลด้วย TypeScript Model และส่ง Props เข้า Component
          </p>
        </div>

        {/* แสดงการ์ด 3 วง */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bandsData.map((band) => (
            <BandCard key={band.id} band={band} />
          ))}
        </section>
      </main>

      {/* ข้อมูลผู้จัดทำ */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <p>พัฒนาโดย นาย ธนโชติ รักชาติ • รหัสนักศึกษา 6804101337</p>
      </footer>
    </div>
  );
}