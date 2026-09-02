export interface VariantAttribute {
  name: string;
  value: string;
}

export interface ProductVariant {
  _id: string;
  sku: string;
  price: number;
  salePrice: number | null;
  saleStartAt: string | null;
  saleEndAt: string | null;
  imageUrl: string | null;
  images: string[];
  isDefault: boolean;
  attributes: VariantAttribute[];
  currentPrice: number;
  isSaleActive: boolean;
}

export interface StoreProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  brand: string;
  category: unknown | null;
  store: unknown | null;
  basePrice: number | null;
  variants: ProductVariant[];
  defaultVariantId: string | null;
  tags: string[];
  mainVariant: ProductVariant | null;
  matchedCount: number;
  isActive: boolean;
  salesCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ListStoreProductsParams {
  search?: string;
  page?: number;
  limit?: number;
  isActive?: boolean;
}

export interface ListStoreProductsResponse {
  status: "success";
  data: {
    products: StoreProduct[];
    total: number;
    page: number;
    limit: number;
  };
}

export interface GetStoreProductResponse {
  status: "success";
  data: {
    product: StoreProduct;
  };
}
