export type ProductsApi = Array<ProductItemApi>;

export interface ProductItemApi {
    id: string;
    type: "shirts" | "jackets" | "accessories";
    name: string;
    color: Array<string>;
    price: number;
    manufacturer: string;
}

export interface AvailabilitiesApi {
    code: number;
    response: Array<AvailabilityItemApi>;
}

export interface AvailabilityItemApi {
    id: string;
    dataPayload: string;
}
