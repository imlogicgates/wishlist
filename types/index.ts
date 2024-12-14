interface Entity {
  id: string;
  name: string;
}

interface Brand extends Entity {
  url?: string;
  imageUrl?: string;
}

interface Product extends Entity {
  brand?: Brand;
  url?: string;
  imageUrl?: string;
}
