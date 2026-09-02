import type { StoreProduct, VariantAttribute } from "@/modules/stores";

export interface ListVendorStoreProductsParams {
  search?: string;
  page?: number;
  limit?: number;
  isActive?: boolean;
}

export interface ListVendorStoreProductsResponse {
  status: "success";
  data: {
    products: StoreProduct[];
    total: number;
    page: number;
    limit: number;
  };
}

export interface StoreProductVariantPayload {
  sku: string;
  price: number;
  salePrice?: number;
  saleStartAt?: string;
  saleEndAt?: string;
  imageUrl?: string;
  images?: string[];
  isDefault?: boolean;
  attributes?: VariantAttribute[];
}

export interface CreateVendorStoreProductPayload {
  name: string;
  slug?: string;
  description?: string;
  brand?: string;
  categoryId: string;
  basePrice?: number;
  variants: StoreProductVariantPayload[];
  defaultVariantId?: string;
  images?: string[];
  tags?: string[];
}

export interface CreateVendorStoreProductResponse {
  status: "success";
  data: {
    product: StoreProduct;
  };
}

export interface GetVendorStoreProductResponse {
  status: "success";
  data: {
    product: StoreProduct;
  };
}
