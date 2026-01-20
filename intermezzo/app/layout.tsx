// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";          // 👈 ①
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intermezzo Sound Studio™",
  description:
    "Producción musical profesional para artistas emergentes.",
  openGraph: {
    title: "Intermezzo Sound Studio™",
    description:
      "Estudio de producción musical remoto para artistas emergentes.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      {/* Preload UnicornStudio script for faster hero background loading */}
      <Script
        id="unicorn-studio-preload"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'script';
            link.href = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js';
            document.head.appendChild(link);
          `,
        }}
      />
      {/* ② — Script en el head, se ejecuta tras la carga inicial */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3LPSKWM');
          `,
        }}
      />
      

      <body className={inter.className}>
        {/* ③ — Fallback <noscript> requerido por GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3LPSKWM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Tu app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LenisSmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}