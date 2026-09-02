import { api } from "@/services/api/requests";

import type {
  ListVendorStoreProductsParams,
  ListVendorStoreProductsResponse,
  CreateVendorStoreProductPayload,
  CreateVendorStoreProductResponse,
} from "@/modules/vendor";

const vendorProductApi = {
  listMyStoreProducts(
    storeId: string,
    params?: ListVendorStoreProductsParams,
  ) {
    return api.get<ListVendorStoreProductsResponse>(
      `/store/${storeId}/manage/products`,
      { params },
    );
  },
  createStoreProduct(
    storeId: string,
    payload: CreateVendorStoreProductPayload,
  ) {
    return api.post<
      CreateVendorStoreProductResponse,
      CreateVendorStoreProductPayload
    >(`/store/${storeId}/manage/products`, payload);
  },
};

export default vendorProductApi;
