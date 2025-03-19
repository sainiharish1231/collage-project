"use client";
import "./globals.scss";
import { Footer, Navbar } from "./components";
import { AuthProvider } from "./providers";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Existing meta tags */}
        <title>sainiharish123</title>
        <meta name="google-analytics-id" content="G-B8BMYM71RC"></meta>
        <meta name="google-adsense-account" content="ca-pub-5983875241543751"></meta>
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
        <meta name="google-adsense-account" content="ca-pub-5983875241543751" />

        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B8BMYM71RC"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B8BMYM71RC');
          `}
        </script>

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5983875241543751"
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