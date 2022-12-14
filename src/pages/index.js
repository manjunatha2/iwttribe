import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/SEO";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import AboutUs from "sections/AboutUs";
import ExcitingFeatures from "sections/exciting-features";
import Rules from "sections/Rules";
import Prizes from "sections/Prizes";
import WorkHard from "sections/work-hard";
import UltimateFeatures from "sections/ultimate-features";
import HappyCustomer from "sections/happy-customer";
import Blog from "sections/blog";
import SubscribeUs from "sections/subscribe-us";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Investwithtribe"
          description="Invest Better Invest Together"
        />
        <Banner />
        <AboutUs />
        <Rules />
        <Prizes />
        <Services />
        {/* <ExcitingFeatures /> */}
        {/* <WorkHard /> */}
        {/* <UltimateFeatures /> */}
        {/* <HappyCustomer /> */}
        {/* <Blog /> */}
        {/* <SubscribeUs /> */}
      </Layout>
    </ThemeProvider>
  );
}
