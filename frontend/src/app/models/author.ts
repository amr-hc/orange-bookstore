export interface Author {
    id: number;
    name: string;
    bio?: string;
    photo: string;
    books?: any[];
    createdAt?: Date;
    updatedAt?: Date;
  }