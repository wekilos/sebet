import React,{ Suspense } from "react";
import { Route } from "react-router-dom";
import { NotFound } from "../pages";
import { isLoginAdmin } from "../utils";
import { Layout } from "antd";
// import Header from "../components/header";
// import Footer from "../components/footer";
import { Loading } from "../components/loading";
import "antd/dist/antd.css";
import "./style.css";

const Header = React.lazy(()=>import("../components/header"));
const Footer = React.lazy(()=>import("../components/footer"));
// import Login from "../pages/login/login";
// const Sidebar = React.lazy(() => import("../components/sidebar"));
const { Content } = Layout;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoginAdmin() || true ? (
          <Layout>
            <Suspense fallback={<Loading />}>
                <Header />
           </Suspense>
            <Layout className="site-layout">
              <Content
                style={{
                  minHeight: "100vh"                  
                }}
                className="site-layout-background main_content"
              >
                <Component {...props} />
              </Content>
            </Layout>
            <Suspense fallback={<Loading />}>
              <Footer/>
            </Suspense>
          </Layout>
        ) : (
           <Route component={NotFound} />
 
        )
      }
    />
  );
};

export default PrivateRoute;
