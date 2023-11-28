import './globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'BistroBliss',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
