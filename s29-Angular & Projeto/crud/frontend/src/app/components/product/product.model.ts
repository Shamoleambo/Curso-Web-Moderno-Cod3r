export interface Product{
    //The ? means this attribute is optional
    id?: number;
    name: string;
    price: number | null;
}