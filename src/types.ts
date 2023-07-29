export interface ProductTypes {
  id: number;
  title: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  cartQuantity?: number;
}
export interface CartItemTypes {}
export type RootState = {
  products: ProductTypes[];
  carts: ProductTypes[];
};
