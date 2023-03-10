import BrandsManage from "../screens/BrandsManage";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/Auth/Login";
import Offers from "../screens/Offers/Offers";
import MyOffers from "../screens/PublisherScreens/MyOffers/MyOffers";
import PublisherManage from "../screens/PublisherManage";
import RegisterStart from "../screens/RegisterStart";
import PaymentReport from "../screens/Reports/PaymentReport";
import Reports from "../screens/Reports/ProductReports";
import PublisherReports from "../screens/Reports/PublisherReports";
import VerifyAccount from "../screens/Auth/VerifyAccount";
import ActiveProducts from "../screens/PublisherScreens/MyOffers/ActiveProducts";
import ActiveBrands from "../screens/PublisherScreens/MyOffers/ActiveBrands";
import BrandProducts from "../screens/PublisherScreens/BrandProducts";
import PublisherReporting from "../screens/PublisherScreens/PublisherReporting";
import JoinBrand from "../screens/PublisherScreens/Offers/JoinBrand";
import JoinOffer from "../screens/PublisherScreens/Offers/JoinOffer";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Dashboard,
    name: "Dashboard",
    protected: false,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/signup",
    component: RegisterStart,
    name: "Register Screen",
    protected: false,
  },
  {
    path: "/verify-account",
    component: VerifyAccount,
    name: "Verify Account Screen",
    protected: false,
  },
  {
    path: "/manage-brand",
    component: BrandsManage,
    name: "Manage Brand Screen",
    protected: false,
  },
  {
    path: "/publishers",
    component: PublisherManage,
    name: "Manage Publisher Screen",
    protected: false,
  },
  {
    path: "/offers",
    component: Offers,
    name: "Manage Offers Screen",
    protected: false,
  },
  {
    path: "/reports",
    component: Reports,
    name: "Product Reports Screen",
    protected: false,
  },
  {
    path: "/product-reports",
    component: Reports,
    name: "Product Reports Screen",
    protected: false,
  },
  {
    path: "/publisher-reports",
    component: PublisherReports,
    name: "Publisher Reports Screen",
    protected: false,
  },
  {
    path: "/payment-reports",
    component: PaymentReport,
    name: "Payment Reports Screen",
    protected: false,
  },
  {
    path: "/publisher",
    component: Dashboard,
    name: "Publisher Dashboard Screen",
    protected: false,
  },
  {
    path: "/publisher/offers",
    component: MyOffers,
    name: "Publisher offers Screen",
    protected: false,
  },
  {
    path: "/publisher/active-products",
    component: ActiveProducts,
    name: "Publisher Active Products Screen",
    protected: false,
  },
  {
    path: "/publisher/active-brands",
    component: ActiveBrands,
    name: "Publisher Active Brands Screen",
    protected: false,
  },
  {
    path: "/publisher/brand-products",
    component: BrandProducts,
    name: "Publisher Products Screen",
    protected: false,
  },
  {
    path: "/publisher/reports",
    component: PublisherReporting,
    name: "Publisher reports Screen",
    protected: false,
  },
  {
    path: "/publisher/brand-details",
    component: PaymentReport,
    name: "Payment Reports Screen",
    protected: false,
  },
  {
    path: "/publisher/join-brand",
    component: JoinBrand,
    name: "Publisher Join Brand Screen",
    protected: false,
  },
  {
    path: "/publisher/join-offer",
    component: JoinOffer,
    name: "Publisher Join Offer Screen",
    protected: false,
  },
];

export default routes;
