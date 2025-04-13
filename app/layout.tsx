"use client";
import "./globals.scss";
import { Footer } from "./components";
import { AuthProvider } from "./providers";
import Head from "next/head";
import * as ga from "../lib/ga";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import Link from "next/link";

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
        <meta
          name="google-adsense-account"
          content="ca-pub-6532650680025889"></meta>
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
          crossOrigin="anonymous"></script>

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}></script>
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
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
      </head>
      <head>
        {/* Google Analytics Script */}

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}></script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-17GRNYL0R5"></script>
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
          crossOrigin="anonymous"></script>
      </head>

      <body className={`main_bg h-full text-white w-full`}>
        <AuthProvider>
          <div>
            <nav
              className="fixed   z-[400] s-center transition ease-in duration-200 hover:text-purple-600
        inset-x-0
        bottom-0
        mt-[60px]">
              <div
                className="sticky bottom-2  p-4 px-6 m-2 flex items-center justify-between dark:bg-[#ffffff] bg-[#232323] shadow-2xl
         text-[#ffffff] dark:text-[#232323] rounded-full cursor-pointer">
                <Link
                  className="flex flex-col items-center transition ease-in duration-200 hover:text-purple-600 "
                  href={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                  </svg>
                </Link>
                <Link
                  className="flex flex-col items-center transition ease-in duration-200 hover:fill-purple-600 "
                  href={"/Blogpost"}>
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8,2 C8.55229,2 9,2.44771 9,3 C9,3.55228 8.55229,4 8,4 L4,4 L4,12 L12,12 L12,8 C12,7.44771 12.4477,7 13,7 C13.5523,7 14,7.44771 14,8 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L8,2 Z M11.9531,2.63268 L13.3673,4.04689 L7.41421,10 L6,10 L6,8.58579 L11.9531,2.63268 Z M14.7815,1.21846 C15.1721,1.60898 15.1721,2.24215 14.7815,2.63267 L14.0744,3.33979 L12.6602,1.92556737 L13.3673,1.21846 C13.7578,0.827937 14.391,0.827936 14.7815,1.21846 Z" />
                  </svg>
                </Link>
                <Link
                  className="flex flex-col items-center transition ease-in duration-200 hover:text-purple-600 "
                  href={"/Save"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.3}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </Link>
                <Link
                  className="flex flex-col items-center transition ease-in duration-200 hover:text-purple-600 "
                  href={"/profile"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </Link>
              </div>
            </nav>
            <div className="p-4">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
