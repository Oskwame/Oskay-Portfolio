import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Os Kwame",
  description: "Portfolio of Os Kwame showcasing skills and services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Main Content */}
        <main className="container mx-auto px-7  md:px-7 lg:px-7 mt-8">
          {children}
        </main> 
      </body>
    </html>
  );
}
