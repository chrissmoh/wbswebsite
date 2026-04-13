import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarConfigProvider } from "@/contexts/sidebar-context";
import { inter } from "@/lib/fonts";

const assetBase = process.env.NEXT_PUBLIC_LARAVEL_ASSET_URL ?? "http://127.0.0.1:8000";

export const metadata: Metadata = {
  title: "WBS Research Solutions",
  description: "Professional academic consultancy website for WBS Research Solutions Professionals.",
  icons: {
    icon: `${assetBase}/images/wbs-logo.svg`,
    shortcut: `${assetBase}/images/wbs-logo.svg`,
    apple: `${assetBase}/images/wbs-logo.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="nextjs-ui-theme">
          <SidebarConfigProvider>
            {children}
          </SidebarConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
