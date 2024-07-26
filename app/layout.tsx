import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from 'next/script';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniela Fajardo Website",
  description: "Software Engineer specializing in Python, AI, React, and NextJS. Full-stack development, data analysis, and app development. Let's build amazing projects together!",
  keywords: ["Daniela Fajardo", "software engineer", "python", "AI", "react", "nextjs", "full stack", "frontend", "backend", "data analyst", "aws", "wordpress"],
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  const keywords = Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords || '';

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content={keywords} />
        <title>{metadata.title as string}</title>
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        />
        <Script id='google-analytics' strategy='lazyOnload'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
