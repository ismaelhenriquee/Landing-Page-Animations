import type { Metadata } from 'next';
import './globals.css';
import { Epilogue } from 'next/font/google';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
    title: 'Landing Page',
    description: 'Simple landing page',
};
const epilogue = Epilogue({ subsets: ['latin'], weight: ['500', '600'] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={`${epilogue.className}`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
