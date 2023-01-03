import BrandsManage from "../screens/BrandsManage";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/Login";
import PublisherManage from "../screens/PublisherManage";
import RegisterStart from "../screens/RegisterStart";
import VerifyAccount from "../screens/VerifyAccount";

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
    path: "/manage-publishers",
    component: PublisherManage,
    name: "Manage Publisher Screen",
    protected: false,
  },
];

export default routes;
