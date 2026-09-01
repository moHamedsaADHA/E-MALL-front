import { api } from "@/services/api/requests";

import type {
  ListVendorStoreProductsParams,
  ListVendorStoreProductsResponse,
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
};

export default vendorProductApi;
