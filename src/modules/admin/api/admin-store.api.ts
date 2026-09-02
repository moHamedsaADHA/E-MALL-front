import { api } from "@/services/api/requests";
import type { AdminStoreListParams, AdminStoreListResponse } from "@/modules/admin";
const adminStoreApi = { listStores(params?: AdminStoreListParams) { return api.get<AdminStoreListResponse>("/store/admin", { params }); } };
export default adminStoreApi;
