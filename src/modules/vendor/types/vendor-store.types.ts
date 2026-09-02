import type { Store } from "@/modules/stores";

export interface CreateStorePayload { name: string; email: string; logo?: string; openingTime: string; closingTime: string; categoryId?: string; categoryName?: string; authorizedBrand?: string; }
export interface CreateStoreResponse { status: "success"; message: string; data: { store: Store; }; }
export interface GetMyStoreResponse { status: "success"; data: { store: Store; }; }
export interface UpdateStoreSettingsPayload { name?: string; logo?: string; isActive?: boolean; openingTime?: string; closingTime?: string; categoryId?: string; authorizedBrand?: string; }
export interface UpdateStoreSettingsResponse { status: "success"; message: string; data: { store: Store; }; }
