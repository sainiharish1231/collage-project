"use client"
import "./globals.scss";
import { Footer, Navbar } from "./components";
import { AuthProvider } from "./providers";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`main_bg h-full text-white w-full`}>
        <AuthProvider>
          <div>
            <Navbar />
            {children}

            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
