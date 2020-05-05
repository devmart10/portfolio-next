import React from "react";
import { NextSeo } from "next-seo";

const Seo = () => {
  return (
    <NextSeo
      title="Devon Martin"
      description="About Me | Devon Martin"
      canonical="https://devon-martin.now.sh/"
      openGraph={{
        url: "https://devon-martin.now.sh/",
        type: "website",
        locale: "en_IE",
        title: "Devon Martin",
        description: "About Me | Devon Martin",
        site_name: "Devon Martin",
      }}
      twitter={{
        handle: "@devmart10",
        site: "@devmart10",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
