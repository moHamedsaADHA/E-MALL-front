import type { Store } from "@/modules/stores";

export interface CreateStorePayload { name: string; email: string; logo?: string; openingTime: string; closingTime: string; categoryId?: string; categoryName?: string; authorizedBrand?: string; }
export interface CreateStoreResponse { status: "success"; message: string; data: { store: Store; }; }
export interface GetMyStoreResponse { status: "success"; data: { store: Store; }; }
export interface UpdateStoreSettingsPayload { name?: string; logo?: string; isActive?: boolean; openingTime?: string; closingTime?: string; categoryId?: string; authorizedBrand?: string; }
export interface UpdateStoreSettingsResponse { status: "success"; message: string; data: { store: Store; }; }
export interface StoreDashboardResponse { status: "success"; data: { totalProducts: number; productsInCarts: unknown[]; productsInWishlists: unknown[]; bestSelling: unknown[]; }; }
export interface StoreOrder { _id: string; stores: unknown[]; missingItems: unknown[]; createdAt: string; updatedAt: string; }
export interface ListStoreOrdersResponse { status: "success"; data: { orders: StoreOrder[]; total: number; }; }
export interface GetStoreOrderResponse { status: "success"; data: { order: StoreOrder; }; }
export interface UpdateStoreOrderPayload { status: "pending" | "accepted" | "rejected" | "ready" | "fulfilled"; rejectionReason?: string; missingItems?: { orderItemId: string; reason: string; }[]; }
export interface UpdateStoreOrderResponse { status: "success"; message: string; data: { order: StoreOrder; }; }
