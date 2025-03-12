export type ProductType = {
  all_count: number;
  availability: string;
  axiom_monthly_price: string;
  benefit: number;
  discount_price: number;
  id: number;
  image: string;
  is_can_loan_order: number;
  name: string;
  old_price: boolean;
  reviews_average: boolean;
  reviews_count: number;
  sale_months: [];
  sale_price: number;
  stickers: [];
};
export type ProductCartType = {
  item: ProductType;
};
export type Nom = {
  total: number;
  products: ProductType;
};
