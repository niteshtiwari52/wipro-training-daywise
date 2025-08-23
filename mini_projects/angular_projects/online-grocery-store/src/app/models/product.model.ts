export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}