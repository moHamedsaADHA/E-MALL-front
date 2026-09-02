"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/hooks/useApiMutation";
import { vendorStoreApi, vendorStoreKeys, type UpdateStoreOrderPayload, type UpdateStoreOrderResponse } from "@/modules/vendor";
interface Variables { storeId: string; orderId: string; payload: UpdateStoreOrderPayload; }
const useUpdateStoreOrder = () => { const queryClient = useQueryClient(); return useApiMutation<Variables, UpdateStoreOrderResponse>({ mutationFn: ({ storeId, orderId, payload }) => vendorStoreApi.updateStoreOrder(storeId, orderId, payload), options: { onSuccess: (response, { storeId, orderId }) => { queryClient.setQueryData(vendorStoreKeys.orderDetail(storeId, orderId), response); queryClient.invalidateQueries({ queryKey: vendorStoreKeys.orders(storeId) }); } } }); };
export default useUpdateStoreOrder;
