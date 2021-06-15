import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import history from "./history";
import { NotFound,Home,Arzanladysh, Login, Signup, About, Brend, Sebet, Sargyt, Profile, Hasabym} from "../pages/index";
import ScrollIntoView from "./ScrollIntoView";
import { Loading } from "../components/loading";
// import PublicRoute from "./PublicRoute";
 

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const App = () => {
 
  return (
    <BrowserRouter history={history}>
      <ScrollIntoView>
        <Suspense  fallback={<Loading />}>   
          <Switch>
            
             <PrivateRoute
              restricted={false}
              component={Home}
              path="/"
              exact
            />
             <PrivateRoute
              restricted={true}
              component={Home}
              path="/"
              exact
            />
             <PrivateRoute
              restricted={false}
              component={Arzanladysh}
              path="/arzanladyslar"
              exact
            />
            <PrivateRoute
              restricted={false}
              component={Login}
              path="/login"
              exact
            />
            <PrivateRoute
              restricted={false}
              component={Signup}
              path="/signup"
              exact
            />
             <PrivateRoute
              restricted={false}
              component={About}
              path="/about"
              exact
            />
            <PrivateRoute
              restricted={false}
              component={Brend}
              path="/brends"
              exact
            />
            <PrivateRoute
              restricted={false}
              component={Sebet}
              path="/sebet"
              exact
            />
            <PrivateRoute
              restricted={false}
              component={Sargyt}
              path="/sargyt"
              exact
            />

            <PrivateRoute
              restricted={false}
              component={Profile}
              path="/profile"
              exact
            />
            <PrivateRoute
              restricted={false}
              component={Hasabym}
              path="/hasabym"
              exact
            />

            <PublicRoute
            restricted={false}
            component={NotFound}
            path="/notfound"
            exact
            >

            </PublicRoute>
            


           

            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </BrowserRouter>
  );
};

export default App;
