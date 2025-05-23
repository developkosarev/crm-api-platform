import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/src/components/widgets/Header';
import Footer from '@/src/components/widgets/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
