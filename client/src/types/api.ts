export type ProductsApi = Array<ProductItemApi>;

export interface ProductItemApi {
    id: string;
    type: CategoryApi;
    name: string;
    color: Array<string>;
    price: number;
    manufacturer: string;
}

export type CategoryApi = "gloves" | "facemasks" | "beanies";
