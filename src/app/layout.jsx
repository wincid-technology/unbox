// app/layout.js or similar
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/RootLayout"; // Adjust the import as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunshine Coropack",
  description: "Crafting Corrugated Boxes with Precision and Care",
  icon: "/public/images/newLogo.png",
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f7d6a8]`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
