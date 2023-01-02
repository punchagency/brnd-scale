import BrandsManage from "../screens/BrandsManage";
import Home from "../screens/Home";
import Login from "../screens/Login";
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
    component: Home,
    name: "Home Screen",
    protected: true,
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
];

export default routes;
