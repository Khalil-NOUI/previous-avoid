import "@/app/ui/global.css";
import { inter } from '@/app/ui/fonts';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template : '%$ | Acme Dashboard',
    default : 'Acme Dashboard',
  },
  description: 'The official Next.js Course',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'NEx' }, ],
  creator: 'Jiachi Liu',
  publisher: 'Nexter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
