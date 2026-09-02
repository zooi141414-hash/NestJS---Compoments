export type Member = {
  id: number;
  name: string;
  role: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  formedYear: number;
  image: string;
  members: Member[];
  description?: string;
  isActive: boolean;
};