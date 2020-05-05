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
        // images: [
        //   {
        //     url: "https://www.example.ie/og-image-01.jpg",
        //     width: 800,
        //     height: 600,
        //     alt: "Og Image Alt",
        //   },
        //   {
        //     url: "https://www.example.ie/og-image-02.jpg",
        //     width: 900,
        //     height: 800,
        //     alt: "Og Image Alt Second",
        //   },
        //   { url: "https://www.example.ie/og-image-03.jpg" },
        //   { url: "https://www.example.ie/og-image-04.jpg" },
        // ],
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
