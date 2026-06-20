import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

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
          <AuthProvider>
            <Navbar />
            <main>{children}</main>

            <Footer />

            <Toaster position="top-right" richColors closeButton />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
