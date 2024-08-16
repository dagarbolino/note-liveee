import SessionWrapper from "@/lib/SessionWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Live",
  description: "Generated Note of live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
