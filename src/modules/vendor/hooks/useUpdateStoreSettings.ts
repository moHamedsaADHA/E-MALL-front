"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/hooks/useApiMutation";
import { vendorStoreApi, vendorStoreKeys, type UpdateStoreSettingsPayload, type UpdateStoreSettingsResponse } from "@/modules/vendor";
interface Variables { storeId: string; payload: UpdateStoreSettingsPayload; }
const useUpdateStoreSettings = () => { const queryClient = useQueryClient(); return useApiMutation<Variables, UpdateStoreSettingsResponse>({ mutationFn: ({ storeId, payload }) => vendorStoreApi.updateStoreSettings(storeId, payload), options: { onSuccess: (response) => queryClient.setQueryData(vendorStoreKeys.myStore, response) } }); };
export default useUpdateStoreSettings;
