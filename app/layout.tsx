import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Brasil Mais Energia | Ecossistema Completo do Setor Elétrico",
  description: "Conectando consumidores, empresas, fornecedores e profissionais do setor elétrico brasileiro. Geração Distribuída, Mercado Livre, Cursos EAD e muito mais.",
  keywords: "energia solar, geração distribuída, mercado livre de energia, cursos energia, marketplace energia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${lato.variable} font-sans antialiased`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

