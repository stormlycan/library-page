interface Book {
  id: number;
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
  isLoanedBook?: boolean;
}
