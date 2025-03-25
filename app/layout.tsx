"use client";
import "./globals.scss";
import { Footer, Navbar } from "./components";
import { AuthProvider } from "./providers";
import Head from "next/head";
import * as ga from "../lib/ga";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = "G-17GRNYL0R5";
  const adClient = "ca-pub-6532650680025889";
  return (
    <html lang="en">

<head>
         {/* Existing meta tags */}
         <title>sainiharish123</title>
        <meta name="google-analytics-id" content="G-17GRNYL0R5"></meta>
        <meta name="google-adsense-account" content="ca-pub-6532650680025889"></meta>
        <meta name="title" content="mygreed" />
        <meta name="description" content="blog" />
        <meta name="keywords" content="portfolio,next-js,blog " />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_MAIN_URL} />
        <meta property="og:title" content="sainiharish123" />
        <meta property="og:description" content="next=jss" />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_MAIN_URL + "/logo.png"}
        />
        <meta property="og:locale" content="id" />
        <meta property="og:image:alt" content="logo" />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_MAIN_URL}
        />
        <meta property="twitter:title" content="PsychoArt - NFT Marketplace" />
        <meta property="twitter:description" content="Buy & sale nft online" />
        <meta
          property="twitter:image"
          content={process.env.NEXT_PUBLIC_MAIN_URL + "logo.png"}
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-6532650680025889" />

        <GoogleTagManager gtmId={`${gtmId}`} />

        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
          crossOrigin="anonymous"
        ></script>

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        ></script>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </head>
      <head>
      

        {/* Google Analytics Script */}

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        ></script>
             <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-17GRNYL0R5"
        ></script>
          <GoogleTagManager gtmId={`${gtmId}`} />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-17GRNYL0R5')
          `}
        </script>

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6532650680025889"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={`main_bg h-full text-white w-full`}>
        <AuthProvider>
          <div>
            <Navbar />
            <div className="p-4">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}