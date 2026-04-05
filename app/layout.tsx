import { Footer } from "./components/basic/Footer";
import { Navbar } from "./components/basic/Navbar";
import "../app/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 flex flex-col">
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}