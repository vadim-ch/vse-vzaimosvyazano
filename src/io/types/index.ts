import { BaseResponse } from '../response/response';

export type marketType = {
  id: string,
  ownerId: string,
  albumId: string,
  title: string,
  description: string,
  price: string,
  priceNum: number,
  category: Object,
  date: Date,
  photo: string
}

export type albumsType = {
  id: string,
  ownerId: string,
  title: string,
  photo: string;
}

export type marketAlbumsType = {
  albums: Array<albumsType>;
  products: Array<marketType>;
}

export type pagesType = {
  id: string,
  name: string;
  title: string,
  text: string
}

export type shoppingCartItem = {
  id: string,
  quantity: number;
  product: marketType;
}

export type shoppingCart = {
  sum: number,
  count: number,
  productsSelected: Array<shoppingCartItem>;
}

export type photosType = {
  photo: string;
}

export type orderType = {
  visitorInfo: {
    name: string;
    phone: string;
    email: string;
  };
  delivery: {
    method: 'current' | 'courier' | 'post';
    methodText: string;
    address?: {
      city: string;
      street: string;
    }
  };
  payment: {
    method: 'cash' | 'nocash' | 'post'
    methodText: string;
  };
  cart: shoppingCart;
}

export type executeType = Array<BaseResponse<any>>
