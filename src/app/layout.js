import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar"; // Correct import path
import Head from "next/head";

// Inside the RootLayout function
<Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
</Head>;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
