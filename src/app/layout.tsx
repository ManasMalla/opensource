import type { Metadata } from "next";
import "./globals.css";
import LanguageSelector from "@/components/LanguageSelector";

export const metadata: Metadata = {
  title: "Open Source | Manas Malla",
  description:
    "Browse through my featured projects to find work to use, share, and build on together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Google+Sans:400,500,700|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700&amp;display=swap"
        ></link>
      </head>
      <body className={`antialiased`}>
        {children}
        <div className="py-6 px-8 border-t">
          <div>
            <p className="text-xl font-medium">Manas Malla</p>
          </div>
          <div className="h-[1px] bg-neutral-300 my-6 w-full mx-auto" />
          <div className="flex justify-between items-start font-medium text-base text-neutral-500">
            <div className="flex gap-1">
              <a>Terms</a>|<p>Privacy</p>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </body>
    </html>
  );
}
