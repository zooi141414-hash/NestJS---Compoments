// src/data/bands.ts
import { Band } from "@/types/band";

export const bandsData: Band[] = [
  {
    id: 1,
    name: "Bodyslam",
    genre: "Rock / Progressive Rock",
    formedYear: 2002,
    image: "/images/body-slam.jpg",
    description: "วงร็อกระดับตำนานของเมืองไทย โดดเด่นด้วยพลังการแสดงสดและเพลงที่มีความหมายสร้างแรงบันดาลใจ",
    isActive: true,
    members: [
      { id: 101, name: "ตูน (อาทิวราห์ คงมาลัย)", role: "ร้องนำ" },
      { id: 102, name: "ปิ๊ด (ธนดล ช้างเสวก)", role: "เบส" },
      { id: 103, name: "ยอด (ธนชัย ตันตระกูล)", role: "กีตาร์" },
      { id: 104, name: "ชัช (สุชัฒติ จั่นอี๊ด)", role: "กลอง" },
      { id: 105, name: "โอม (โอมเปล่ง ขำประเสริฐ)", role: "คีย์บอร์ด" },
    ],
  },
  {
    id: 2,
    name: "Cocktail",
    genre: "Classic Rock / Pop Rock",
    formedYear: 2002,
    image: "/images/cock-tail.jpg",
    description: "วงดนตรีร็อกที่มีเอกลักษณ์ผสมผสานเครื่องสายออร์เคสตรา และการร้อยเรียงภาษาในเนื้อเพลงที่สละสลวย",
    isActive: true, // อยู่ในช่วงทัวร์คอนเสิร์ตส่งท้ายก่อนยุบวง
    members: [
      { id: 201, name: "โอม (ปัณฑพล ประสารราชกิจ)", role: "ร้องนำ" },
      { id: 202, name: "เชา (ชวรัตน์ หรรษคุณาฒัย)", role: "กีตาร์" },
      { id: 203, name: "ปาร์ค (เกริกเกียรติ สว่างวงศ์)", role: "เบส" },
      { id: 204, name: "ฟิลิปส์ (ฟิลิปส์ เปรมสิริกรณ์)", role: "กลอง" },
    ],
  },
  {
    id: 3,
    name: "Only Monday",
    genre: "Indie Rock / Alternative",
    formedYear: 2020,
    image: "/images/only-monday.jpg",
    description: "วงดนตรีรุ่นใหม่ไฟแรงเจ้าของเพลงฮิตติดหู ถ่ายทอดความรู้สึกและมุมมองความรักของคนรุ่นใหม่ได้อย่างลึกซึ้ง",
    isActive: true,
    members: [
      { id: 301, name: "ธีร์ (ทีปกร คำสุรีย์)", role: "ร้องนำ / กีตาร์" },
      { id: 302, name: "โปรด (วริศ สาระเขตต์)", role: "เบส" },
      { id: 303, name: "เฟรม (คฑาวุธ ขำทอง)", role: "กลอง" },
    ],
  },
];