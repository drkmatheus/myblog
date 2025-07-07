import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "myBlog",
    template: "%s | myBlog",
  },
  description: "Mega Man X Page",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <p className="text-5xl font-bold text-center py-7">FOOTER</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
