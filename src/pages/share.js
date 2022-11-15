import React, { useEffect } from "react";
import Head from "next/head";
import SEO from "components/SEO";

export default function SharePage(metaProps) {
  useEffect(() => {
    window.location.assign("https://go.investwithtribe.com/wc2022");
  }, []);

  return (
    <>
      <SEO />
    </>
  );
}
