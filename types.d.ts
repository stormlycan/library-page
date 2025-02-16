interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  description: string;
  createdAt: Date | null,
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  description: string;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}