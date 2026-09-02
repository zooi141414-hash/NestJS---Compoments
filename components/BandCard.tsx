import Image from "next/image";
import type { Band } from "@/types/band";

export default function BandCard({ band }: { band: Band }) {
  return (
    <article className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      {/* รูปภาพจาก Next.js Image Optimization */}
      <div className="relative w-full h-52 bg-slate-800">
        <Image
          src={band.image}
          alt={band.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={band.id === 1}
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
            band.isActive ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
          }`}
        >
          {band.isActive ? "กำลังมีผลงาน" : "พักวง"}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-2xl font-bold text-white mb-1">{band.name}</h2>
        <p className="text-xs text-indigo-400 font-medium mb-3">
          แนวเพลง: {band.genre} • ก่อตั้งปี ค.ศ. {band.formedYear}
        </p>

        {/* แสดง description ถ้ามี (Optional Props) */}
        {band.description && (
          <p className="text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-800 italic mb-4">
            "{band.description}"
          </p>
        )}

        {/* รายชื่อสมาชิก */}
        <div className="mt-auto pt-3 border-t border-slate-800">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            สมาชิกในวง ({band.members.length} คน)
          </p>
          <div className="space-y-1.5">
            {band.members.map((member) => (
              <div
                key={member.id}
                className="flex justify-between px-3 py-1.5 rounded-lg bg-slate-800/60 text-xs text-slate-200"
              >
                <span>{member.name}</span>
                <span className="text-slate-400">({member.role})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}