import { api } from "@/services/api/requests";
import type { AdminStoreListParams, AdminStoreListResponse, DeleteStoreResponse } from "@/modules/admin";
const adminStoreApi = { listStores(params?: AdminStoreListParams) { return api.get<AdminStoreListResponse>("/store/admin", { params }); }, deleteStore(storeId: string) { return api.delete<DeleteStoreResponse>(`/store/${storeId}/manage/delete`); } };
export default adminStoreApi;
