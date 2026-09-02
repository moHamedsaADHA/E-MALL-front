import { api } from "@/services/api/requests";
import type { CreateStorePayload, CreateStoreResponse, GetMyStoreResponse, UpdateStoreSettingsPayload, UpdateStoreSettingsResponse } from "@/modules/vendor";
const vendorStoreApi = { createStore(payload: CreateStorePayload) { return api.post<CreateStoreResponse, CreateStorePayload>("/store", payload); }, getMyStore() { return api.get<GetMyStoreResponse>("/store/my-store"); }, updateStoreSettings(storeId: string, payload: UpdateStoreSettingsPayload) { return api.patch<UpdateStoreSettingsResponse, UpdateStoreSettingsPayload>(`/store/${storeId}/manage/settings`, payload); } };
export default vendorStoreApi;
