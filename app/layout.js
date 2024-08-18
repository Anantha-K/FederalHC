import React, { Suspense } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FISAT HORIZON CLUB",
    description: "The Fisat Horizon Club is dedicated to exploring and advancing technology through VR, AR, and web development.",
    icons: {
      icon: "/Logo3-3.png", 
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        
        {children}
                </body>
    </html>
  );
}
