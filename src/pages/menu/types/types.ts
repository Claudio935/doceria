


export type Product = {
    id:string;
    titleProduct: string;
    price: number;
    quantify?: number;
    category: string;
    description?: string;
    image: string | null;
}

export interface productFormData {

    id: string,
    titleProduct: string,
    price: number,
    category: string,
    image: string | null,
    description?: string
}
export type MenuProps = {
    category: string
    products: Product[]
    image?: File | null
}
export interface StateOpenModal extends Product {
    
    category: string;
}

export interface CartState {
    cart:{
     [key:string]:[
        {
            id: string,
            titleProduct: string,
            price: number,
            quantify: number,
          }
     ];
     
    }
  }