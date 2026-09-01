import { api } from "@/services/api/requests";

import type {
  ListStoreProductsParams,
  ListStoreProductsResponse,
} from "@/modules/stores";

const storeProductApi = {
  listStoreProducts(storeId: string, params?: ListStoreProductsParams) {
    return api.get<ListStoreProductsResponse>(`/store/${storeId}/products`, {
      params,
    });
  },
};

export default storeProductApi;
