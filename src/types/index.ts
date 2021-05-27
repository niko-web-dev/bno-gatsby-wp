import {ReactNode} from "react";

export type TsetSlideAnim = {
  setSlideAnim: (boolean) => void;
};

export type TBtnProps = {
  setSlideAnim?: (boolean) => void
  title: string
  color: string
  link: string
}
export type TLogoProps = {
  color: string
}

export type IPropsIcons = {
  dir: 'row' | 'column';
  children: ReactNode;
}

export type TProductsWP = {
  products: Array<TProductWP>
};

export type TProductWP = {
  id: number;
  slug: string;
  title: string;
  uri: string;
};

export type TProduct = {
  id: number;
  article: string;
  title: string;
  // description: string
  src: string;
  scrBrand: string;
  price: string;
  size?: string[];
  favorites: boolean;
};

export type TDetailsCadrs = {
  img: string;
  title: string;
  text: string;
};

// export interface IProducts {
//     product: IProduct
// }
