import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/landing_page/nav";


const space_grotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Positivitus",
  description: "Digital marketing agency",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.className} h-full antialiased`}
    >
      <body className={`${space_grotesk.className} min-h-full flex flex-col`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
