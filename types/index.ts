interface Entity {
  id: string;
  name: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

interface Url {
  url?: string | null;
  imageUrl?: string | null;
}

export interface Brand extends Entity, Url {}

export interface Product extends Entity, Url {
  brand?: Brand | null;
  description?: string;
}
