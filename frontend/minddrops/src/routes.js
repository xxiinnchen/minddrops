import Index1 from "./pages/Index1/Index1";

//Auth Pages
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PasswordForget from "./pages/Auth/PasswordForget";

const routes = [
  { path: "/password-forget", component: PasswordForget },
  { path: "/login", component: Login },
  { path: "/sign-up", component: Signup },

  { path: "/home-one", component: Index1 },
  { path: "/", component: Index1 },
];

export default routes;
