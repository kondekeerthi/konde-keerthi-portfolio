import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Konde Keerthi — AI Developer Portfolio",
  description:
    "Portfolio of Konde Keerthi, AI Developer at PCS Police Department. Web development, data analytics, automation and DevOps."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
