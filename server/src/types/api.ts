export type ProductsApi = Array<ProductItemApi>;

export interface ProductItemApi {
    id: string;
    type: CategoryApi;
    name: string;
    color: Array<string>;
    price: number;
    manufacturer: string;
}

export interface AvailabilitiesApi {
    code: number;
    response: AvailabilityItemApi[];
}

export interface AvailabilityItemApi {
    id: string;
    DATAPAYLOAD: string;
}

export type CategoryApi = "gloves" | "facemasks" | "beanies";
