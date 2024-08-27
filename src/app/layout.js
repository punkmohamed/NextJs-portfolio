import { Inter } from "next/font/google";
import "./globals.css";
import TranstionProvider from "@/components/transtionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Portfolio App",
  description: "Animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranstionProvider>{children}</TranstionProvider>
      </body>
    </html>
  );
}
