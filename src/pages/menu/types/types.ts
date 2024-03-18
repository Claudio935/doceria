


export type Product = {
    id:string;
    titleProduct: string;
    price: number;
    quantify?: number;
    category: string;
    description?: string;
    image: string | null;
    favorite: number;
}

export interface productFormData {

    id: string,
    titleProduct: string,
    price: number,
    category: string,
    image: string | null,
    description?: string
    favorite: number
}

export interface commentData {
    id: string,
    name:string;
    comment: string;
    job?: string;
    image?: string | File | null;
}
export type productSelected = productFormData | undefined

export interface StateOpenModal extends Product {
    
    category: string;
}
export interface CartHook {
    numberOfProduct?: number, 
    sortBy?: string,
    order?: 'asc' | 'desc'

}
export interface CommentHook {
    numberOfComment?: number, 
    sortBy?: string,
    order?: 'asc' | 'desc'

}
export interface CartState {
   
     [key:string]:[
        {
            id: string,
            titleProduct: string,
            price: number,
            quantify: number,
            favorite: number,
          }
     ];
     
    
  }

  export interface Store {
   cart:{
    [key:string]:[
        {
            id: string,
            titleProduct: string,
            price: number,
            quantify: number,
            favorite: number,
          }
     ];

   },
   alert:{
    message: string,
    open: boolean
   }
   
    
   
 }