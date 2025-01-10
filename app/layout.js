import './globals.css';

export const metadata = {
   title: '$MANGAI',
   description: 'TRUTH TERMINALS MANGAI'
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={`antialiased`}>{children}</body>
      </html>
   );
}
