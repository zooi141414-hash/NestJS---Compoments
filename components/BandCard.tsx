// src/components/BandCard.tsx
import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      {/* รูปภาพหลักของวง */}
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

        {band.description && (
          <p className="text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-800 italic mb-4">
            "{band.description}"
          </p>
        )}

        {/* ส่วนรายชื่อสมาชิก */}
        <div className="mt-auto pt-4 border-t border-slate-800">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              สมาชิกในวง
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400">
              {band.members.length} คน
            </span>
          </div>

          <div className="space-y-2.5">
            {band.members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 hover:bg-slate-800/70 transition-colors"
              >
                {/* ขยายขนาดรูปโปรไฟล์สมาชิกเป็น w-12 h-12 (48px) */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/40 bg-slate-700 shrink-0 shadow-md">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-indigo-300 font-bold">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {member.name}
                  </span>
                </div>

                {/* ตำแหน่งเครื่องดนตรี */}
                <span className="text-xs text-slate-400 font-light px-2.5 py-1 rounded bg-slate-900/70 border border-slate-800">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}