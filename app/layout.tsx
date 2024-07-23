import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniela Fajardo - Python, AI, React Software Engineer",
  description: "Software Engineer specializing in Python, AI, React, and NextJS. Full-stack development, data analysis, and app development. Let's build amazing projects together!",
  keywords: ["software engineer", "python", "AI", "react", "nextjs", "full stack", "frontend", "backend", "data analyst", "aws", "wordpress"],
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
