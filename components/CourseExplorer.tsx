"use client";

import { useState, type ChangeEvent } from "react";

type Band = {
  id: number;
  name: string;
  formedYear: number;
  members: string[]; // ข้อมูลสมาชิกที่มีอยู่แล้ว
};

export default function BandExplorer({ bands }: { bands: Band[] }) {
  const [keyword, setKeyword] = useState("");
  const [followedBandIds, setFollowedBandIds] = useState<number[]>([]);
  const [likes, setLikes] = useState<Record<number, number>>({}); // เก็บ like แยกตาม id
  const [sortBy, setSortBy] = useState<"name" | "year">("name");

  // Handlers
  function toggleFollow(id: number) {
    setFollowedBandIds((prev) =>
      prev.includes(id) ? prev.filter((bandId) => bandId !== id) : [...prev, id]
    );
  }

  function handleLike(id: number) {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  function handleReset() {
    setKeyword("");
    setFollowedBandIds([]);
    setSortBy("name");
  }

  // Derived State
  const filteredBands = bands
    .filter((band) => band.name.toLowerCase().includes(keyword.trim().toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.formedYear - b.formedYear;
    });

  return (
    <div>
      <input
        type="search"
        placeholder="ค้นหาชื่อวงดนตรี..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="button" onClick={handleReset}>ล้างเงื่อนไขทั้งหมด</button>

      <p>จำนวนวงที่กำลังติดตาม: {followedBandIds.length} วง</p>

      {filteredBands.length === 0 ? (
        <p>ไม่พบวงดนตรีที่ค้นหา</p>
      ) : (
        filteredBands.map((band) => (
          <div key={band.id} style={{ border: "1px solid #ddd", margin: "8px", padding: "12px" }}>
            <h3>{band.name} (ก่อตั้ง: {band.formedYear})</h3>
            {/* แสดง Derived ข้อมูลสมาชิกโดยตรง */}
            <p>จำนวนสมาชิก: {band.members.length} คน ({band.members.join(", ")})</p>

            <button type="button" onClick={() => toggleFollow(band.id)}>
              {followedBandIds.includes(band.id) ? "เลิกติดตาม" : "ติดตาม"}
            </button>

            <button type="button" onClick={() => handleLike(band.id)}>
              👍 Like ({likes[band.id] || 0})
            </button>
          </div>
        ))
      )}
    </div>
  );
}