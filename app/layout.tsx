import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform asking and answering questions about software development. Get help, share knowledge, and connect with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
