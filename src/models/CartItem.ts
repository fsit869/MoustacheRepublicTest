import SizeOption from "@/models/SizeOption";

export interface CartItem {
  id: number,
  productId: number,
  quantity: number,
  size: SizeOption
}
