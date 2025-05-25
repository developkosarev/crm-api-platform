import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Providers } from "@/src/common/Providers";
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
