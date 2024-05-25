import { JSX } from "react";
import { Open_Sans } from "next/font/google";
import { OnlyChildrenProps } from "@/types/component-types";
import { EdgeStoreProvider } from "@/lib/edgestore";
import type { Metadata } from "next";
import "@/styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Cute Shop",
  description: "Description about Cute Shop",
};

export default function RootLayout({
  children,
}: Readonly<OnlyChildrenProps>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={openSans.className}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
