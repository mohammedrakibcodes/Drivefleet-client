import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveFleet",
  description: "Premium Car Rental Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
