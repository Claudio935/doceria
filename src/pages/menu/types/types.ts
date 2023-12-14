


export type Product = {
    id:string;
    titleProduct: string;
    price: number;
    quantify?: number;
    category: string;
}

export interface productFormData {

    id: string,
    titleProduct: string,
    price: number,
    category: string,

}
export type MenuProps = {
    category: string
    products: Product[]
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