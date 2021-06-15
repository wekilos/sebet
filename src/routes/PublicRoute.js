import React, { Suspense } from "react";
import { Route} from "react-router-dom";
// import { isLogin } from "../utils";
import { Layout } from "antd";
// import Headers from "../components/header";
// import Footer from "../components/footer";
import { Loading } from "../components/loading";


import "antd/dist/antd.css";
const Headers = React.lazy(()=>import("../components/header"));
const Footer = React.lazy(()=>import("../components/footer"));
const { Content } = Layout;

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        
          <Layout >
            <Suspense fallback={<Loading />}>
                <Headers />
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
              <Footer />
            </Suspense>
          </Layout>
      
      }
    />
  );
};

export default PublicRoute;
