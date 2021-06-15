import { lazy } from "react";

export const NotFound = lazy(() => import("./404/404"));
export const Test = lazy(() => import("./test"));
export const Home = lazy(()=>import("./homepage/home"));
export const Arzanladysh = lazy(()=>import("./arzanladyshlar/arzanladysh"));
export const Login = lazy(()=>import("./login/login"));
export const Signup = lazy(()=>import("./login/signup"));
export const About = lazy(()=>import("./about_us/about"));
export const Brend = lazy(()=>import("./brendler/brend"));
export const Sebet = lazy(()=>import("./sebet/sebet"));
export const Sargyt = lazy(()=>import("./sargyt/sargyt"));
export const Profile = lazy(()=>import("./profile/profile"));
export const Hasabym = lazy(()=>import("./hasabym/hasabym"));


