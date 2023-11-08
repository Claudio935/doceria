import { ListCategory } from '../../../utils/data';


export type Product = {
    id:number;
    titleProduct: string;
    price: number;
    quantify: number;
}

export type Props = {
    titleCategory: ListCategory;
    sizeProduct: string | undefined;
    products: Product[]
}
export interface StateOpenModal extends Product {
    
    titleCategory:ListCategory;
}
export interface CartState {
    cart:{
     caseirinhos:Product[];
      brigadeiros:Product[],
      paes:Product[]
      sobremesas:Product[]
    }
  }