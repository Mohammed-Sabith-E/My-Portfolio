import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Mohammed Sabith - Software Developer",
  description:
    "My name is Mohammed Sabith. I am a passionate and dedicated full-stack developer with hands-on experience in building modern web applications using the MERN stack. I enjoy crafting clean, responsive, and user-friendly interfaces, and I have a strong interest in backend development, cloud deployment, and cybersecurity. As a self-driven learner, I constantly explore new technologies and best practices to stay ahead in the ever-evolving tech landscape. I take pride in solving complex problems and turning ideas into real-world solutions. I'm currently open to exciting opportunities that align with my skills and allow me to grow further as a developer.",
  icons: {
    icon: './dev.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
