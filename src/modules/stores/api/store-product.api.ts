import { api } from "@/services/api/requests";

import type {
  ListStoreProductsParams,
  ListStoreProductsResponse,
  GetStoreProductResponse,
} from "@/modules/stores";

const storeProductApi = {
  listStoreProducts(storeId: string, params?: ListStoreProductsParams) {
    return api.get<ListStoreProductsResponse>(`/store/${storeId}/products`, {
      params,
    });
  },
  getStoreProductById(storeId: string, productId: string) {
    return api.get<GetStoreProductResponse>(
      `/store/${storeId}/products/${productId}`,
    );
  },
};

export default storeProductApi;
