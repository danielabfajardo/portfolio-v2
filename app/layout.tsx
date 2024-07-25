import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniela Fajardo - Python, AI, React Software Engineer",
  description: "Software Engineer specializing in Python, AI, React, and NextJS. Full-stack development, data analysis, and app development. Let's build amazing projects together!",
  keywords: ["Daniela Fajardo", "software engineer", "python", "AI", "react", "nextjs", "full stack", "frontend", "backend", "data analyst", "aws", "wordpress"],
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              });
          `}
      </Script>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}

