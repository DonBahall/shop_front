import { SHOP_ROUTE, BASKET_ROUTE, ITEM_ROUTE } from "../utils/consts";
import Shop from "../pages/Shop";
import Basket from "../pages/Basket";
import CambPage from "../pages/CambPage";

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: ITEM_ROUTE + '/:id',
    Component: CambPage
  }
];


// export default publicRoutes;