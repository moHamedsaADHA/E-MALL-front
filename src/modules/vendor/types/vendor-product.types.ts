import type { StoreProduct } from "@/modules/stores";

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
