import SizeOption from "@/models/SizeOption";

export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  imageURL: string,
  sizeOptions: SizeOption[]
}
