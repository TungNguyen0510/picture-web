import Cart from "../feature/cart";
import HomePage from "../feature/home";
import ProductDetail from "../feature/product-detail";
import ListProduct from "../feature/list-product";
import Checkout from "../feature/chekout";
import About from "../feature/about";
import Contact from "../feature/contact";
import Map from "../feature/map";
import Recruit from "../feature/recruit";
import Login from "../feature/login";
import Register from "../feature/register";
import Account from "../feature/account";
import { ROUTE } from "./config";

export const APP_ROUTER = [
  {
    path: ROUTE.HOME,
    element: HomePage,
  },
  {
    path: ROUTE.CART,
    element: Cart,
  },
  {
    path: ROUTE.DETAIL,
    element: ProductDetail,
  },
  {
    path: ROUTE.LISTPRODUCT,
    element: ListProduct,
  },
  {
    path: ROUTE.CHECKOUT,
    element: Checkout,
  },
  {
    path: ROUTE.ABOUT,
    element: About,
  },
  {
    path: ROUTE.CONTACT,
    element: Contact,
  },
  {
    path: ROUTE.MAP,
    element: Map,
  },
  {
    path: ROUTE.RECRUITMENT,
    element: Recruit,
  },
  {
    path: ROUTE.LOGIN,
    element: Login,
  },
  {
    path: ROUTE.REGISTER,
    element: Register,
  },
  {
    path: ROUTE.ACCOUNT,
    element: Account,
  },
];
