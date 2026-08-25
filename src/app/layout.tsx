import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Fitora",
  description: "My Contributions",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white p-4">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
