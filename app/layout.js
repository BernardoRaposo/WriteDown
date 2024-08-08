import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Write Down",
  description: "Simple blog, great content!",
  icon: "../markdown-logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={metadata.icon} />
      <body className={inter.className}>{children}
        <Footer />
      </body>
    </html>
  );
}
