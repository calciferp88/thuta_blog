import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Head
 from "next/head";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Head>
        <title>Personal Blog by Pyae Thuta</title>
        <meta name="description" content="Blog posts by Pyae Thuta" />
        <meta property="og:title" content="Pyae Thuta - Blog" />
        <meta property="og:description" content="Blog posts by Pyae Thuta" />
        <meta property="og:url" content="https://thuta-blog.vercel.app" />
        <meta property="og:image" content="https://thuta-blog.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F64cuocpw%2Fproduction%2F8205c00fad9b933cec31c23ac0e09d0a1ada79c9-1024x768.png&w=1920&q=75" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Pyae Thuta - Blog Image" />
      </Head>

      <html lang="en">
        <body className="{inter.className} ">
          <div className="bg-[#c64f7d] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#c64f7d]"></div>
          <div className="bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="max-w-2xl mx-auto px-4">{children}</main>
          </ThemeProvider>

          
        </body>
      </html>
    </>
  );
}
