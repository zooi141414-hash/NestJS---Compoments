// src/types/band.ts
export type Member = {
  id: number;
  name: string;
  role: string;
  image?: string; // เพิ่มฟิลด์รูปโปรไฟล์ของสมาชิก (Optional)
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  formedYear: number;
  isActive: boolean;
  image: string;
  description?: string;
  members: Member[];
};