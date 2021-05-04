export type ProductInfo = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}
export type CartItem = {
  productId: string;
  image: string;
  price: number;
  quantity: number;
}