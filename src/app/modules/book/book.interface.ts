export interface IBook {
    title: string;
    author: string;
    genre: string;
    category: string;
    language: string;
    price: number;
    stock: number;
    type: 'physical' | 'ebook';
  
    edition?: string;
    publisher?: string;
    country?: string;
    weightKg?: number;
    numberOfPages?: number;
    description?: string;
    coverUrl?: string;
    isLocked?: boolean;
    locationId?: string;
  
    createdAt: Date;
    updatedAt: Date;
  }