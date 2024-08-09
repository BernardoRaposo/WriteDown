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
      <head>
      <link rel="icon" href={metadata.icon} />
      <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://writedown-bernardoraposos-projects.vercel.app/" />
        <meta property="twitter:title" content="WriteDown" />
        <meta property="twitter:description" content="Simple blog, great content" />
        <meta property="twitter:image" content="/public/writedown.png" />
      </head>
      <body className={inter.className}>{children}
        <Footer />
      </body>
    </html>
  );
}
